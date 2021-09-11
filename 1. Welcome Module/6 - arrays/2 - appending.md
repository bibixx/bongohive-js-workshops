## Appending elements

``` js
const users = ["user1", "user2"]
users.push("user3")

// users: ['user1', 'user2', 'user3']

users[3] = "user4"

// users: ['user1', 'user2', 'user3', 'user4']

users[5] = "user6"

// users: [ 'user1', 'user2', 'user3', 'user4', <1 empty item>, 'user6' ]
```
