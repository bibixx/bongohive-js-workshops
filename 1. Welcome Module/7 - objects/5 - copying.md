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
