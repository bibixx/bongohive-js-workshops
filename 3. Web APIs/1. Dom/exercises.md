## Finder

We need to find those elements, let's do this
1. Get the "Welcome" element
2. Get all the containers
3. While having selected "forth" element, select the wrapper

```html
<section id="main-section" class="wrapper">
    <h1 id="welcome">Welcome</h2>
    <div id="first" class="container">
        <h2>Title</h1>
    </div>
    <div id="second" class="container">
        <h3>Subtitle</h2>
    </div>
    <div id="third" class="container">
        <h4>Text</h3>
        <div id="forth" class="container">
            <h5>Notice</h3>
        </div>
    </div>
</section>
```

```js

```

## Color changer

When button is clicked we need to highlight every office related values in red, in this example it means only the `job-title`. We can do that by adding `.company-detail` to the element, when button is clicked again the class should be removed.

```html
<section id="workers">
  <div>
    <h3 class="name">John</h3>
    <h4 class="surname">Calamari</h4>
    <p class="job-title">Boss</p>
  </div>
  <div>
    <h3 class="name">Ramona</h3>
    <h4 class="surname">Latona</h4>
    <p class="job-title">Marketing Manager</p>
  </div>
</section>
<button>Highlight business details</button>
```
```css
.company-detail { 
  color: red;
}
```

## Have you got a question?
Create the following structure using only javascript

```html
<div id="questionnaire">
  <div class="question-wrapper">
    <p>Question 1: What's the result of 2+2*2?</p>
    <button class="reveal-tip">Show me a tip</button>
    <div id="tips-container"></div>
  </div>
</div>
```

**EXTRA** make clicking the `Show me a tip button` show the following tips in the `#tips-container`

```js
let question1Tips = [
  "Ohh it's not 8, remember about the operations ordering",
  "I'm sorry not sure if there another advice I can give to you"
]
```
