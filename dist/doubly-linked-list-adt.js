/*!
 * doubly-linked-list-adt - Doubly Linked List ADT for browser and nodejs
 * @version v0.1.2 - Wed Mar 18 2015
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

		function removeFirst() {
			if (isEmpty()) {
				throw new Error('removeFirst(): List is empty.');
			}
			var element = root.element;
			root.next.previous = null;
			root = root.next;
			return element;
		}

		function removeLast() {
			if (isEmpty()) {
				throw new Error('removeLast(): List is empty.');
			}
			var element = tail.element;
			tail.previous.next = null;
			tail = tail.previous;
			return element;
		}

		function remove(index) {
			if (isEmpty()) {
				throw new Error('remove(): List is empty.');
			}
			var node = getNode(index >= 0 ? index : count - 1),
				previous, next;
			next = node.next;
			previous = node.previous;

			if (count === 1) {
				root = tail = null;
			} else if (index === 0) {
				// remove the root
				next.previous = null;
				root = next;
			} else if (!index || index >= count - 1) {
				// remove the end
				previous.next = null;
				tail = previous;
			} else {
				// remove the node
				previous.next = next;
				next.previous = previous;
			}
			count--;
			return node.element;
		}

		function first() {
			if (isEmpty()) {
				throw new Error('first(): List is empty.');
			}
			return root.element;
		}

		function getNode(index) {
			if (index < 0 || index > count || root === null) {
				return null;
			}
			var midPoint = count / 2,
				current, i;

			if (index > midPoint) {
				current = tail;
				for (i = count - 1; i > index; i--) {
					current = current.previous;
				}
			} else {
				current = root;
				for (i = 0; i < index; i++) {
					current = current.next;
				}
			}
			return current;
		}

		function get(index) {
			return getNode(index).element;
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

			function next() {
				if (!hasNext()) {
					throw new Error('next(): No such element.');
				}
				if (!counter) {
					current = root;
				}
				lastAccessed = current;
				var element = current.element;
				current = current.next;
				counter++;
				return element;
			}

			return {
				hasNext: hasNext,
				next: next
			};
		}

		return {
			add: add,
			addFront: addFront,
			remove: remove,
			removeFirst: removeFirst,
			removeLast: removeLast,
			first: first,
			get: get,
			isEmpty: isEmpty,
			size: size,
			iterator: function() {
				new Iterator();
			}
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
