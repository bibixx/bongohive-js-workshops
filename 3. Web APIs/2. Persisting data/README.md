# Persisting data
## `localStorage`
```js
localStorage.setItem("key", "value")
localStorage.getItem("key")
// "value"

// * User closes the tab and opens the page again *
localStorage.getItem("key")
// "value"
```

## `sessionStorage`
```js
session.setItem("key", "value")
session.getItem("key")
// "value"

// User refreshes the page
localStorage.getItem("key")
// "value"

// * User closes the tab and opens the page again *
session.getItem("key")
// undefined
```

## Exercises
1. Create a form that asks for the user's name and displays it. When the users closes and opens up the page again, the name should persist.
