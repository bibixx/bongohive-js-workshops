# What are those primitives?

As of MDN definition, a primitive "is data that is not an object and has no methods."

Let's go through some of them now

## number

```js
let age = 53
```

## string

```js
let name = 'Bartek'
```

we can also use template literals to include other values in strings

``` js
let points = 42
let currentScore = `You have: ${points}`
```

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

## null

Null is used to tell that there should be a value but for some intentional reason (example not passing validation) it's not there

``` js
function addNumbers(n1, n2) {
    if (typeof n1 !== Number || typeof n2 !== Number) {
        return null
    }

    return n1 + n2
}

const sum = addNumbers(1)
// sum: null
```
