# DOM
## Selectors
```html
<html>
  <body>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td id="firstName"></td>
        <td id="lastName"></td>
        <td class="age"></td>
      </tr>
    </table>
  </body>
</html>
```
```js
const user = {
  firstName: "John",
  lastName: "Adams",
  age: 23
}

const $firstNameColumn = document.querySelector("#firstName");
const $lastNameColumn = document.getElementById("lastName");
const $ageColumn = document.querySelector(".age");

$firstNameColumn.textContent = user.firstName;
$lastNameColumn.textContent = user.lastName;
$ageColumn.textContent = user.age;
```

## Listeners
```css
.square {
  background: green;
  width: 200px;
  height: 200px;
  border-radius: 1rem;
}

.square--red {
  background: red;
}
```
```html
<html>
  <body>
    <div>
      <button id="button">Click!</button>
      <div class="square"></div>
    </div>
  </body>
</html>
```
```js
const $button = document.querySelector("#button")
const $square = document.querySelector(".square")
$button.addEventListener("click", () => {
  $square.classList.toggle("square--red")
})
```

## Setting values in DOM
### `textContent`
```js
$element.textContent = "Hello!"
```
**Before**
```html
<div></div>
```
**After**
```html
<div>Hello!</div>
```

### `innerHTML`
```js
$element.innerHTML = "<strong>Hello!</strong>"
```
**Before**
```html
<div></div>
```
**After**
```html
<div>
  <strong>Hello!</strong>
</div>
```
```js
$element.textContent = "<strong>Hello!</strong>"
```
**Before**
```html
<div></div>
```
**After**
```html
<div>
  &lt;strong&gt;Hello!&lt;/strong&gt;
</div>
```

### `setAttribute`
```js
$element.setAttribute("attributeName", "attributeValue")
```
**Before**
```html
<div></div>
```
**After**
```html
<div attributeName="attributeValue"></div>
```

### class names
```js
$element.className = "my-class"
// "" -> "my-class"
$element.className = "my-another-class"
// "my-class" -> "my-another-class"
$element.className = ""
// "my-anothe-class" -> ""

$element.classList.add("my-class")
// "" -> "my-class"
$element.classList.add("my-class")
// "my-class" -> "my-class"
$element.classList.add("my-another-class")
// "my-class" -> "my-class my-another-class"

$element.classList.toggle("my-class")
// "my-class" -> ""
$element.classList.toggle("my-class")
// "" -> "my-class"

$element.classList.remove("my-class")
// "my-class" -> ""
$element.classList.remove("my-class")
// "" -> ""
```

### Events argument
```html
<form id="form">
  <input type="text" id="text-input" />
  <input type="number" id="number-input" />
  <div id="wrapper">
    <button type="button">Button #1</button>
    <button type="button">Button #2</button>
  </div>
  <button type="submit">Submit!</button>
</form>
```
```js
document.querySelector("#text-input")
  .addEventListener("change", (e) => {
    // e.target: <input type="text" id="text-input" />
    // e.target.value: "Hello!"
  })

document.querySelector("#number-input")
  .addEventListener("input", (e) => {
    // e.target: <input type="text" id="number-input" />
    // e.target.value: "123"
    // e.target.valueAsNumber: 123
  })

document.querySelector("#wrapper")
  .addEventListener("click", (e) => {
    // e.target: <button>Button #1</button>
    // e.currentTarget: <div id="wrapper">...</div>
  })

document.querySelector("#form")
  .addEventListener("submit", (e) => {
    e.preventDefault()
    e.stopPropagation()
  })
```

### Creating elements
```html
<html>
  <div id="wrapper"></div>
</html>
```
```js
const user = {
  firstName: "John",
  lastName: "Adams",
  age: 23
}


```


DOM
  Moving through the DOM
  Creating Selectors
  adding elements
  listeners
  settings values (innerHTML, textContent, setAttribute, className)
  preventDefault
  stopPropagation
  value
  valueAsNumber
  target
  currentTarget