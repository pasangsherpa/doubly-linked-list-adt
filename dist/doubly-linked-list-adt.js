/*!
 * doubly-linked-list-adt - Doubly Linked List ADT for browser and nodejs
 * @version v0.1.0 - Wed Aug 20 2014
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
			var node = new Node(element);
			if (root === null) {
				root = tail = node;
			} else {
				tail.next = node;
				node.previous = tail;
				tail = node;
			}
			count++;
		}

		function addFront(element) {
			var node = new Node(element);
			if (root === null) {
				root = tail = node;
			} else {
				node.next = root;
				root.previous = node;
				root = node;
			}
			count++;
		}

		function remove(index) {
			var node = get(index ? index : count - 1);
			if (typeof index !== 'undefined') {
				root = removeAt(index, root);
			} else {
				root = removeAt(count - 1, root);
			}
			count--;
			return node;
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

		function Iterator() {
			var lastAccessed = null,
				current = null,
				counter = 0;

			function hasNext() {
				return counter < count;
			}

			function hasPrevious() {
				return counter > 0;
			}

			function next() {
				if (!hasNext()) {
					throw new Error('next(): No such element.');
				}
				if (!hasPrevious()) {
					current = root;
				}
				lastAccessed = current;
				var element = current.element;
				current = current.next;
				counter++;
				return element;
			}

			function previous() {
				if (!hasPrevious()) {
					throw new Error('previous(): No such element.');
				}
				if (!hasNext()) {
					current = tail;
					counter--;
				}
				current = current.previous;
				var element = current.element;
				lastAccessed = current;
				counter--;
				return element;
			}

			return {
				hasNext: hasNext,
				hasPrevious: hasPrevious,
				next: next,
				previous: previous
			};
		}

		return {
			add: add,
			addFront: addFront,
			remove: remove,
			first: first,
			get: get,
			isEmpty: isEmpty,
			size: size,
			iterator: new Iterator()
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
