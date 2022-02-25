# String.js
A tiny npm package to perform basic string methods

<h4>It's so easy to get started with this package. Follow the steps below</h4>

```javascript

// import the package 
const str = require("string.js")

// create a new instance of the function
const ins = new str()

// change string case to upper
console.log(ins.toUpperCase("hello world")) // output: -> HELLO WORLD

// reverse a string
console.log(ins.reverse("Hello World")) // output -> dlroW olleH

// check substring -- we need to pass two parameters so this function will check the first argument of the function same as the second one then it will return a boolean value
console.log(ins.checkSubstring("app" , "app")) // output -> true

// duplication count
console.log(app.duplicationCount("Hello World")); // output -> { H: 1, e: 1, l: 4, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

```
