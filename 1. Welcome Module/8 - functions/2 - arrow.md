### Arrow functions
```js
const multiply = (num1, num2) => {
  return num1 * num2
}

multiply(2, 3) // 6

// if all you do in a function is return a value you can skip the brackets `{ ... }`
const subtract = (num1, num2) => num1 - num2
subtract(7, 5) // 2

// if the function takes only one argument you can also skip the parentheses
const areaOfASquare = n => n * n
areOfSquare(3) // 9
```
