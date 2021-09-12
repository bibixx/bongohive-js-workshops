# Events argument
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
