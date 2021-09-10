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
