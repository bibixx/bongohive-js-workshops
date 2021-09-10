# So what is this DOM?

It's a model that describes how the HTML code you wrote will be converted to the objects in the browser

Example HTML structure

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
    </head>
    <body>
        <header>
        </header>
        <section>
            <p>
            </p>
        </section>
        <footer>
        </footer>
    </body>
</html>
```

HTML - head
     - body
        - header
        - section
            - p
        - footer

## Window & Document

When js runs in the browser `window` is it's main root object 

window contains a property named `document`, it contains the whole webpage
using document you'll perform DOM manipulation

## DOM availability in the script

Your html doesn't randomly show up to your js script, it first needs to be loaded by the browser

If you'll access element before it's added, you'll get null

How to solve this?
1. Add the script add the bottom
2. use keyword `defer`
3. use event `DOMContentLoaded`

## How to grab elements

``` js
const loginButton = document.querySelector(".loginButton");
const userAvatar = document.querySelector("#userAvatar");
const firstOrderedElement = document.querySelector("ol ul");
```

``` js
const cartItems = document.querySelectorAll(".cartItem");
```

Watch out `querySelectorAll` doesn't return an array

``` js
const userMessages = document.querySelectorAll('.userMessages');
userMessages.map(userMessage => userMessage.style.color); // error: not an array
```

``` js
const [...userMessages] = document.querySelectorAll('.userMessages');
userMessages.map(userMessage => userMessage.style.color);
```

There's one exception

``` js
const [...userMessages] = document.querySelectorAll('.userMessages');
userMessages.forEach( userMessage => {
    userMessage.style.color = 'grey'
});
```

## Ready collections

``` js
document.body

document.all
document.forms
document.images
document.anchors
```

## HTMLCollection vs NodeList

NodeList is returned by `querySelector` and `querySelectorAll`
HTMLCollection is returned by older methods like `getElementsByTagName`

HTMLCollection will automatically update whenever html "inside them" will change, the NodeList on the other hand won't change no matter what will happen to your DOM

## Targeting nested elements

query selectors allow you to use css like selectors to get any element you need, the selector tho doesn't have a context, let's check it out

``` html
<div id="hero">
    <div data-name="wrapper">
        <div data-name="insider">
        </div>
    </div>
</div>
```

```js
const hero = document.querySelector('.hero')

const insider = hero.querySelector('div div')
// insider: wrapper
```

```js
const hero = document.querySelector('.hero')

const insider = hero.querySelector(':scope div div')
// insider: insider
```

Instead of playing with scope we can have a better naming

``` html
<section id="hero">
    <div class="hero-title">
        <div class="hero-underline">
        </div>
    </div class="wrapper">
</section>
```

``` js
const heroUnderline = document.querySelector('hero-underline')
```

