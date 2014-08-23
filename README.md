# doubly-linked-list-adt [![Build Status](https://travis-ci.org/pasangsherpa/doubly-linked-list-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/doubly-linked-list-adt)

> Doubly Linked List ADT for browser and nodejs

The **DoublyLinkedList** class represents a sequence of nodes that are doubly-linked together. It supports the usual *add* and *remove* operations, along with methods for examining the front of the list, testing if the list is empty, and iterating through the items in the list.


## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/doubly-linked-list-adt/master/dist/doubly-linked-list-adt.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/doubly-linked-list-adt/master/dist/doubly-linked-list-adt.js

```sh
$ npm install --save doubly-linked-list-adt
```

```sh
$ bower install --save doubly-linked-list-adt
```


## Usage

```js
var DoublyLinkedList = require('doubly-linked-list-adt');
var list = new DoublyLinkedList();

list.add(1);
list.first().element;
list.remove();

list.add(function(){console.log("hello world")}); // Prints "hello world" on console.
list.first().element();

list.addFront("foo");
list.get(1).element(); // Prints "hello world" on console.

list.size();
list.isEmpty();

var itr = list.iterator;

while(itr.hasNext()) {
  console.log(itr.next());
}

while(itr.hasPrevious()) {
  console.log(itr.previous());
}
	
```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/doubly-linked-list-adt/master/dist/doubly-linked-list-adt.min.js"></script>
<script type="text/javascript"> 
  	var list = new DoublyLinkedList();
	list.add(1);
	list.first().element;
	list.remove();

	list.add(function(){console.log("hello world")}); // Prints "hello world" on console.
	list.first().element();

	list.addFront("foo");
	list.get(1).element(); // Prints "hello world" on console.

	list.size();
	list.isEmpty();

	var itr = list.iterator;

	while(itr.hasNext()) {
	  console.log(itr.next());
	}

	while(itr.hasPrevious()) {
	  console.log(itr.previous());
	}

</script>
```


## Documentation

### DoublyLinkedList()

Creates an empty list.


### Methods

#### .add(element)

Adds an element to the end of the list and returns the new size of the list.

##### element

Type: `object`

the element to be added to the list.

#### .remove() `throws "No such element found` 

Removes an element from the end of the list.

#### .remove(index) `throws "No such element found` 

Removes the element at the specified position in this list.

##### index

Type: `int`

the index of the element to be removed.

#### .first() `throws "LinkedList is empty" error` 

Returns the first element of the list.

Type: `object`

the element at the front of the list.

#### .get(index) 

Returns the element of the list in the given index and null if index out of bound.

Type: `object`

the element at the given index of the list.

#### .isEmpty()

Returns true if this list contains no elements.

Type: `boolean`

whether or not the list is empty.

#### .size()

Returns the number of elements in the list.

Type: `int`

the number of element in the list.

#### .clear() 

Removes all element from the the list and returns the new size of the list.

#### .iterator

Returns an iterator to the list that iterates through the items.

Type: `object`

the iterator object of the list

#### .iterator.next() `throws "No such element" error` 

Returns the next item in the list.

#### .iterator.hasNext()

Returns whether the list has next item or not.

## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
