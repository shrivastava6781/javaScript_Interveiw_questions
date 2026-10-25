// Answers for index.html.
// Each section id maps to an array of answers in the same order as the
// questions in that section. If you add a question, add its answer at the
// same position here.

const escapeHtml = (str) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Wrap a code snippet in a <pre><code> block (escaped automatically)
const code = (src) => `<pre><code>${escapeHtml(src.trim())}</code></pre>`;

const answers = {
    basics: [
        // 1
        `<p><strong>Declaration</strong> creates the variable name. <strong>Initialization</strong> gives it its first value.</p>
        ${code(`
let age;      // declaration (value is undefined)
age = 25;     // initialization
let name = "Ana"; // declaration + initialization together`)}`,

        // 2
        `<p><code>let</code> can be reassigned later. <code>const</code> cannot be reassigned and must be initialized when declared.</p>
        ${code(`
let a = 1;  a = 2;      // OK
const b = 1; b = 2;     // TypeError

const user = { name: "Ana" };
user.name = "Ben";      // OK - the object itself can still be changed`)}`,

        // 3
        `<ul>
            <li><code>var</code> is <strong>function scoped</strong>; <code>let</code> is <strong>block scoped</strong> (<code>{ }</code>).</li>
            <li><code>var</code> can be redeclared; <code>let</code> cannot (in the same scope).</li>
            <li><code>var</code> is hoisted and initialized with <code>undefined</code>; <code>let</code> is hoisted but stays in the Temporal Dead Zone.</li>
            <li>A global <code>var</code> becomes a property of <code>window</code>; a global <code>let</code> does not.</li>
        </ul>`,

        // 4
        `<p><strong>Yes</strong>, it is valid. It declares two constants in one statement. Every name must be initialized.</p>
        ${code(`
const name1 = "a", name2 = "b";   // valid
const x = 1, y;                   // SyntaxError: Missing initializer`)}`,

        // 5
        `<p><code>var</code> <strong>can</strong> be redeclared. <code>let</code> <strong>cannot</strong>: it throws a SyntaxError.</p>
        ${code(`
var a = 1;
var a = 2;   // fine

let b = 1;
let b = 2;   // SyntaxError: Identifier 'b' has already been declared`)}`,

        // 6
        `<p><strong>No.</strong> <code>var</code> ignores block scope and only respects function scope.</p>
        ${code(`
if (true) {
  var x = 10;
  let y = 20;
}
console.log(x); // 10
console.log(y); // ReferenceError`)}`,

        // 7
        `<p>The <strong>Temporal Dead Zone (TDZ)</strong> is the time between the start of a block and the line where a <code>let</code>/<code>const</code>/<code>class</code> is declared. Accessing the variable in that period throws a ReferenceError.</p>
        ${code(`
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;`)}`,

        // 8
        `<ul>
            <li><code>Math.ceil()</code> rounds <strong>up</strong>: <code>Math.ceil(4.1)</code> → 5</li>
            <li><code>Math.floor()</code> rounds <strong>down</strong>: <code>Math.floor(4.9)</code> → 4</li>
            <li><code>Math.round()</code> rounds to the <strong>nearest</strong> integer: <code>Math.round(4.5)</code> → 5, <code>Math.round(4.4)</code> → 4</li>
        </ul>`,

        // 9
        `<p>Use <code>Math.abs()</code>.</p>
        ${code(`
Math.abs(-7);   // 7
Math.abs(7);    // 7`)}`,

        // 10
        `<p>Both use <code>...</code>. <strong>Rest</strong> <em>collects</em> many values into an array. <strong>Spread</strong> <em>expands</em> an array/object into individual values.</p>
        ${code(`
// Rest
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
sum(1, 2, 3); // 6

// Spread
const arr = [1, 2];
const copy = [...arr, 3];          // [1, 2, 3]
const obj = { ...{ a: 1 }, b: 2 }; // { a: 1, b: 2 }
Math.max(...arr);                  // 2`)}`,

        // 11
        `<p><code>==</code> (loose equality) converts types before comparing. <code>===</code> (strict equality) compares value <em>and</em> type, with no conversion.</p>
        ${code(`
5 == "5";          // true
5 === "5";         // false
null == undefined; // true
null === undefined;// false`)}`,

        // 12
        `<p><code>??</code> returns the right side only when the left side is <code>null</code> or <code>undefined</code>. Unlike <code>||</code>, it keeps values like <code>0</code>, <code>""</code> and <code>false</code>.</p>
        ${code(`
0 ?? 10;          // 0
0 || 10;          // 10
null ?? "default" // "default"`)}`,

        // 13
        `<p><code>void</code> evaluates an expression and always returns <code>undefined</code>.</p>
        ${code(`
void 0;           // undefined
void (2 + 3);     // undefined
// Common use: <a href="javascript:void(0)">Click</a>`)}`,

        // 14
        code(`
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"`),

        // 15
        `<p><code>!</code> converts a value to boolean and <strong>flips</strong> it. <code>!!</code> flips it twice, which simply <strong>converts</strong> a value to its boolean form.</p>
        ${code(`
!"hello";   // false
!!"hello";  // true
!!0;        // false
!!{};       // true`)}`,

        // 16
        `<p>The unary <code>+</code> converts its operand to a number.</p>
        ${code(`
+"42";     // 42
+true;     // 1
+"";       // 0
+"abc";    // NaN`)}`,

        // 17
        `<p><code>++x</code> (pre-increment) increases first, then returns the <strong>new</strong> value. <code>x++</code> (post-increment) returns the <strong>old</strong> value, then increases.</p>
        ${code(`
let a = 5;
console.log(++a); // 6

let b = 5;
console.log(b++); // 5
console.log(b);   // 6`)}`,

        // 18
        `<p><code>a ??= b</code> assigns <code>b</code> to <code>a</code> only if <code>a</code> is <code>null</code> or <code>undefined</code>.</p>
        ${code(`
let user = { name: null, age: 0 };
user.name ??= "Guest"; // "Guest"
user.age ??= 18;       // stays 0`)}`,

        // 19
        code(`
const marks = 75;
const grade = marks >= 90 ? "A"
            : marks >= 75 ? "B"
            : marks >= 50 ? "C"
            : "F";
console.log(grade); // "B"`),

        // 20
        code(`
const day = "sat";

// if / else-if / else
if (day === "sat" || day === "sun") {
  console.log("Weekend");
} else if (day === "fri") {
  console.log("Almost weekend");
} else {
  console.log("Weekday");
}

// switch-case equivalent
switch (day) {
  case "sat":
  case "sun":
    console.log("Weekend");
    break;
  case "fri":
    console.log("Almost weekend");
    break;
  default:
    console.log("Weekday");
}`),

        // 21
        code(`
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}`),

        // 22
        `<p><code>for...of</code> loops over the <strong>values</strong> of an iterable (arrays, strings, Sets, Maps).</p>
        ${code(`
const fruits = ["apple", "banana", "mango"];
for (const fruit of fruits) {
  console.log(fruit);
}`)}`,

        // 23
        `<p><code>for...in</code> loops over the <strong>keys</strong> (property names) of an object.</p>
        ${code(`
const user = { name: "Ana", age: 25 };
for (const key in user) {
  console.log(key, user[key]); // name Ana, age 25
}`)}`,

        // 24
        `<ul>
            <li><code>break</code>: exits the loop completely.</li>
            <li><code>continue</code>: skips the rest of the current iteration and goes to the next one.</li>
            <li><code>return</code>: exits the whole <strong>function</strong> (and the loop with it).</li>
        </ul>
        ${code(`
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue; // skip 2
  if (i === 4) break;    // stop at 4
  console.log(i);        // 1 3
}`)}`,

        // 25
        `<p>Use <code>break</code>, or <code>return</code> if the loop is inside a function. Note: you <strong>cannot</strong> break out of <code>forEach</code>; use a normal <code>for</code>/<code>for...of</code> loop, <code>some()</code> or <code>find()</code> instead.</p>
        ${code(`
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(i); // 0 1 2
}`)}`,

        // 26
        `<p><code>while</code> checks the condition <strong>before</strong> each run, so it may run 0 times. <code>do...while</code> checks <strong>after</strong>, so it always runs at least once.</p>
        ${code(`
