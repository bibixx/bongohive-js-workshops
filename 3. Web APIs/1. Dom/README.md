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

const $firstNameContainer = document.createElement("div")
$firstNameContainer.textContent = user.firstName

const $lastNameContainer = document.createElement("div")
$lastNameContainer.textContent = user.lastName

const $ageContainer = document.createElement("div")
$ageContainer.textContent = user.age

const $wrapper = document.querySelector("#wrapper")
$wrapper.appendChild($firstNameContainer)
$wrapper.appendChild($lastNameContainer)


// or if we want to insert before a specific element as opposed to adding at the end
$wrapper.appendChild($ageContainer, $firstNameContainer)
```

### Removing elements

```html
  <div class="trash">
    <span id="first">To be removed</span>
  </div>
```

```js
const $trash = document.querySelector('trash')
const $trashItem = document.querySelector('#first')

$trash.removeChild($trashItem)
```

### Relationships between nodes

``` html
<section class="banner">
  <div class="banner-header">
    <h3 class="banner-title">Welcome</h3>
    <h4>To the class</h4>
  </div>
  <div>
    <p class="banner-footer">class is open between 10 am and 6 pm
  </div>
</section>
```

``` js
const $bannerHeader = document.querySelector('.banner-header');

console.log($bannerHeader.parentElement)
// <section class="banner">…</section>

console.log($bannerHeader.firstElementChild)
// <h3 class="banner-title">Welcome</h3>

console.log($bannerHeader.lastElementChild)
// <h4>To the class</h4>

console.log($bannerHeader.children)
// [<h3 class="banner-title">, <h4>]
```

### Alternative to parentElement - closest()

It goes up the DOM tree and finds first result matching the selector

``` html
<section class="banner">
  <div class="banner-header">
    <h3 class="banner-title">Welcome</h3>
    <h4>To the class</h4>
  </div>
  <div>
    <p class="banner-footer">class is open between 10 am and 6 pm
  </div>
</section>
```

``` js
const $bannerTitle = document.querySelector('.banner-title');

const $banner = $bannerTitle.closest('.banner')
// instead of $banner = $bannerTitle.parentElement.parentElement

// output: <section class="banner">…</section>
```