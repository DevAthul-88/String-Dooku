# String.js
A tiny npm package to perform basic string methods

<h2>It's so easy to get started with this package. Follow the steps below</h2>

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
<h2>And there are so many other function methods</h2>


```javascript

// import the package 
const str = require("string.js")

// create a new instance of the function
const ins = new str()

// change case to UpperCase
console.log(ins.toUpperCase("Hello World")) // output -> HELLO WORLD

// change case to lowercase
console.log(ins.toLowerCase("Hello World")) // output -> hello world

// change the case to pascal case
console.log(ins.toPascalCase("Hello World")) // output -> HelloWorld

// change the case to snake case
console.log(ins.toSnakeCase("Hello World")) // output -> hello_world

// change the case to dot case
console.log(ins.toDotCase("Hello World")) // output -> hello.world

// change the case to space case
console.log(ins.toSpaceCase("Hello World")) // output -> H e l l o   W o r l d

// change the case to title case
console.log(ins.toTitleCase("hello world")) // output -> Hello World

// get the total length of the string
console.log(ins.length("Hello World")) // output -> 11

// check the if first argument is same as the second argument
console.log(ins.checkValue("Hello" , "Hello")) // output -> true

// duplication count of the each word in the string
console.log(app.duplicationCount("Hello World")); // output -> { H: 1, e: 1, l: 4, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

// reverse a string
console.log(ins.reverse("Hello World")) // output -> dlroW olleH

// its is same as checkValue. both function check if the first argument is same as the second argument
console.log(ins.checkSubstring("app" , "app")) // output -> true

// check the longest string
console.log(ins.longestWord("Hello World")) // output -> Hello

// convert to string
console.log(typeof ins.toString([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ])); // output -> string

// convert to string into a array
console.log(ins.toArray("Hello World")); // output -> [ 'Hello', 'World' ]

// to returns the character from the specified index.
console.log(ins.characterAt("Hello World" , 2); // output -> l

// this function determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(ins.endsWith("Hello World" , "World")); // output -> true

```