let i = 10;
while (i < 5) { console.log("while"); }        // never runs
do { console.log("do-while"); } while (i < 5); // runs once`)}`,

        // 27
        `<p><code>default</code> runs when none of the <code>case</code>s match (like <code>else</code>). You can have <strong>only one</strong> <code>default</code>; more than one is a SyntaxError. It can be placed anywhere, but is usually last.</p>`,

        // 28
        code(`
const random = Math.floor(Math.random() * 100) + 1;
console.log(random); // 1 to 100`),

        // 29
        code(`
const firstArray = [7, 3, 4, 2, 5];
const secondArray = [1, 3, 2];
const thirdArray = [8, 3, 4, 5];

const maxLength = Math.max(firstArray.length, secondArray.length, thirdArray.length);
const result = [];

for (let i = 0; i < maxLength; i++) {
  result.push((firstArray[i] ?? 0) + (secondArray[i] ?? 0) + (thirdArray[i] ?? 0));
}

console.log(result); // [16, 9, 10, 7, 5]`),
    ],

    functional: [
        // 1
        `<p>An <strong>IIFE</strong> (Immediately Invoked Function Expression) is a function that runs as soon as it is defined. It creates a private scope so variables don't leak into the global scope.</p>
        ${code(`
(function () {
  const secret = "hidden";
  console.log("Runs immediately!");
})();

(() => console.log("Arrow IIFE"))();`)}`,

        // 2
        `<p>A <strong>Higher Order Function</strong> is a function that takes another function as an argument, returns a function, or both. Examples: <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>setTimeout</code>.</p>
        ${code(`
function multiplier(factor) {
  return (num) => num * factor; // returns a function
}
const double = multiplier(2);
[1, 2, 3].map(double); // [2, 4, 6] - map takes a function`)}`,

        // 3
        `<p>Both call a function immediately with a chosen <code>this</code>. The difference is how arguments are passed: <code>call</code> takes them one by one, <code>apply</code> takes them as an <strong>array</strong>.</p>
        ${code(`
function greet(greeting, mark) {
  return greeting + ", " + this.name + mark;
}
const user = { name: "Ana" };

greet.call(user, "Hi", "!");    // "Hi, Ana!"
greet.apply(user, ["Hi", "!"]); // "Hi, Ana!"`)}`,

        // 4
        `<p><code>bind()</code> returns a <strong>new function</strong> with <code>this</code> permanently set (and optionally some arguments preset). Unlike call/apply, it does <strong>not</strong> run the function immediately.</p>
        ${code(`
const user = {
  name: "Ana",
  sayHi() { console.log("Hi " + this.name); },
};

const fn = user.sayHi;
fn();                 // "Hi undefined" - this is lost

const bound = user.sayHi.bind(user);
bound();              // "Hi Ana"`)}`,

        // 5
        `<p>A function without a name. It is usually passed as an argument or assigned to a variable.</p>
        ${code(`
setTimeout(function () {
  console.log("I have no name");
}, 1000);

const add = function (a, b) { return a + b; };`)}`,

        // 6
        `<p>A <strong>pure function</strong> always returns the same output for the same input and has <strong>no side effects</strong> (it doesn't change outside variables, the DOM, etc.).</p>
        ${code(`
// Pure
const add = (a, b) => a + b;

// Impure - depends on and changes outside state
let total = 0;
const addToTotal = (n) => (total += n);`)}`,

        // 7
        `<p>Arrow functions have shorter syntax and:</p>
        <ul>
            <li>have no own <code>this</code> (they use <code>this</code> from the surrounding scope),</li>
            <li>have no <code>arguments</code> object,</li>
            <li>cannot be used as constructors with <code>new</code>,</li>
            <li>are not hoisted like function declarations.</li>
        </ul>
        ${code(`
function add(a, b) { return a + b; }  // normal function
const addArrow = (a, b) => a + b;      // arrow (implicit return)
const square = x => x * x;             // single param, no ()`)}`,

        // 8

`<p><strong>Currying</strong> is a technique in JavaScript that transforms a function accepting multiple arguments into a chain of functions, each taking one argument at a time. Instead of calling <code>f(a, b, c)</code>, we call <code>f(a)(b)(c)</code>.</p>

${code(`
/* Normal Function */
function add(a, b, c) {
  return a + b + c;
}

console.log(add(10, 20, 30));
// Output: 60


/* Curried Function */
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(10)(20)(30));
// Output: 60
`)}`
,

        // 9
       
