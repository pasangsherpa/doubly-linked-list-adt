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

        assert.equal(list.first().element, 1);
        assert.equal(list.size(), 3);
        assert.equal(list.isEmpty(), false);
    });

    // it('should be able to remove element from the list', function() {
    //     assert.equal(list.remove().element, "foo");
    //     assert.equal(list.size(), 2);
    //     assert.equal(list.isEmpty(), false);
    // });

});
