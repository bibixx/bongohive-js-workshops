## calling methods on primitive types

Each primitive type has it's own corresponding Object type, when you try to access some property or method on the primitive, what happens behind the scene is that JS will create the object, call the method or the property and convert it back to the primitive

Let's take a look

``` js
const welcomeMessage = "Welcome to JavaScript @ BongoHive Workshops!"
welcomeMessage.length // 44

const powerMultiplier = 2.371823
// When we want to present it to user we don't want to show all the numbers after dot, we mostly show just 2
powerMultiplier.toFixed(2) // 2.37
```