`<p><strong>Generator Functions</strong> are special JavaScript functions defined using <code>function*</code>. They can pause execution using <code>yield</code> and resume from where they paused when <code>.next()</code> is called. Unlike normal functions, calling a generator function returns a generator object without executing its body immediately.</p>

${code(`
function* counter() {
  console.log("Generator started");

  yield 1; // Pauses execution and returns 1
  yield 2; // Resumes and pauses again
  return 3; // Ends the generator
}

const gen = counter();

console.log(gen.next());
// Output: "Generator started"
// { value: 1, done: false }

console.log(gen.next());
// { value: 2, done: false }

console.log(gen.next());
// { value: 3, done: true }

console.log(gen.next());
// { value: undefined, done: true }
`)}

<p><strong>Key Points:</strong></p>
<ul>
  <li><code>function*</code> declares a generator function.</li>
  <li><code>yield</code> pauses execution and produces a value.</li>
  <li><code>.next()</code> resumes execution and returns an object containing <code>value</code> and <code>done</code>.</li>
  <li><code>return</code> ends the generator; its value is returned with <code>done: true</code>.</li>
  <li>Generators are useful for lazy iteration and producing values one at a time.</li>
</ul>`
,

        // 10
        `<p>A <strong>declaration</strong> is fully hoisted, so you can call it before the line where it is written. An <strong>expression</strong> is assigned to a variable and can't be called before that line.</p>
        ${code(`
sayHi();  // works
function sayHi() { console.log("Hi"); }

sayBye(); // ReferenceError (TypeError if declared with var)
const sayBye = function () { console.log("Bye"); };`)}`,

        // 11
        `<p>Because functions are treated like any other value. They can be:</p>
        <ul>
            <li>assigned to variables,</li>
            <li>passed as arguments to other functions,</li>
            <li>returned from functions,</li>
            <li>stored in arrays and objects.</li>
        </ul>`,

        // 12
        `<p><strong>Yes</strong>, with function declarations. The last declaration wins. With <code>let</code>/<code>const</code> function expressions you can't (SyntaxError).</p>
        ${code(`
function greet() { return "Hello"; }
function greet() { return "Hi"; }
greet(); // "Hi"`)}`,

        // 13
        `<p>Default values a parameter uses when no argument (or <code>undefined</code>) is passed.</p>
        ${code(`
function greet(name = "Guest") {
  return "Hello " + name;
}
greet();      // "Hello Guest"
greet("Ana"); // "Hello Ana"`)}`,

        // 14
        code(`
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10`),

        // 15
        `<p><code>arguments</code> is an array-like object available inside regular functions (<strong>not</strong> arrow functions). It holds all the values passed to the function.</p>
        ${code(`
function show() {
  console.log(arguments.length);     // 3
  console.log(Array.from(arguments)); // [1, 2, 3]
}
show(1, 2, 3);`)}`,

        // 16
        `<p>A <strong>parameter</strong> is the variable name in the function definition. An <strong>argument</strong> is the actual value passed when calling it.</p>
        ${code(`
function greet(name) {} // name -> parameter
greet("Ana");           // "Ana" -> argument`)}`,

        // 17
        `<p><code>function.name</code> gives the function's name as a string. <code>function.length</code> gives the number of declared parameters (it stops counting at the first default or rest parameter).</p>
        ${code(`
function add(a, b, c = 0) {}
add.name;   // "add"
add.length; // 2`)}`,

        // 18
        `<p><strong>No.</strong> <code>return</code> at the top level of a script throws <code>SyntaxError: Illegal return statement</code>.</p>`,

        // 19
        `<p>A <strong>definition</strong> creates the function (describes what it does). An <strong>invocation/call</strong> runs it, using <code>()</code>.</p>
        ${code(`
function sayHi() { console.log("Hi"); } // definition
sayHi();                                 // invocation`)}`,

        // 20
        `<p>JS has no built-in named parameters, but you can get the same effect by passing an <strong>object</strong> and destructuring it. The order doesn't matter, and you can add defaults.</p>
        ${code(`
function createUser({ name, age = 18, city = "Delhi" }) {
  return name + ", " + age + ", " + city;
}
createUser({ age: 25, name: "Ana" }); // "Ana, 25, Delhi"`)}`,

        // 21
        `<p><strong>No.</strong> <code>typeof</code> of a function is always <code>"function"</code>, whatever it returns. Only the <em>result of calling it</em> has the return value's type.</p>
        ${code(`
