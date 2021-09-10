
### greater, smaller etc

``` js
10 > 15 // false
10 >= 10 // true
12 < 100 // true
```


### when types don't match

javascript has it's own approach to compare stuff, let's take a closer look

js will try to convert to number and than compare numbers
``` js
let hour = "16"
if (hour < 20) {
    // this code runs
    console.log("it's not that late")
}
```
