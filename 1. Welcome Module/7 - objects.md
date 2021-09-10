### Reading properties
```js
const user = {
  name: 'Johnny',
  surname: 'Cash'
}

user.name // 'Johnny'
user['name'] // 'Johnny'
user['na' + 'me'] // 'Johnny'

const nameKey = 'name'
user[nameKey] // Johny

user.password // undefined
```

### Defining and modifying properties
```js
const cat = {
  name: 'Molly',
}

cat.favoriteFood = 'milk'
// cat: { name: 'Molly', favoriteFood: 'milk' }

cat.name = 'Furry'
// cat: { name: 'Furry', favoriteFood: 'milk' }
```

### Shorthand property definition
```js
const name = 'John'
const surname = 'Doe'

const user = {
  name,
  surname,
  password: '123'
}

// user: { name: 'John', surname: 'Doe', password: '123' }
```

### Dynamic property definition
```js

const currentUserId = 654
const currentUser = { name: 'Joe' }
const users = {
  123: { name: 'Peter' },
  413: { name: 'Paul' },
  [currentUserId]: currentUser
}

// users: {
//   123: { name: 'Peter' },
//   413: { name: 'Paul' },
//   654: { name: 'Joe' }
// }
```

### Copying objects
By default objects are assigned by reference
```js
const defaultUser = { name: '', surname: '' }

const userNameFromInput = 'Johnny'
const currentUser = defaultUser
currentUser.name  = userNameFromInput

// BAD
// defaultUser: { name: 'Johnny', surname: '' }
// currentUser: { name: 'Johnny', surname: '' }
```
but we can copy objects using spread operator
```js
const defaultUser = { name: '', surname: '' }

const userNameFromInput = 'Johnny'
const currentUser = { ...defaultUser }
currentUser.name = 'Johnny'

// GOOD
// defaultUser: { name: '', surname: '' }
// currentUser: { name: 'Johnny', surname: '' }
```

even better would be

```js
const currentUser = {...defaultUser, name: userNameFromInput }
// defaultUser: { name: '', surname: '' }
// currentUser: { name: 'Johnny', surname: '' }
```

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
const cat = { name: 'Molly', age: 16, toy: 'mice' }
const { toy, ...catWithoutToy } = cat

// toy: 'mice'
// catWithoutToy: { name: 'Molly', age: 16 }
```