function getNum() { return 5; }
typeof getNum;   // "function"
typeof getNum(); // "number"`)}`,

        // 22
        `<p>With a tagged template, the first argument is an <strong>array of the string parts</strong>. The interpolated values follow as the next arguments.</p>
        ${code(`
// Output:
["", " is ", " years old"]
"Lydia"
21`)}`,
    ],

    types: [
        // 1
        `<p>There are 7 primitives: <code>string</code>, <code>number</code>, <code>bigint</code>, <code>boolean</code>, <code>undefined</code>, <code>null</code>, <code>symbol</code>.</p>`,

        // 2
        `<p><strong>Type coercion</strong> is JS automatically converting a value from one type to another. It can be <em>implicit</em> (done by JS) or <em>explicit</em> (done by you).</p>
        ${code(`
// Implicit
"5" + 1;    // "51"  (number -> string)
"5" - 1;    // 4     (string -> number)
true + 1;   // 2

// Explicit
Number("5"); // 5
String(5);   // "5"`)}`,

        // 3
        `<ul>
            <li><code>push()</code>: adds to the <strong>end</strong>, returns the new length.</li>
            <li><code>pop()</code>: removes from the <strong>end</strong>, returns the removed item.</li>
            <li><code>unshift()</code>: adds to the <strong>start</strong>, returns the new length.</li>
            <li><code>shift()</code>: removes from the <strong>start</strong>, returns the removed item.</li>
        </ul>
        ${code(`
const arr = [2, 3];
arr.push(4);    // [2, 3, 4]
arr.pop();      // [2, 3]
arr.unshift(1); // [1, 2, 3]
arr.shift();    // [2, 3]`)}`,

        // 4
        code(`
const a = [1, 2], b = [3, 4];
const c1 = a.concat(b); // [1, 2, 3, 4]
const c2 = [...a, ...b]; // [1, 2, 3, 4]`),

        // 5
        code(`
const x = [1, 2, 3];
Array.isArray(x);                                  // true (best way)
x instanceof Array;                                // true
Object.prototype.toString.call(x) === "[object Array]"; // true`),

        // 6
        `<p><code>flat(depth)</code> flattens nested arrays (default depth 1). <code>flatMap(fn)</code> maps each item and then flattens the result one level.</p>
        ${code(`
[1, [2, [3, [4]]]].flat();         // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]

["hi there", "good day"].flatMap(s => s.split(" "));
// ["hi", "there", "good", "day"]`)}`,

        // 7
        `<ul>
            <li><code>map()</code>: returns a <strong>new array</strong> with each item transformed.</li>
            <li><code>filter()</code>: returns a <strong>new array</strong> with only the items that pass a test.</li>
            <li><code>forEach()</code>: just runs a function for each item and returns <code>undefined</code>.</li>
        </ul>
        ${code(`
const nums = [1, 2, 3, 4];
nums.map(n => n * 2);        // [2, 4, 6, 8]
nums.filter(n => n % 2 === 0); // [2, 4]
nums.forEach(n => console.log(n)); // logs, returns undefined`)}`,

        // 8
        `<p><code>find()</code> returns the first matching <strong>element</strong> (or <code>undefined</code>). <code>findIndex()</code> returns its <strong>index</strong> (or <code>-1</code>).</p>
        ${code(`
const nums = [5, 12, 8, 130];
nums.find(n => n > 10);      // 12
nums.findIndex(n => n > 10); // 1`)}`,

        // 9
        `<p><code>slice(start, end)</code> returns a <strong>copy</strong> of part of the array and does not change the original. <code>splice(start, deleteCount, ...items)</code> <strong>changes the original</strong> array (remove/insert) and returns the removed items.</p>
        ${code(`
const a = [1, 2, 3, 4, 5];
a.slice(1, 3);     // [2, 3]   a is unchanged

const b = [1, 2, 3, 4, 5];
b.splice(1, 2, 99); // returns [2, 3]
console.log(b);     // [1, 99, 4, 5]`)}`,

        // 10
`<p><strong>Definition:</strong> The <code>reduce()</code> method in JavaScript processes all elements of an array and combines them into a single result, such as a number, object, array, or grouped collection.</p>

<p><strong>Syntax:</strong></p>
${code(`
array.reduce((accumulator, currentValue) => {
  // Logic
  return accumulator;
}, initialValue);
`)}

<p><strong>There are four important parts:</strong></p>
<ul>
  <li><strong>Accumulator (acc):</strong> Stores the result accumulated so far.</li>
  <li><strong>Current value (curr):</strong> The current array element being processed.</li>
  <li><strong>Initial value:</strong> The starting value of the accumulator.</li>
  <li><strong>Return:</strong> The returned value becomes the accumulator for the next iteration.</li>
</ul>

<p><strong>Example:</strong> Calculate the sum of all numbers in an array.</p>

${code(`
const arr = [5, 6, 2, 9, 3, 4, 1, 7];

const sum = arr.reduce((total, n) => total + n, 0);

console.log(sum); // 37
`)}`,

        // 11
        code(`"JavaScript".length; // 10`),

        // 12
        `<p>Use <code>trim()</code>. There are also <code>trimStart()</code> and <code>trimEnd()</code>.</p>
        ${code(`"   hello   ".trim(); // "hello"`)}`,

        // 13
        `<p>Use <code>slice(start, end)</code> or <code>substring(start, end)</code>. <code>slice</code> also accepts negative indexes.</p>
        ${code(`
const str = "JavaScript";
str.slice(0, 4);     // "Java"
str.substring(4);    // "Script"
str.slice(-6);       // "Script"`)}`,

        // 14
        code(`
"Hello".toUpperCase(); // "HELLO"
"Hello".toLowerCase(); // "hello"`),

        // 15
        `<p>A <code>Set</code> is a collection of <strong>unique</strong> values of any type. Duplicates are ignored, and insertion order is kept.</p>
        ${code(`
const s = new Set([1, 2, 2, 3]);
console.log(s); // Set {1, 2, 3}`)}`,

        // 16
        code(`
const s = new Set();
s.add(1);      // add
s.add(2);
s.has(1);      // true  (check)
s.delete(1);   // remove
s.size;        // 1
s.clear();     // remove all`),

        // 17
        `<p>A <code>Map</code> is a collection of key-value pairs where keys can be <strong>any type</strong> (objects, functions, numbers...). It keeps insertion order and has a <code>size</code> property.</p>`,

        // 18
        code(`
const m = new Map();
m.set("name", "Ana"); // add
m.set(1, "one");
m.get("name");        // "Ana"
m.has(1);             // true
m.delete(1);          // remove
m.clear();            // remove all`),

        // 19
        code(`
const now = new Date();
console.log(now);                  // full date and time
console.log(now.toLocaleString()); // e.g. "24/10/2026, 6:30:00 pm"
Date.now();                        // timestamp in ms`),

        // 20
        code(`
const str = "I like cats. cats are cute.";
str.replaceAll("cats", "dogs"); // "I like dogs. dogs are cute."
str.replace(/cats/g, "dogs");   // same, using a regex with g flag`),

        // 21
        `<p><code>valueOf()</code> returns the primitive value of a String object.</p>
        ${code(`
const strObj = new String("hello");
typeof strObj;           // "object"
typeof strObj.valueOf(); // "string"`)}`,

        // 22
        `<p>Compare the string, or use <code>JSON.parse</code>. Don't use <code>Boolean("false")</code>: any non-empty string is <code>true</code>!</p>
        ${code(`
"true" === "true";   // true
JSON.parse("false"); // false
Boolean("false");    // true  (gotcha!)`)}`,

        // 23
        code(`
const user = { name: "Ana", age: 25 };
const str = JSON.stringify(user); // '{"name":"Ana","age":25}'
const obj = JSON.parse(str);      // { name: "Ana", age: 25 }`),

        // 24
        `<p>Day <code>0</code> of the next month is the last day of the current month.</p>
        ${code(`
function getDaysInMonth(month, year) {
  // month is 1-12
  return new Date(year, month, 0).getDate();
}
getDaysInMonth(2, 2024); // 29
getDaysInMonth(4, 2026); // 30`)}`,

        // 25
        code(`
// Date -> String
const d = new Date();
d.toString();     // "Sat Oct 24 2026 18:30:00 GMT+0530 ..."
d.toISOString();  // "2026-10-24T13:00:00.000Z"
d.toDateString(); // "Sat Oct 24 2026"

// String -> Date
const parsed = new Date("2026-10-24");`),

        // 26
        code(`
const d = new Date();
d.setHours(10);        // hour
d.setMinutes(30);      // minute
d.setSeconds(0);       // second
d.setHours(10, 30, 0); // all at once`),

        // 27
        code(`
const string = "WebMaster";
const isUpper = /^[A-Z]/.test(string);
console.log(isUpper); // true`),

        // 28
        code(`
const array = [1, 1, 1, 2, 4, 5, 1, 3, 2, 5];
const unique = [...new Set(array)];
console.log(...unique); // 1 2 4 5 3`),

        // 29
        `<p>Keep a number if it is divisible by both 3 and 5 (i.e. by 15), or by neither.</p>
        ${code(`
const array = [2, 6, 3, 15, 20, 23, 18, 16, 60, 45, 43];
const result = array.filter(
  (n) => n % 15 === 0 || (n % 3 !== 0 && n % 5 !== 0)
);
console.log(result); // [2, 15, 23, 16, 60, 45, 43]`)}`,

        // 30
        `<p>Both return a <strong>string</strong>. <code>toFixed(n)</code> keeps <code>n</code> digits <strong>after the decimal point</strong>. <code>toPrecision(n)</code> keeps <code>n</code> <strong>significant digits in total</strong>.</p>
        ${code(`
(3.14159).toFixed(2);     // "3.14"
(3.14159).toPrecision(2); // "3.1"
(123.456).toPrecision(4); // "123.5"`)}`,

        // 31
        `<p>They are the largest and smallest integers JS can represent <strong>exactly</strong>: <code>2^53 - 1</code> (9007199254740991) and <code>-(2^53 - 1)</code>. Beyond these, number precision is lost.</p>
        ${code(`
Number.MAX_SAFE_INTEGER;  // 9007199254740991
Number.MIN_SAFE_INTEGER;  // -9007199254740991
2 ** 53 === 2 ** 53 + 1;  // true (precision lost!)`)}`,

        // 32
        `<p>Use <code>Symbol()</code>. Every symbol is unique, even with the same description.</p>
        ${code(`
const id = Symbol("id");
const id2 = Symbol("id");
id === id2; // false`)}`,

        // 33
        `<p><code>BigInt</code> is a primitive for whole numbers larger than <code>Number.MAX_SAFE_INTEGER</code>. It has no fixed upper limit (only memory). Create one by adding <code>n</code> to a number or by calling <code>BigInt()</code>. You can't mix BigInt and Number in arithmetic.</p>
        ${code(`
const big1 = 9007199254740993n;
const big2 = BigInt("9007199254740993");
big1 + 1n;  // 9007199254740994n
big1 + 1;   // TypeError: Cannot mix BigInt and other types`)}`,

        // 34
        `<p><code>2.756e5</code> = 2.756 × 10<sup>5</sup> = <strong>275600</strong></p>`,

        // 35
        `<p><code>2.756e-5</code> = 2.756 × 10<sup>-5</sup> = <strong>0.00002756</strong></p>`,
    ],

    oop: [
        // 1
        `<p>An arrow function doesn't have its own <code>this</code>. When it's created inside the constructor, its <code>this</code> stays bound to the instance, even when the method is passed around as a callback (event handlers, <code>setTimeout</code>). The downside is that every instance gets its own copy of the method, instead of sharing one on the prototype.</p>
        ${code(`
function Person(name) {
  this.name = name;
  this.sayHi = () => console.log("Hi " + this.name);
}
const p = new Person("Ana");
setTimeout(p.sayHi, 100); // "Hi Ana" - this is not lost`)}`,

        // 2
        `<p>A <strong>mutable</strong> object can be changed after it's created (objects, arrays). An <strong>immutable</strong> value can't be changed: primitives like strings and numbers, or objects frozen with <code>Object.freeze()</code>.</p>
        ${code(`
const arr = [1, 2];
arr.push(3);          // mutable - arr is changed

let str = "hi";
str[0] = "H";         // ignored - strings are immutable
console.log(str);     // "hi"`)}`,

        // 3
        code(`
const user = { name: "Ana", age: 25 };

for (const key in user) console.log(key, user[key]);

Object.keys(user);    // ["name", "age"]
Object.values(user);  // ["Ana", 25]
Object.entries(user).forEach(([k, v]) => console.log(k, v));`),

        // 4
        `<p>Adding methods to built-ins like <code>Array.prototype</code> affects <strong>all code</strong> on the page. It can clash with other libraries or with future native methods of the same name, and it can show up unexpectedly in <code>for...in</code> loops. Use helper functions or your own classes instead.</p>`,

        // 5
        `<ul>
            <li><code>function Person(){}</code>: just a function declaration.</li>
            <li><code>var person = Person()</code>: calls it as a normal function. It returns nothing, so <code>person</code> is <code>undefined</code>.</li>
            <li><code>var person = new Person()</code>: calls it as a <strong>constructor</strong>. It creates a new object whose prototype is <code>Person.prototype</code> and returns it.</li>
        </ul>`,

        // 6
        `<p><strong>Native objects</strong> are part of the JavaScript language spec: <code>Object</code>, <code>Array</code>, <code>Date</code>, <code>Math</code>, <code>Promise</code>. <strong>Host objects</strong> come from the environment running JS: <code>window</code>, <code>document</code>, <code>fetch</code> in browsers, <code>process</code> in Node.</p>`,

        // 7
        `<p>Every object has a hidden link to another object called its <strong>prototype</strong>. When you access a property that isn't on the object itself, JS looks it up on the prototype, then on the prototype's prototype, and so on until it reaches <code>null</code>. This is the <strong>prototype chain</strong>.</p>
        ${code(`
const animal = { eats: true };
const dog = Object.create(animal); // dog's prototype is animal
dog.barks = true;

dog.barks; // true (own property)
dog.eats;  // true (found on prototype)`)}`,

        // 8
        `<p><strong>"12"</strong>. When one operand of <code>+</code> is a string, the number is converted to a string and the two are concatenated.</p>`,

        // 9
        `<p>First <strong>"Woof I am Mara"</strong>, then <strong>TypeError: pet.bark is not a function</strong>, because <code>bark</code> was deleted from the prototype.</p>`,

        // 10
        `<p><strong><code>{ constructor: ... }</code></strong> and <strong><code>undefined</code></strong>. Regular functions have a <code>prototype</code> object; arrow functions don't.</p>`,

        // 11
        `<p><strong>"Sarah"</strong>. Classes can be reassigned like variables, so <code>Person</code> now points to <code>AnotherPerson</code>.</p>`,

        // 12
        `<p><strong>3</strong>. <code>counterTwo</code> is a reference to the <strong>same object</strong> as <code>counterOne</code>, so all three increments change the same <code>count</code>.</p>`,

        // 13
        `<p><strong>TypeError: freddie.colorChange is not a function</strong>. <code>static</code> methods live on the class itself (<code>Chameleon.colorChange()</code>), not on instances.</p>`,

        // 14
        `<p>The object (<code>{ name: 'Lydia', age: 21 }</code> in browsers; Node shows only <code>{ name: 'Lydia' }</code>) and then <strong><code>["name"]</code></strong>. Properties added with <code>defineProperty</code> are <strong>non-enumerable</strong> by default (and also non-writable), so <code>Object.keys</code> skips <code>age</code>.</p>`,

        // 15
        `<p><strong><code>{ x: 10, y: 20 }</code></strong>. <code>shape</code> points to the same frozen object, so the change is silently ignored (in strict mode it throws a TypeError).</p>`,

        // 16
        code(`
name Lydia
age 21`),

        // 17
        `<p><strong><code>{ Symbol(a): 'b' }</code></strong> and <strong><code>[]</code></strong>. Symbol keys are not enumerable, so <code>Object.keys</code> ignores them. Use <code>Object.getOwnPropertySymbols()</code> to get them.</p>`,
    ],

    core: [
        // 1
        `<p><strong>Hoisting</strong> means declarations are processed before the code runs, as if they were moved to the top of their scope.</p>
        <ul>
            <li><code>var</code>: hoisted and set to <code>undefined</code>.</li>
            <li><code>let</code>/<code>const</code>: hoisted but not initialized (TDZ), so accessing them early throws.</li>
            <li>Function declarations: hoisted completely, so they can be called before they are defined.</li>
        </ul>
        ${code(`
console.log(a); // undefined
var a = 5;

greet();        // "Hello"
function greet() { console.log("Hello"); }`)}`,

        // 2
        `<ul>
            <li><strong>Global scope</strong>: accessible everywhere.</li>
            <li><strong>Function (local) scope</strong>: variables declared inside a function.</li>
            <li><strong>Block scope</strong>: <code>let</code>/<code>const</code> inside <code>{ }</code>.</li>
            <li><strong>Module scope</strong>: top-level variables in an ES module.</li>
        </ul>`,

        // 3
        `<p>When a variable is used, JS looks for it in the current scope. If it isn't there, JS checks the outer scope, then the next outer one, up to the global scope. If it's still not found, you get a ReferenceError.</p>
        ${code(`
const a = "global";
function outer() {
  const b = "outer";
  function inner() {
    console.log(a, b); // found by walking up the scope chain
  }
  inner();
}
outer(); // "global outer"`)}`,

        // 4
        `<p>A <strong>closure</strong> is a function that remembers the variables of the scope it was created in, even after the outer function has finished running.</p>
        ${code(`
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
counter(); // 1
counter(); // 2  - count is remembered`)}`,

        // 5
        `<p><code>"use strict";</code> turns on <strong>strict mode</strong>, a safer version of JS.</p>
        <p><strong>Advantages:</strong> using undeclared variables throws an error, silent errors become real errors, <code>this</code> is <code>undefined</code> in plain function calls (instead of <code>window</code>), duplicate parameter names are not allowed, and the engine can optimize better.</p>
        <p><strong>Disadvantages:</strong> some old features (<code>with</code>, <code>arguments.callee</code>) are not allowed, and old code may break if strict mode is added to it.</p>
        <p class="note">Classes and ES modules are always in strict mode automatically.</p>`,

        // 6
        `<p><strong>AMD</strong> (e.g. RequireJS) loads modules <em>asynchronously</em> and was designed for browsers: <code>define([...deps], factory)</code>. <strong>CommonJS</strong> loads modules <em>synchronously</em> and was designed for servers/Node: <code>require()</code> / <code>module.exports</code>. Today both are mostly replaced by native <strong>ES Modules</strong> (<code>import</code>/<code>export</code>), which work in browsers and Node.</p>`,
    ],

    async: [
        // 1
        `<p>JavaScript is single-threaded. The <strong>call stack</strong> is where functions run, one at a time (last in, first out). Async callbacks (from <code>setTimeout</code>, events, etc.) wait in the <strong>task queue</strong>. Promise callbacks wait in the <strong>microtask queue</strong>.</p>
        <p>The <strong>event loop</strong> keeps checking: when the call stack is empty, it first runs <em>all</em> microtasks, then takes the next task from the task queue and pushes it onto the stack.</p>
        ${code(`
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// 1, 4, 3, 2`)}`,

        // 2
        code(`
Woah some cool data
Oh finally!`),

        // 3
        `<p><strong>"two"</strong>. <code>Promise.race</code> settles with whichever promise finishes first, and <code>secondPromise</code> resolves after 100ms.</p>`,

        // 4
        `<p><strong>"Third"</strong>. <code>Promise.all</code> rejects as soon as any promise rejects, so the second <code>await</code> throws and <code>.catch</code> logs the rejection reason.</p>`,

        // 5
        `<p><strong><code>Promise {&lt;pending&gt;}</code></strong>. An <code>async</code> function always returns a promise. To get the value, use <code>await getData()</code> or <code>getData().then(...)</code>.</p>`,

        // 6
        `${code(`
second
I have resolved!
I have resolved!
second`)}
        <p>In <code>firstFunction</code>, <code>.then</code> doesn't block, so <code>"second"</code> logs first. In <code>secondFunction</code>, <code>await</code> pauses the function, so its <code>"second"</code> logs only after the promise resolves.</p>`,

        // 7
        `${code(`
Last line 1!
Promise 2!
Last line 2!
Promise 1!
Timeout 1!
Timeout 2!`)}
        <p>Sync code runs first. Then microtasks: <code>await</code> resumes <code>funcTwo</code> after one tick, while <code>funcOne</code> has two chained <code>.then</code>s, so <code>Promise 1!</code> comes after <code>funcTwo</code>'s lines. Timeouts (macrotasks) run last, in the order they were scheduled.</p>`,
    ],

    dom: [
        // 1
        `<ul>
            <li><code>setItem(key, value)</code>: saves a value (always stored as a string).</li>
            <li><code>getItem(key)</code>: reads a value (<code>null</code> if missing).</li>
            <li><code>removeItem(key)</code>: deletes one item.</li>
            <li><code>clear()</code>: deletes everything.</li>
            <li><code>key(index)</code>: returns the key name at that index.</li>
            <li><code>length</code>: number of stored items.</li>
        </ul>
        ${code(`
localStorage.setItem("theme", "dark");
localStorage.getItem("theme"); // "dark"
localStorage.key(0);           // "theme"
localStorage.length;           // 1
localStorage.removeItem("theme");
localStorage.clear();`)}`,

        // 2
        `<p><code>querySelector</code> returns the <strong>first</strong> matching element (or <code>null</code>). <code>querySelectorAll</code> returns a static <strong>NodeList</strong> of all matches.</p>
        ${code(`
document.querySelector(".item");    // first .item
document.querySelectorAll(".item"); // NodeList of every .item`)}`,

        // 3
        `<p><strong>Both</strong> <code>functionA</code> and <code>functionB</code> run on click, in the order they were added. <code>addEventListener</code> supports multiple handlers.</p>`,

        // 4
        `<p>Only <strong><code>function2</code></strong> runs. <code>onclick</code> is a single property, so the second assignment overwrites the first.</p>`,

        // 5
        `<p>To remove, use <code>removeEventListener</code> with the <strong>same function reference</strong> (anonymous functions can't be removed this way), or set <code>onclick = null</code>.</p>
        ${code(`
function handleClick() { console.log("clicked"); }

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

btn.onclick = handleClick;
btn.onclick = null;`)}`,

        // 6
        `<p>Trick question: all five are valid <strong>event types</strong>. <code>play</code> is a media event fired by <code>&lt;audio&gt;</code>/<code>&lt;video&gt;</code>. Strictly speaking, none of them is an <em>event listener</em>; a listener is the function you attach to an event.</p>`,

        // 7
        `<p><strong>Event bubbling</strong>: an event first runs on the element that triggered it, then moves <strong>up</strong> through its parents to the <code>document</code>. This is the default behavior.</p>
        ${code(`
// Clicking the button logs: "button", then "div"
div.addEventListener("click", () => console.log("div"));
button.addEventListener("click", () => console.log("button"));`)}`,

        // 8
        `<p><strong>Event capturing</strong> is the opposite phase: the event travels <strong>down</strong> from <code>window</code> to the target element. Turn it on with the third argument. The full order is capture → target → bubble.</p>
        ${code(`
div.addEventListener("click", () => console.log("div"), true);
// or { capture: true }
// Clicking the button now logs "div" first`)}`,

        // 9
        `<p><strong>Event delegation</strong> means adding one listener to a <strong>parent</strong> instead of one listener per child, then using <code>event.target</code> to find which child was clicked. It also works for children added later.</p>
        ${code(`
document.querySelector("ul").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (li) console.log("Clicked:", li.textContent);
});`)}`,

        // 10
        `<p><code>event.stopPropagation()</code> stops the event from moving further through the DOM (no more bubbling or capturing to other elements). It does <em>not</em> stop the browser's default action; that's <code>preventDefault()</code>.</p>`,

        // 11
        `<p>Both store string key-value pairs for a website.</p>
        <ul>
            <li><strong>localStorage</strong>: stays until it's cleared manually, and is shared across all tabs.</li>
            <li><strong>sessionStorage</strong>: is cleared when the tab is closed, and belongs to that tab only.</li>
        </ul>`,

        // 12
        `${code(`
