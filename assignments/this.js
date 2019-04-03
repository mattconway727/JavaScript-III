/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding - bound to the window object, global context
 
 * 2. Implicit Binding - (left of the dot)
 
 * 3. Explicit Binding - (call, bind, apply)
 
 * 4. New Binding - this refers to the specific instance of the object that is created and returned by the constructor function.
 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this.closed);

// Principle 2

// code example for Implicit Binding
const pallet = {
  content: "tvs",
  full: true,
  statusCheck: function() {
    if (this.full) {
      console.log(`This pallet of ${this.content} is full`);
    } else {
      console.log(`This pallet of ${this.content} is NOT full`);
    }
  }
};

pallet.statusCheck();

// Principle 3

// code example for New Binding
function Person(food) {
  this.food = food;
  this.eat = function() {
    console.log(`This person likes ${this.food}`);
  };
}

const matt = new Person("ribs");
console.log(matt);
matt.eat();

// Principle 4

// code example for Explicit Binding
const taylor = {
  name: "Taylor"
};

const enjoys = ["movies", "horses"];

function introduce(enjoys1, enjoys2) {
  console.log(
    `Hello! My name is: ${
      this.name
    } and these are some things I enjoy: ${enjoys1} and ${enjoys2}`
  );
}

introduce.apply(taylor, enjoys);
