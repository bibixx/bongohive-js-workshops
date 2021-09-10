## boolean

```js
let isPremium = true
```

## undefined

It means that there is no value

```js
function promoteToAdminRole(user) {
    if (user === undefined) {
        return 'Undefined value!'
    }
    // make user admin
}

promoteToAdminRole()

// returns: 'Undefined value!'
```
