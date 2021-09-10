# Variables in JS

The oldest way to declare variables is to use the keyword `var`

## issues with `var`

### Overriding

``` js
var temporaryCache = ['cache1', 'cache2'];
var isOffline = true;

if (isOffline) {
    var temporaryCache = ['cache3'];
}

// temporaryCache: ['cache3']
```

### Re-declaring

``` js
var username = "John";
var username = "Phineash";
```


## `let` to the rescue

`let` is **block scoped**

``` js
let username = "John";
let username = "Phineash";
// SyntaxError: Identifier 'username' has already been declared
```

``` js

let users = ["user1", "user2"];
let validationEnabled = true;

if (validationEnabled) {
    let users = ["users1"]
}

```

## Constant values with `const`

Value of the variable declared with `const` cannot be changed, which means it needs to be set at the time of it's declaration

``` js
const age = 32;
age = 42;
// TypeError: Assignment to constant variable.
```

> We can tho modify the properties of the object declared with const
>``` js
>const user = {
>    name: "Bill",
>    age: 28
>}
>
>user.age = 18
>// user: { name: "Bill", age: 18 }
>```
> it works because const prevents us from changing the **value** and in case of the object the value is a reference to that object, when we change the object the reference doesn't change so everything is fine
