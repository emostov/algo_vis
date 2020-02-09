require_relative 'treetile'
require_relative './algorithms/bfs.rb'
require "colorize"
require 'set'

class Board
    attr_accessor: rows, : width, : height, : visited, : tree

DELTAS = [[1, 0], [-1, 0], [0, 1], [0, -1]]

def initialize(height, width)
@rows = Array.new(height){ Array.new(width) }
@height = height
@width = width
@visited = Set.new
place_tiles
@tree = create_tree(select_start_tile)
end

def place_tiles
    (0...height).each do | i |
        (0...width).each do | j |
            rows[i][j] = TreeTile.new([i, j], : W)
            end
end
end

def[](pos)
x, y = pos
rows[x][y]
end

def[] = (pos, val)
x, y = pos
rows[x][y] = val
end

def render
new_arr = []
rows.each {| row | new_arr << row.map{| class_instance | class_instance.color } }
new_arr.each do | row |
    colored = row.map{| el |
                case el
    when: R
    el = "  "
    el.to_s.colorize(: background => : red)
    when: W
    el = "  "
    el.to_s.colorize(: background => : white)
    when: B
    el = "  "
    el.to_s.colorize(: background => : light_blue)
    when: Y
    el = "  "
    el.to_s.colorize(: background => : yellow)
    when: G
    el = "  "
    el.to_s.colorize(: background => : green)
    when: M
    el = "  "
    el.to_s.colorize(: background => : magenta)
    when: C
    el = "  "
    el.to_s.colorize(: background => : cyan)
    end
}
puts colored.join("")
end
end

def rand_pos
x = rand((0...height))
y = rand((0...width))
[x, y]
end

def valid_pos ? (pos)
        pos_x, pos_y = pos
return true if pos_x < height && pos_y < width && pos_x >= 0 && pos_y >= 0 && !visited.include ? (pos)
        false
end

def adjacent_tiles(pos)
ad_tiles = []
pos_x, pos_y = pos

DELTAS.each do | del_pos |
    del_x, del_y = del_pos
            new_pos_x = del_x + pos_x
            new_pos_y = del_y + pos_y
new_pos = [new_pos_x, new_pos_y]
ad_tiles << new_pos if valid_pos ? (new_pos)
        end
ad_tiles
end

def select_start_tile
rand_position = rand_pos
self[rand_position].change_color(: R)
self[rand_position]
end


#This is specific for BFS and DFS
def create_tree(start_tile)
        queue = [start_tile]
        visited.add(start_tile.pos)

        while !queue.empty ?
        cur_tile = queue.shift
                tiles = adjacent_tiles(cur_tile.pos)

        tiles.each do | tile_pos |
        tile = self[tile_pos]
                        tile.parent = cur_tile
        queue.push(tile)
        visited.add(tile.pos)
end
end
start_tile
end
end