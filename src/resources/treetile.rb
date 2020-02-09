class TreeTile
    attr_accessor :children, :parent, :color, :pos

    def initialize(pos, color)
        @parent = nil
        @children = []
        @color = color
        @pos = pos
    end
    
    def change_color(new_color)
        self.color = new_color
    end
    
    def parent=(node=nil)
        if node == nil
            @parent = nil
            return nil 
        end 
        self.parent.children.delete(self) if @parent != nil
        node.children << self if !node.children.include?(self) 
        @parent = node
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise if child_node.parent != self
        child_node.parent = nil
    end
end