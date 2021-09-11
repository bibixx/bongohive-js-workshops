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
