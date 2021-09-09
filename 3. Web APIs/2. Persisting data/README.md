# Persisting data
## `localStorage`
```js
localStorage.setItem("key", "value")
localStorage.getItem("key")
// value

// * User closes the tab and opens the page again *
localStorage.getItem("key")
// undefined
```

## `sessionStorage`
```js
session.setItem("key", "value")
session.getItem("key")
// value

// * User closes the tab and opens the page again *
session.getItem("key")
// undefined
```

## Excercieses
1. Create a form that asks for the user's name and displays it. When the users comes back again to the page, the name should persist.
