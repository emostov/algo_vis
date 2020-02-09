class TreeTile {
    constructor(pos, color) {
        this.parent = null;
        this.children = [];
        this.color = color;
        this.pos = pos
    }

    changeColor(new_color){
      this.color = new_color;
      return new_color;
    }

    assignParent(node = null) {
        if(node === null) {
            this.parent = null
            return null
        }

        if (this.parent !== null) {
            this.deleteSelfFromParentChildren(this.parent);
        }
        if (!node.children.includes(this)) {
            node.children << this
        }
        this.parent = node
    }

    deleteSelfFromParentChildren(parent){
      for(let i=0; i < parent.children.length;  i++){
        if (parent.children[i] === this){
          let left = parent.children.slice(0, i);
          let right = parent.children.slice(i+1);
          let new_children = left.concat(right);
          parent.children = new_children
          return parent.children;
        }
      }
      return -1
    }


}

module.exports =  TreeTile;

