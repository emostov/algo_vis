class Particle {

    //I need to figure out if that position is relative to the node we are in and all adjacent nodes
    constructor(position, velocity, options) {
        this.position = position;
        this.velocity = velocity;
        this.bestPosition = new Array(this.position.length);
        this.fitness = -Infinity;
        this.bestFitness = -Infinity;

        this._inertiaWeight = options.inertiaWeight;
        this._social = options.social;
        this._personal = options.personal;
    }

    
    // this is going to store the current position as its current best as of now
    storePosition() {
        this.bestPosition = this.position.slice(0);
    }
    // Retrieves the particles current position
    getPosition() {
        return this.position.slice(0);
    }
    // Retrieves the particles best saved position
    getBestPosition(){
        return this.bestPosition.slice(0);
    }

    //Updates the particles velocity vector based on inertia,
    //the best performing particle in the swarm and
    // the best position of the current particle saved
    updateVelocity(globalBest, random){
        // !!!!!! need to find out what component is based on particles position
        this.position.forEach((component, idx) => {
            let inertia = this.velocity[idx] * this._inertiaWeight;
            let socialInfluence = (globalBest.position[idx] - component) * random() * this._social;
            let personalInfluence = (this.bestPosition[idx]- component) * random() * this._personal;

            this.velocity[idx] = inertia + socialInfluence + personalInfluence;
        }, this); 
    }

    //This will apply the updated velocity
    updatePosition(){
        this.velocity.forEach((component, idx) => {
            this.position[idx] += component;
        }, this);
    }
    
    static createRandom (domain, options, random) {
        let position = domain.map((interval) => {
            return random() * (interval.end - interval.start) + interval.start;
        });
        
        let velocity = domain.map((interval) => {
            return (random() * (interval.end - interval.start)) * 0.05
        });
        
        return new Particle(position, velocity, options);
    };
    // CreateRandom belongs here
    //-------------------------------------------------------------------------
    
    // ------------------------------------------------------------------------
}

// Used to define domains.
// An *Interval* is anything with a *start* and an *end*.
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};
// ------------------------------------------------------------------------
// Holds particles and carries out the optimization task.
class Optimizer {
    constructor() {
        this._particles = null;
        this._objectiveFunction = null;
        
        this._bestPositionEver = null;
        this._bestFitnessEver = -Infinity;
        
        this._options = {
            inertiaWeight: 0.8,
            social: 0.4,
            personal: 0.4,
            pressure: 0.5
        };
        
        this._async = false;
        this._waiting = false;
        
        this.rng = {
            random: Math.random,
            setSeed: function () { }
        };
    }

    setOptions(options){
        // + *inertiaWeight* - is multiplied every frame with the previous velocity;
        // takes values between 0 and 1
        if (options.inertiaWeight !== undefined) {
            this._options.inertiaWeight = options.inertiaWeight;
        }

        // + *social* dictates the influence of the best performing particle when updating particle velocities
        // takes values between 0 and 1
        if (options.social !== undefined) {
            this._options.social = options.social;
        }

        // + *personal* dictates the influence of a particle's best encountered position
        // takes values between 0 and 1
        if (options.personal !== undefined) {
            this._options.personal = options.personal;
        }

        // + *pressure* - bias in selecting the best performing particle in the swarm.
        // Takes values between 0 and 1; 0 meaning that the best is chosen randomly and 1 that
        // the actual best is computed at every iteration
        if (options.pressure !== undefined) {
            this._options.pressure = options.pressure;
        }
    }

    setObjectiveFunction(objectiveFunction, options){
        this._objectiveFunction = objectiveFunction;
        this._async = options && options.async;
    }

    init(nParticles, generationOption){
        let generator = generationOption instanceof Function ?
            generationOption :
            function () {
                return Particle.createRandom(generationOption, this._options, this.rng.random);
            }.bind(this);

        this._bestPositionEver = null;
        this._bestFitnessEver = -Infinity;

        this._particles = [];
        for (let i = 0; i < nParticles; i++) {
            this._particles.push(generator());
        }
    }

    _getRandomBest(except){
        let ret = Math.floor(this.rng.random() * this._particles.length);

        this._particles.forEach((particle, idx) => {
            if (
                this.rng.random() < this._options.pressure &&
                this._particles[idx].fitness > this._particles[ret].fitness &&
                idx !== except
            ) {
                ret = idx;
            }
        }, this)

        return ret;
    }

    step(callback){
        if (this._async) {
            if (this._waiting) {
                console.warn('Cannot step again before previous requests have been completed!');
                return;
            }
            this._waiting = true;
            let completed = 0;
            this._particles.forEach((particle) => {
                this._objectiveFunction(particle.position, (fitness) => {
                    particle.fitness = fitness;
                    completed += 1;
                    if(completed >= this._particles.length) {
                        this._waiting = false;
                        this._completedStep();
                        callback();
                    }
                });
            }, this)
        } else {
            this._particles.forEach((particle) => {
                particle.fitness = this._objectiveFunction(particle.position);
            }, this);
            this._completeStep();
        }
    }

    _completeStep(){
        //record the best found solutions
        this._particles.forEach((particle) => {
            if (particle.fitness > particle.bestFitness) {
                particle.bestFitness = particle.fitness;
                particle.storePosition();

                if (particle.fitness > this._bestFitnessEver) {
                    this._bestFitnessEver = particle.fitness;
                    this._bestPositionEver = particle.getPosition();
                }
            }
        }, this);
        //update velocities
        this._particles.forEach((particle, idx) => {
            let randomBest = this._particles[this._getRandomBest(idx)];
            particle.updateVelocity(randomBest, this.rng.random);
        }, this);

        //update positions
        this._particles.forEach((particle) => {
            particle.updatePosition();
        });
    }
    // Retrieves an array of all solutions in the swarm
    getParticles(){
        return this._particles.map((particle) => {
            return {
                position: particle.getPosition(),
                fitness: particle.fitness,
                bestPosition: particle.getBestPosition(),
                bestFitness: particle.bestFitness
            };
        });
    }

    //Retrieves the best solution ever recorded
    getBestPosition(){
        return this._bestPositionEver;
    }
    // Retrieves the best fitness ever recorded 
    getBestFitness(){
        return this._bestFitnessEver;
    }
    // Retrieves the mean fitness of the entire swarm
    getMeanFitness(){
        let sum = this._particles.reduce((partialSum, particle) => {
            return partialSum + particle.fitness;
        }, 0);
        return sum / this._particles.length;
    }

}

class ReturnP {
    constructor() {
        this.p = new Optimizer();
        this.range_x = new Interval(0, 30);
        this.range_y = new Interval(0, 75);
        this.positions = [];
        this.velocities = [];
        this.p.setObjectiveFunction(function (x) { return -(x[0] * x[0] + x[1] * x[1]); });
        this.p.init(10, [this.range_x, this.range_y])
    }

    returnValue() {
        for (let i = 0; i < 30; i++) {
            this.p.step()
            for (let j = 0; j < 10; j++) {
                let pos = this.p._particles[j].position
                let vel = this.p._particles[j].velocity
                this.positions.push(this.roundPos(pos))
                this.velocities.push(vel)
            }
        }
    }
    roundPos(arg) {
        let x = arg[0]
        let y = arg[1]

        x = this.positon(Math.round(x));
        y = this.positon(Math.round(y));

        return [x, y];
    }

    positon(num) {
        let new_num = num
        if (num < 0) {
            new_num = num * -1
        } else if (num === -0) {
            num * -1
        }
        return new_num
    }


}



module.exports = ReturnP

