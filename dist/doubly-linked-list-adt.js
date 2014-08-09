/*!
 * doubly-linked-list-adt - Doubly Linked List ADT for browser and nodejs
 * @version v0.0.0 - Sat Aug 09 2014
 * @link https://github.com/pasangsherpa/doubly-linked-list-adt
 * @author Pasang Sherpa <pgyalzen@gmail.com> (https://github.com/pasangsherpa)
 * @license MIT
 */
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
