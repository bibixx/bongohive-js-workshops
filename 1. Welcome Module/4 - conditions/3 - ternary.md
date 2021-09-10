
## ternary operator

``` js
let easterEggsOn = false
let welcomeMessage = `Welcome to the ${easterEggsOn ? "terrible" : "awesome"} game`;
```
you can event nest ternary operators:
```js
const age = 20
const school = age < 12
  ? 'primary school'
  : age < 19
  ? 'high school'
  : 'college'
```
