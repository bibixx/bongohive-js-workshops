## `let` to the rescue

`let` does not allow redeclaration

``` js
let username = "John";
let username = "Phineas";
// SyntaxError: Identifier 'username' has already been declared
```
... and `let` is **block scoped**
``` js

let users = ["user1", "user2"];
let validationEnabled = true;

if (validationEnabled) {
    let users = ["users1"]
}

// users: ["user1", "user2"]
```
