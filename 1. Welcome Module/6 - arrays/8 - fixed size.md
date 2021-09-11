## Filling the array

``` js
let animals = new Array(20)
animals.fill("cat")
console.log(animals)
// output: [
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat'
// ]

let flowers = Array.from({ length: 20 }).map(() => "flower")
// output: [
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower'
// ]
```
