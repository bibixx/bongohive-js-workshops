### 1. Write a function that describes the weather depending on temperature
```js
function getWeatherCondition() {
  // Your code goes here...
}

/*
  * Less than 10 - 'It sucks :('
  * Between 10 and 20 - 'Not so bad :)'
  * Between 20 and 30 - 'Thank god for the sun :D'
  * Over 30 - 'It's hot!'
*/
getWeatherCondition(0) // It sucks :(
getWeatherCondition(15) // Not so bad :)
getWeatherCondition(23) // Thank god for the sun :D
getWeatherCondition(42) // It's hot!
```

### 2. Write a function that answers what's an area of a circle with a given radius.
You might want to use `Math.PI` for that. Also try using template strings: `` `Hello ${name}` ``.
```js
function getCircleAreaMessage(radius) {
  // Your code goes here
}

getCircleAreaMessage(1) // 'For radius 1 area is 3.14.'
getCircleAreaMessage(3) // 'For radius 3 area is 28.27.'
```

### 3. Check if array is sorted descending (from highest to lowest)
```js
function isArrayDescending(arr) {
  // Your code goes here
}

isArrayDescending([3, 2, 1]) // true
isArrayDescending([1, 1, 0]) // true
isArrayDescending([5, 6, 1, 4]) // false
```


### 4. Check if a word is a palindrome - it reads the same backwards
Please implement the following algorithm:
1. reverse a `word`
2. compare if the `reversedWord` is the same as `word`

You might want to use array methods for that.
```js
function isPalindrome(word) {
  // Your code goes here...
}

isPalindrome('ABBA') // true
isPalindrome('bongo') // false
isPalindrome('level') // true
```


### 5. Get user's deeply nested `passwordHash`
The function should return `null` if user object has incorrect structure.
It should not throw error.
```js
function getPasswordHashFromUser(user) {
  // Your code goes here...
}

const correctUser = {
  name: 'Peter',
  auth: {
    lastLoginDate: '01-03-2021',
    passwordHash: '0x4143f2abc'
  }
}
getPasswordHashFromUser(correctUser) // '0x4143f2abc'

const incorrectUser = {}
getPasswordHashFromUser(incorrectUser) // null - no error
```
