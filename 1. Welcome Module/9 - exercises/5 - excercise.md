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
