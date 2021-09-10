# Store multiple values in one place

You can declare array as usual by typing square brackets

``` js
let arr = []
const users = ["user1", "user2"]
```

Array doesn't require you to have elements of the same type
``` js
let randomThingsInCache = ["imageUrl", "p!ssw0rd", 1293, null, "eee"]
```

## Array length

``` js
const names = ["Kyle", "Justin", "Ferry"]
// names.length: 3

names[names.length - 1]
// output: "Ferry"
```

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


## Is this really an array?

``` js
let scores = [22, 31, 49, 12]

typeof scores // object

Array.isArray(scores) // true
```

## More operations

``` js
const things = ["pen", "book", "chair"]
const lastThing = things.pop()

// lastThing: "chair"
```

``` js
const productCodes = ["CST-3123", "CST-3212", "CST-3912"]
productCodes.unshift("CST-1111", "CST-0000")
// productCodes: ["CST-1111", "CST-0000", "CST-3123", "CST-3212", "CST-3912"]

let removed = productCodes.shift()
// removed: CST-1111
// productCodes: ["CST-0000", "CST-3123", "CST-3212", "CST-3912"]
```

``` js
const numbers = [1,2,3,4,5]
numbers.reverse()
// numbers: [ 5, 4, 3, 2, 1 ]
```

## Arrays and text

``` js
let userSentence = "Hi my name is Mike"
let wordsInSentence = userSentence.split(' ')
// wordsInSentence: [ 'Hi', 'my', 'name', 'is', 'Mike' ]
```

``` js
const contributors = ["Arek", "Czarek", "Leszek"]
const contributorsTitle = contributors.join(" - ")
// contributorsTitle: 'Arek - Czarek - Leszek'
```

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

## Sorting

``` js
const numbers = [10,2,6,3,1]
numbers.sort()
// output: [ 1, 10, 2, 3, 6 ]

const names = ["Brad", "Krispin", "Sam", "anthony"]
names.sort()
// output: [ 'Brad', 'Krispin', 'Sam', 'anthony' ]
```

## Filling the array

``` js
let animals = new Array(20)
animals.fill("cat")
console.log(animals)
// output: [
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat',
//   'cat', 'cat', 'cat', 'cat'
// ]

let flowers = Array.from({ length: 20 }).map(() => "flower")
// output: [
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower', 'flower',
//   'flower', 'flower'
// ]
```

## Looping over - the fun stuff

``` js
const enemies = ["enemy1", "enemy2"]
for (const enemy of enemies) {
    console.log(enemy)
}
// output: enemy1, enemy2
```

``` js
const freeDays = ["Saturday", "Sunday"]
freeDays.forEach((day) => { console.log(`I like ${day}!`)})
// output: I like Saturday! I like Sunday!
```

First supports things like break and continue, Second can be chained with other iterator methods

## Destructuring

```js
const nameAndSurname = ['Donald', 'Trump']
const [name, surname] = nameAndSurname

// name: 'Donald'
// surname: 'Trump'
```

## Spread operator

```js
const registeredUsers = ['John', 'Pablo']
const newUsers = ['Micheal', 'Clint']
const currentUser = 'Peter'
const allUsers = [...registeredUsers, ...newUsers, currentUser]

// allUsers:  ['John', 'Pablo', 'Micheal', 'Clint', 'Peter']
```

## Rest operator

```js
const [firstUser, ...rest] = ['user1', 'user2', 'user3']
// firstUser: 'user1',
// rest: ['user2', 'user3']
```
