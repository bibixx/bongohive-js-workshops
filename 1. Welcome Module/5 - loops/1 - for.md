# Repeat stuff in easy way

## C-like for loop

```js
for (let i=0; i<10; i++) {
    console.log(i)
}
// 0 1 2 3 4 5 6 7 8 9
```

The condition might look different tho

```js
let userAuthenticated = true
for (let i=0; i<10 && userAuthenticated; i++) {
    // upload data for authenticated user
}
```
