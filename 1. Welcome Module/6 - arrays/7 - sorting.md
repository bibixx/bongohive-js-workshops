## Sorting

``` js
const numbers = [10,2,6,3,1]
numbers.sort()
// numbers: [ 1, 10, 2, 3, 6 ]

const names = [ 'Carlos', 'Anthony', 'Brad' ]
names.sort()
// names: [ 'Anthony', 'Brad', 'Carlos' ]
```

Custom sorting

``` js
const users = [
    {
        username: "John",
        score: 30
    },
    {
        username: "Anna",
        score: 50
    }
]

users.sort((first, second) => { 
    if (first.score > second.score) { 
        return -1
    }
    if (first.score < second.score) { 
        return 1
    }
    return 0
})

// users: [ { username: 'Anna', score: 50 }, { username: 'John', score: 30 } ]
```