## Equality

### How many equal signs? `==` or `===`

`==` Operator can make any necessary type conversions to compare values, which might result in unexpected results
example

``` js
0 == '' // true
0 == '0' // true
'0' == '' // false
null == undefined // true
' \t\r\n ' == 0 // true
```

`===` will not make any type conversions, and if the types won't match it will return false, you should prefer the triple sign comparison whenever possible

``` js
0 === '' // false
0 === '0' // false
'0' === '' // false
null === undefined // false
' \t\r\n ' === 0 // false
```
### not

``` js
let myName = 'Anna'
let yourName = 'Chris'

myName !== yourName // true
```
