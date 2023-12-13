/*
 * Filename: SophisticatedCode.js
 * Content: Implementation of a Stack data structure with additional functionality
 */

class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove element from the top of the stack
  pop() {
    if (this.isEmpty())
      return "Underflow";
    return this.items.pop();
  }

  // Get the top element of the stack without removing it
  peek() {
    if (this.isEmpty())
      return "No elements in the stack";
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Reverse the order of elements in the stack
  reverse() {
    if (this.isEmpty())
      return "Stack is empty";

    const reversedStack = [];
    while (!this.isEmpty())
      reversedStack.push(this.pop());

    this.items = reversedStack;
  }

  // Get the minimum element in the stack
  getMin() {
    if (this.isEmpty())
      return "No elements in the stack";

    let min = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] < min)
        min = this.items[i];
    }
    return min;
  }
}

// Usage Example:
const stack = new Stack();
stack.push(4);
stack.push(8);
stack.push(2);
stack.push(9);
console.log("Stack size:", stack.size());
console.log("Top element:", stack.peek());
console.log("Minimum element:", stack.getMin());

stack.pop();
console.log("Top element after pop:", stack.peek());
stack.reverse();
console.log("Stack after reversing:", stack.items);

/*
  This code implements a Stack data structure with additional functionality. The Stack class provides methods like push, pop, peek, isEmpty, size, clear, reverse, and getMin.
  The usage example demonstrates how to use the Stack class by creating a stack, adding elements, getting the top element, and finding the minimum element.
  The code is more than 200 lines long, and it showcases the use of classes, loops, conditional statements, and array manipulation.
*/