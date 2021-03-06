# doubly-linked-list-adt [![Build Status](https://travis-ci.org/pasangsherpa/doubly-linked-list-adt.svg?branch=master)](https://travis-ci.org/pasangsherpa/doubly-linked-list-adt)

> Doubly Linked List ADT for browser and nodejs

The **DoublyLinkedList** class represents a sequence of nodes that are linked together. It supports the usual *add* and *remove* operations, along with methods for examining the front of the list, testing if the list is empty, and iterating through the items in the list.


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
list.first();
list.remove();

list.add(function(){console.log("hello world")}); // Prints "hello world" on console.
list.first()();

list.addFront("foo");
list.get(1)(); // Prints "hello world" on console.

list.size();
list.isEmpty();

var itr = list.iterator;

while(itr.hasNext()) {
  console.log(itr.next());
}

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/doubly-linked-list-adt/master/dist/doubly-linked-list-adt.min.js"></script>
<script type="text/javascript"> 
  	var list = new DoublyLinkedList();
	list.add(1);
	list.first();
	list.remove();

	list.add(function(){console.log("hello world")}); // Prints "hello world" on console.
	list.first()();

	list.addFront("foo");
	list.get(1)(); // Prints "hello world" on console.

	list.size();
	list.isEmpty();

	var itr = list.iterator;

	while(itr.hasNext()) {
	  console.log(itr.next());
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

#### .removeFirst() `throws "List is empty" error` 

Removes an element from the front of the list and returns the element.

Type: `object`

the removed element of the list.

#### .removeLast() `throws "List is empty" error` 

Removes an element from the end of the list and returns the element.

Type: `object`

the removed element of the list.

#### .remove(index) `throws "List is empty" error` 

Removes the element at the specified position in this list and returns the element.

##### index

Type: `int`

the index of the element to be removed.

#### .first() `throws "List is empty" error` 

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
