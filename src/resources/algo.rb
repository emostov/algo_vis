class BFS
    include Tiles

    COLORS = [:G, :Y, :B, :C, :M]

    attr_reader :end_point, :board, :travel_path, :parent_node

    def initialize(board, end_point)
        @parent_node = board.tree
        @board = board
        @end_point = end_point
        board[end_point].change_color(:R)
        @travel_path = []
    end

    def breadth_first_search(end_point)
        queue = [@parent_node]
        # debugger
        length = board.rows[0].length
        height = board.rows.length
        new_node = @parent_node
        i = 0
        until queue.empty? || new_node.pos == end_point
            new_node = queue.shift
            x = new_node.pos.first
            y = new_node.pos.last
            children = new_node.children
            if (x == 0 || y == 0 )
                COLORS.rotate! 
                i += 1
            elsif i == 3
                i = 0
            end
              change_tiles(children, COLORS[0])
            render_cur
            children.each do |child|
                return child if child.pos == end_point
                queue << child
            end
        end
        new_node
    end

    def create_path(target_node = self.breadth_first_search(end_point))
        current_node = target_node
        @travel_path << current_node.pos
        until current_node == @parent_node
            current_node.change_color(:R)
            render_cur
            @travel_path << current_node.parent.pos
            current_node = current_node.parent
        end
        @travel_path
    end

end