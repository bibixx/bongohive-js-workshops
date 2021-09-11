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
