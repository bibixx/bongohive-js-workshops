## Rest operator

```js
function logAll(...arguments) { 
    for (const argument of arguments) { 
        console.log(argument)
    }
}

logAll('user1', 'user2', 'user3')

// output:
// user1
// user2
// user3
```