3 3 3
0 1 2`)}
        <p><code>var</code> has one shared <code>i</code> for the whole loop, which is <code>3</code> by the time the timeouts run. <code>let</code> creates a new <code>i</code> for every iteration.</p>`,

        // 13
        `${code(`
First
Third
Second`)}
        <p>The <code>setTimeout</code> callback goes to the task queue and runs only after all the synchronous code has finished.</p>`,

        // 14
        `${code(`
🥑
😎`)}
        <p><code>data.getStatus()</code> uses <code>data</code> as <code>this</code> → 🥑. With <code>.call(this)</code>, <code>this</code> comes from the arrow function's outer scope, which is the global <code>window</code>, and the global <code>var status</code> is 😎 (in a browser).</p>`,

        // 15
        `<p><code>setInterval(fn, delay)</code> calls <code>fn</code> repeatedly every <code>delay</code> milliseconds until it's stopped. It returns an <strong>interval ID</strong> (a number in browsers), which you use to stop it.</p>
        ${code(`
const id = setInterval(() => console.log("tick"), 1000);`)}`,

        // 16
        `<p><code>clearInterval(id)</code> stops an interval started with <code>setInterval</code>.</p>
        ${code(`
let count = 0;
const id = setInterval(() => {
  count++;
  if (count === 3) clearInterval(id); // stops after 3 ticks
}, 1000);`)}`,

        // 17
        `<ul>
            <li><code>appendChild()</code> accepts only <strong>one Node</strong> and returns the appended node.</li>
            <li><code>append()</code> accepts <strong>multiple</strong> Nodes <strong>and strings</strong>, and returns nothing.</li>
        </ul>
        ${code(`
