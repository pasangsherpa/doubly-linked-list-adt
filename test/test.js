/*global describe, it */
'use strict';
var assert = require('assert');
var DoublyLinkedList = require('../src/doubly-linked-list-adt.js');

var list = new DoublyLinkedList();

describe('DoublyLinkedList operation test', function() {

	it('should create an empty list in the beginning', function() {
		assert.throws(function() {
			list.remove();
			throw new Error("removeAt(): No such element found.");
		}, Error);
		assert.throws(function() {
			list.first();
			throw new Error("first(): List is empty.");
		}, Error);
		assert.equal(list.size(), 0);
		assert.equal(list.isEmpty(), true);
	});

	it('should be able to add elements to the list', function() {
		list.add(1);
		list.add("bar");
		list.add("foo");

		assert.equal(list.first(), 1);
		assert.equal(list.size(), 3);
		assert.equal(list.isEmpty(), false);

	});

	it('should be able to remove element from the list', function() {
		assert.equal(list.remove(2), "foo");
		assert.equal(list.size(), 2);
		assert.equal(list.isEmpty(), false);

		assert.equal(list.remove(1), "bar");
		assert.equal(list.size(), 1);
		assert.equal(list.isEmpty(), false);

		assert.equal(list.remove(0), 1);
		assert.equal(list.size(), 0);
		assert.equal(list.isEmpty(), true);
	});

	it('should be able to get any element from the list', function() {
		assert.equal(list.isEmpty(), true);

		list.add("hello");	// index 0
		list.add("foo");	// index 1
		list.add("bar");	// index 2

		assert.equal(list.isEmpty(), false);
		assert.equal(list.size(), 3);
		assert.equal(list.get(0), "hello");
		assert.equal(list.get(1), "foo");
		assert.equal(list.get(2), "bar");

		list.remove();
		list.remove();
		list.remove();
	});

	it('should iterate through the items from front and back without removing any item from the list', function() {
		list.add(1);
		list.add(2);
		list.add(3);

		var itr = list.iterator,
			items = [1, 2, 3],
			index = 0;
		while (itr.hasNext()) {
			assert.equal(itr.next(), items[index++]);
		}
	});

});
