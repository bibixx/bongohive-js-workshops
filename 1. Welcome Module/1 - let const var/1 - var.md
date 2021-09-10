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
var username = "Phineas";
```