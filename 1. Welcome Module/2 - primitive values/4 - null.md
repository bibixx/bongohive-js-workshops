## null

Null is used to tell that there should be a value but for some intentional reason (example not passing validation) it's not there

``` js
function addNumbers(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return null
    }

    return n1 + n2
}

const sum = addNumbers(1)
// sum: null
```
