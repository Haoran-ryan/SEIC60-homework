class SinglyLinkedList 
    class Node
        attr_accessor :value, :next
    
        def initialize(value=nil)  # initialise a new node with a nil value so that we don't need to do New Node for initialisation
            @value = value
            @next = nil
        end 
    end
    attr_accessor :head 

    def initialize(value=nil)
        @head = Node.new(value) unless value.nil?
    end 

    def prepend(value) #unshift , add at the beginning of the list
        node = Node.new value
        node.next = @head 
        @head = node
        self # if we don't do this, the last line @head will be returned ; when we return self, we can do cahining : e.g.: bros.prepend('Harpo').prepend('Chivo')
    end 

    def append(value)
        # find the last node of the list ( use the method : last)
        last.next = Node.new(value) unless value.nil? 
        self # allow chaining 
        # create a new node and point the old last node to it
    end 

    def last
        # find the last node of the list
        current_node = @head
        while current_node && current_node.next
            current_node = current_node.next
        end 
        current_node # return the last node of the list
    end 

    # TODO: 
    def remove #shift
    end 

    def insert_after(node, new_value)
    end 

    def find(needle) # return the node with the value of needle (or nil)
    end 

    # Tricky
    def reverse # non-destructive
    end 

    # Trickier
    def reverse! # destructive
    end 

    # Trickiest 
    def each # How do you execute a block in Ruby? 
    end 

    # bonus : .map(), .reduce(), .select(), .reject(), .length(), 
    # bonus : at_index(3) equivalent to bros[3]
end 

 
bros = SinglyLinkedList.new 'Groucho'
bros.prepend 'Harpo' # add to the beginning of the list
bros.prepend 'Chico' # add to the beginning of the list
binding.irb 