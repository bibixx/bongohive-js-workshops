## Finding elements

``` js
const starships = ["Tie", "X-Wing"]
starships.indexOf("Tie")
// output: 0
starships.indexOf("Y-Wing")
// output: -1
// means not found
starships.push("Tie")
// [ 'Tie', 'X-Wing', 'Tie' ]
starships.lastIndexOf("Tie")
// output: 2
```

``` js
const bannedUser = "user1"
const usersInRoom = ["user3", "user4", "user5"]

usersInRoom.includes(bannedUser)
// output: false
```
