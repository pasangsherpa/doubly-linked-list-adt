(function() {
    'use strict';
    var DoublyLinkedList = function() {
        var root, tail, count = 0;
        root = tail = null;

        function Node(element) {
            this.element = element || null;
            this.next = this.previous = null;
        }

        function add(element) {
            var node = new Node(element),
                current = null;
            if (root === null) {
                root = node;
            } else {
                current = root;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = tail = node;
            }
            count++;
        }

        function remove(index) {
        	if (typeof index !== 'undefined') {
	        	root = removeAt(index, root);
        	} else {
        		root = removeAt(count - 1, root);
        	}
            count--;
        }

        function removeAt(index, node) {
        	if (node === null) {
        		throw new Error('removeAt(): No such element found.');
        	} else if (index === 0) {
        		return node.next;
        	} else {
        		node.next = removeAt(index - 1, node.next);
        	}
        	return node;
        }

        function first() {
            if (isEmpty()) {
                throw new Error('first(): List is empty.');
            }
            return root;
        }

        function get(index) {
            if (index < 0 || index > count || root === null) {
                return null;
            }
            var midPoint = count / 2,
                current, i;

            if (index > midPoint) {
                current = tail;
                for (i = count; i > index; i--) {
                    current = current.next;
                }
            } else {
                current = root;
                for (i = 0; i < index; i++) {
                    current = current.next;
                }
            }
            return current;
        }

        function isEmpty() {
            return count === 0;
        }

        function size() {
            return count;
        }

        return {
            add: add,
            remove: remove,
            first: first,
            get: get,
            isEmpty: isEmpty,
            size: size
        };
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return DoublyLinkedList;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = DoublyLinkedList;
    } else {
        window.DoublyLinkedList = DoublyLinkedList;
    }
})();
