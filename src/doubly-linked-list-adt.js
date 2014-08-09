(function() {
    'use strict';
    var DoublyLinkedList = function() {
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
