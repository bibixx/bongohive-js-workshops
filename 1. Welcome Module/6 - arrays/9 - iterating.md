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
