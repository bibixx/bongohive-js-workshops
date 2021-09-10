## Function definition
```js
function add(num1, num2) {
  return num1 + num2
}

add(3, 4) // 7

// functions can be assigned to variables just as any other values
const addNumbers = add
addNumbers(2, 2) // 4
```

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

### Spread operator
```js
function addMany(...numbers) {
  const sum = 0
  numbers.forEach(num => num += sum)
  return sum
}

addMany(2, 3, 2) // 7
```

it works just as well with arrow functions

```js
const greetParentWithKids = (parent, ...kids) => {
  console.log(`Hello ${parent}!`)

  kids.forEach(kid => console.log(`and hello to you too ${kid}!`))
}

greetParentWithKids('John', 'Mark', 'Sophie')
// outputs:
// Hello John!
// and hello to you too Mark!
// and hello to you too Sophie!

greetParentWithKids('John')
// outputs:
// Hello John!
```
