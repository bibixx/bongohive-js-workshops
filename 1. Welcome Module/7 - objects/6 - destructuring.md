### Destructuring
```js
const user = {
  name: 'User1',
  auth: { password: 'pass123' }
}
const { name } = user
// name: 'User1'

// You can even nest destructuring
const { auth: { password } } = user
// password: 'pass123'
```

### Rest operator
```js
const cat = { name: 'Molly', age: 16, toy: 'mouse' }
const { toy, ...catWithoutToy } = cat

// toy: 'mouse'
// catWithoutToy: { name: 'Molly', age: 16 }
```
