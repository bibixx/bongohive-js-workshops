### 7. Form validation

We have a registration for an event, but we have got requirements on who can attend them
1. Participant must be adult (18 years or more)
2. Participant must have their own device, which is a laptop
3. Participant must have at least 50 points scored


**EXTRA** if the validation fails try to give explicit information what went wrong, so that the caller of your function knows what to present to the user

Example passing form
```js
let validForm = {
  name: "Carol",
  age: 22,
  devices: [
    {
      "name": "Amazing tablet",
      "type": "tablet"
    },
    {
      "name": "Still working laptop",
      "type": "laptop"
    }
  ],
  score: 50
}
```

Example non passing form
```js
let invalidForm = {
  name: "Emily",
  age: 18,
  devices: [
    {
      "name": "iPhone X",
      "type": "phone"
    },
  ],
  score: 100
}
```

``` js
function isFormValid() {

}

isFormValid(validForm) // true
isFormValid(invalidForm) // false
```