parent.appendChild(div);
parent.append(div, span, "some text");`)}`,

        // 18
        `<p><code>prepend()</code> inserts nodes or strings as the <strong>first children</strong> of an element. (To insert before the element itself, as a sibling, use <code>before()</code>.)</p>
        ${code(`
const list = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "First!";
list.prepend(li);`)}`,

        // 19
        code(`
element.remove();               // modern way
parent.removeChild(element);    // older way`),

        // 20
        `<ul>
            <li><code>scrollTop</code>: how many pixels the content has been scrolled from the top (you can also set it).</li>
            <li><code>scrollHeight</code>: total height of the content, including the part hidden by scrolling.</li>
            <li><code>clientHeight</code>: visible height of the element (including padding, excluding border and scrollbar).</li>
        </ul>
        ${code(`
// Check if the user scrolled to the bottom
if (el.scrollTop + el.clientHeight >= el.scrollHeight) {
  console.log("Reached the bottom");
}`)}`,
    ],
};

// Add a "Show answer" button under every question
document.querySelectorAll("main section").forEach((section) => {
    const sectionAnswers = answers[section.id] || [];

    section.querySelectorAll("ol > li").forEach((li, index) => {
        const answer = sectionAnswers[index];
        if (!answer) return;

        const button = document.createElement("button");
        button.className = "answer-btn";
        button.textContent = "Show answer";
        button.setAttribute("aria-expanded", "false");

        const box = document.createElement("div");
        box.className = "answer";
        box.hidden = true;
        box.innerHTML = answer;

        button.addEventListener("click", () => {
            box.hidden = !box.hidden;
            button.textContent = box.hidden ? "Show answer" : "Hide answer";
            button.setAttribute("aria-expanded", String(!box.hidden));
        });

        li.append(button, box);
    });
});
