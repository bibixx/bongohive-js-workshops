## More operations

``` js
const things = ["pen", "book", "chair"]
const lastThing = things.pop()

// lastThing: "chair"
```

``` js
const productCodes = ["CST-3123", "CST-3212", "CST-3912"]
productCodes.unshift("CST-1111", "CST-0000")
// productCodes: ["CST-1111", "CST-0000", "CST-3123", "CST-3212", "CST-3912"]

let removed = productCodes.shift()
// removed: CST-1111
// productCodes: ["CST-0000", "CST-3123", "CST-3212", "CST-3912"]
```

``` js
const numbers = [1,2,3,4,5]
numbers.reverse()
// numbers: [ 5, 4, 3, 2, 1 ]
```
