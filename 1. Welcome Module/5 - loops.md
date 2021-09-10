# Repeat stuff in easy way

## C-like for loop

```js
for (let i=0; i<10; i++) {
    console.log(i)
}
// 0 1 2 3 4 5 6 7 8 9
```

The condition might look different tho

```js
let userAuthenticated = true
for (let i=0; i<10 && userAuthenticated; i++) {
    // upload data for authenticated user
}
```

## While

```js
let isReady = false
while(!isReady) {
    // check if ready
}
```

go at least one time through the loop

```js
let score = 0
do {
    score += 10
} while (score < 50)
// score: 50
```

## break and continue

```js
let badWord = "gtfo";
let userMessageWords = ["hey", "gtfo", "right", "now"]
for (let index = 0; index < userMessageWords.length; index++) {
    if (userMessageWords[index] === badWord) {
        break;
    }
    console.log("No bad word");
}
// output: "No bad word" printed once
```

```js
let allUsers = ["user1", "user2", "user3"]
let you = "user1"
for (let index = 0; index < allUsers.length; index++) {
    if (allUsers[index] === you) {
        continue
    }
    // send message
}
```
