# We all love those equations

We can divide operators into 3 main groups
1. Assignment - make `x` equal to 14
2. Comparison - is `x` greater than `y`
3. Logical - does `x` **and** `y` are both greater than 10

## Assignment

``` js
const dog = 'Mambo'

let age = 12
// after one year
age++
// age: 13

let points = 5
points += 10
// points: 15
```

## Comparision 

### How many equal signs? == or ===

`==` Operator can make any necessary type conversions to compare values, which migh result in unexpected results
example

``` js
0 == '' // true
0 == '0' // true
'0' == '' // false
null == undefined // true
' \t\r\n ' == 0 // true
```

`===` will not make any type conversions, and if the types won't match it will return false, you should prefer the triple sign comparasion whenever possible

``` js
0 === '' // false
0 === '0' // false
'0' === '' // false
null === undefined // false
' \t\r\n ' === 0 // false
```

### greater, smaller etc

``` js
10 > 15 // false
10 >= 10 // true
12 < 100 // true
```

### not

``` js
let myName = 'Anna'
let yourName = 'Chris'

myName != yourName // true
```

### when types don't match

javascript has it's own approach to compare stuff, let's take a closer look

js will try to convert to number and than compare numbers
``` js
let hour = "16"
if (hour < 20) { 
    console.log("it's not that late")
}
```

### comparing strings

strings comparation happen by comparing their positions in Unicode char table
``` js
console.log("ab" > "aa")
// true
console.log("age" > "Age")
// true
```
> small latters are defined after big once in Unicode table that's why age is greater than Age