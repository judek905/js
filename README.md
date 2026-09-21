# JavaScript Practice Scripts

This repository contains two short JavaScript exercises covering core language fundamentals: variables, conditionals, and functions (declarations, expressions, and arrow functions).

## Files

| File | Topic | Description |
|---|---|---|
| `intro.js` | Variables & conditionals | Calculates a total score from exam and coursework marks and logs a pass/retake message. |
| `functions.js` | Functions | Demonstrates function declarations, function expressions, arrow functions, and template literals through several small examples (addition, greeting, deposits, withdrawals). |

## Requirements

- Node.js installed (any recent version), **or**
- A browser console (open DevTools → Console tab and paste the code)

## How to Run

From a terminal, with Node.js installed:

```bash
node intro.js
node functions.js
```

## `intro.js` — Overview

Declares two variables, `exam_marks` (30) and `coursework_marks` (50), adds them into `total`, logs the total, then uses an `if / else` statement to print whether the result is a pass or a retake (the cutoff is 50).

**Expected output:**
```
80
You have passed
```

## `functions.js` — Overview

Walks through the three ways to define a function in JavaScript, then applies them in four worked examples:

1. **Function declaration** — `multiply()`
2. **Function expression** — `add = function(a, b) {...}`
3. **Arrow function** — `addNumbers = (a, b) => a + b`
4. **Example_one–four** — practical uses: summing two numbers with a template literal, greeting a user, depositing money, and withdrawing money (with an insufficient-funds check).

**Expected output (from the working examples):**
```
The sum of 4 and 5 is : 9
The sum of 9 and 15 is : 24
Welcome Kakama you are 20 years old
Your new balance is: 600
Your new balance is: 300
Insufficient funds
```

##  Known Issues

`functions.js` currently has two bugs that will stop it from running top-to-bottom in Node or a browser:

1. **`multiply()` references undefined variables.**
   ```javascript
   function multiply() {
       return a+b;
   }
   ```
   `a` and `b` are never defined inside or passed into the function. It's also never called, so it won't error unless invoked — but it should either take parameters (`function multiply(a, b)`) or be removed if unused.

2. **`add(5,6)` is called before `add` is defined.**
   ```javascript
   console.log(add(5,6));   // called here...

   const add = function (a,b) {   // ...but not defined until here
       return a + b;
   };
   ```
   Because `add` is declared with `const`, it isn't hoisted the way a `function` declaration is — calling it before this line throws `ReferenceError: Cannot access 'add' before initialization`.

   There's also a **naming conflict**: `add` is declared twice — once as a `const` function expression near the top, and again later as a `function add(a, b) {...}` declaration in Example_one. The second declaration (a proper function declaration) is hoisted to the top of the file, which is actually what allows the *later* `add(4,5)` and `add(9,15)` calls to work — but it also silently overwrites the `const` version, which will cause a `SyntaxError: Identifier 'add' has already been declared` in strict mode or module contexts.

**Suggested fix:** rename the early function expression (e.g. `const addExpr = function (a, b) {...}`) or remove it, and give `multiply()` its own parameters, e.g.:
```javascript
function multiply(a, b) {
    return a * b;
}
```

## Notes

- All output is written to the console via `console.log()` — nothing is rendered to a web page in these two files.
- Template literals (`` `${a+b}` ``) are used in `functions.js` for cleaner string interpolation.
