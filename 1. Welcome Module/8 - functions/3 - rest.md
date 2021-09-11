### Rest operator
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
