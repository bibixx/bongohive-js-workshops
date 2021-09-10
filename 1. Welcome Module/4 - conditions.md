# How to check things

## if, else, if else

``` js

let age = 19

if (age >= 18) {
    console.log("Adult content enabled")
}

```

``` js

let isPremium = true

if (isPremium) {
    console.log("Access granted")
} else {
    console.log("Not today")
}

```

``` js

let difficultyLevel = 100

if (difficultyLevel < 50) {
    console.log("Beginner lesson")
} else if (difficultyLevel < 90) {
    console.log("Medium lesson")
} else {
    console.log("Advanced lesson")
}

```

## switch

``` js
let roadLight = "red"

switch(roadLight) {
    case "greed":
        console.log("drive safely");
        break;
    case "yellow":
        console.log("please stop");
        break;
    case "red":
        console.log("STOP!");
        break;
    default:
        console.log("Unknown light value, please fix!");
}
```

## ternary operator

``` js
let easterEggsOn = false
let welcomeMessage = `Welcome to the ${easterEggsOn ? "terrible" : "awesome"} game`;
```

## falsy

Those values convert to `false` in the condition

```
if (false) { ... }
if (null) { ... }
if (undefined) { ... }
if (0) { ... }
if (NaN) { ... }
if ("") { ... }
```
