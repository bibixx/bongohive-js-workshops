# Functions
## Functions and variable scopes
```js
const users = [
  { id: 1, firstName: 'John', surname: 'Musonda' },
  { id: 2, firstName: 'Adam', surname: 'Smith' },
]

const getUser = (id) => {
  const user = users.find((u) => u.id === id)

  const getUserFullName = () => {
    return `${user.name} ${user.surname}`
  }

  return {
    id: user.id,
    fullName: getUserFullName()
  }
}
```

## Function as an argument
```js
function sayHi() {
  console.log("Hi!")
}

setTimeout(sayHi, 200)
// After 200 ms it'll say "Hi!"
```

```js
// Text should be of format "I have #", where "#" will be replaced
// with the number
function formatTextWithNumber(text, number, getSuffix) {
  const textWithNumber = text.replace('#', number);
  const suffix = getSuffix(number);

  return `${textWithNumber} ${suffix}`;
}

function getDogsText(number) {
  if (number === 1) {
    return 'dog'
  }

  return 'dogs'
}

const oneDogText = formatTextWithNumber("I have #", 1, getDogsText)
// I have 1 dog

const twoDogsText = formatTextWithNumber("I have #", 2, getDogsText)
// I have 2 dogs

function getDogsTextPL(number) {
  // ...
}

formatTextWithNumber("Mam #", 2, getDogsText)
// Mam 2 psy
```

## Functional programming
> Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects

### Pure functions
Example of a not-pure function with side effects
```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  password: 'admin123',
  passwordTries: 0,
  isLoggedIn: false,
}

const checkPassword = (user, password) => {
  if (user.passwordTries > 5) {
    return;
  }

  if (user.password !== password) {
    user.passwordTries = passwordTries + 1
    return;
  }

  this.isLoggedIn = true
}

checkPassword(user, 'hello')
// The user object will look like this:
// {
//   firstName: 'John',
//   lastName: 'Doe',
//   password: 'admin123',
//   passwordTries: 1
// }
```

Functional way
```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  password: 'admin123',
  passwordTries: 0,
  isLoggedIn: false,
}

const checkPassword = (user, password) => {
  if (user.passwordTries > 5) {
    return { ...user };
  }

  if (user.password !== password) {
    return {
      ...user,
      passwordTries: passwordTries + 1
    };
  }

  return {
    ...user,
    isLoggedIn: true
  };
}

const userAfterFirstCheck = checkPassword(user, 'hello')
const userAfterSecondCheck = checkPassword(userAfterFirstCheck, 'hello1')
// After those checks the user object will still be the same.
// The changes are only reflected in the returned object
```

### Function returning a function
```js
function greet(name) {
  const helloString = `Hello ${name}`

  function logName() {
    console.log(helloString)
  }

  return logName
}

const greetPeter = greet("Peter")

greetPeter()
// Hello Peter!
greetPeter()
// Hello Peter!
greetPeter()
// Hello Peter!
```

#### Currying
```js
const filterByKey = (key) => (arraykey, Value) =>
  array.filter(element => element[key] === keyValue)

const users = [
  { id: 1, firstName: 'John', surname: 'Adams' },
  { id: 2, firstName: 'Mike', surname: 'Clark' },
  { id: 3, firstName: 'James', surname: 'Davis' },
  { id: 4, firstName: 'Adam', surname: 'Smith' },
  { id: 5, firstName: 'John', surname: 'Evans' },
]

const filterByFirstName = filterByKey('firstName')
const adam = filterByFirstName(users, 'Adam')
// [{ id: 4, firstName: 'Adam', surname: 'Smith' }]

const johns = filterByFirstName(users, 'Adam')
// [
//   { id: 1, firstName: 'John', surname: 'Adams' },
//   { id: 5, firstName: 'John', surname: 'Evans' },
// ]
```

## Classes
```js
class User {
  isBanned = false;

  constructor(firstName, lastName) {
    this.id = Math.random();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  ban() {
    this.isBanned = true
  }
}

class AdminUser extends User {
  constructor(firstName, lastName) {
    super(`[ADMIN] ${firstName}`, lastName)
    this.creationTime = Date.now()
  }
}

const user = new User('John', 'Doe')
user.getFullName()
// John Doe

const admin = new AdminUser('Adam', 'Doe')
admin.getFullName()
// [ADMIN] Adam Doe
```

## `this`
```js
class User {
  score = 0

  getNewScoreValue() {
    return this.score + 1;
  }

  incrementScore() {
    this.score = this.getNewScoreValue()
  }
}

const user = new User();

setInterval(user.incrementStore, 100)
// Error: getNewScoreValue is not a function
```

```js
class User {
  score = 0

  getNewScoreValue = () => {
    return this.score + 1;
  }

  incrementScore = () => {
    this.score = this.getNewScoreValue()
  }
}

const user = new User();

setInterval(user.incrementStore, 100)
// Every 100 ms it will log increment the score
```

Defining own context
```js
function myFunction(arg1, arg2) {
  console.log(arg1)
  console.log(arg2)
  console.log(this)
}

myFunction(1, 2)
// 1
// 2
// value of window

myFunction.call('this is my custom this', 3, 4)
// 3
// 4
// this is my custom this

myFunction.apply('this is my custom this', [5, 6])
// 5
// 6
// this is my custom this

const functionWithCustomThis = myFunction
  .bind('this is my custom this')

functionWithCustomThis(7, 8)
// 7
// 8
// this is my custom this
```

---

## Exercises
1. Implement a function that allows you to pass a custom greeting. The greeting should change depending on an hour of the day
```js
const getGreeting = (hour) => {
  if (hour < 12) {
    return "Good Morning"
  }

  if (hour < 20) {
    return "Good Afternoon"
  }

  return "Good Evening"
}

const greet = /* Your code goes here */

greet("Adam", getGreeting, 10)
// Good Morning Adam!

greet("John", getGreeting, 15)
// Good Afternoon Adam!

greet("Mike", getGreeting, 23)
// Good Evening Adam!
```

2. Create a function that adds a random number to the array in an immutable way.
```js
const addRandomNumberToArray = /* Your code goes here */

const array0 = []
const array1 = addRandomNumberToArray(array0)
const array2 = addRandomNumberToArray(array1)
const array3 = addRandomNumberToArray(array2)

console.log(array0) // -> []
console.log(array1) // -> [0.123]
console.log(array2) // -> [0.123, 0.456]
console.log(array3) // -> [0.123, 0.456, 0.789]
```

3. Implement a function that allows you to introduce the animal and make a sound
```js
const makeSound = /* Your code goes here */
const makeDogSound = makeSound("Woof!")
const makeCowSound = makeSound("Moo!")

makeDogSound("Dot")
// I'm Dot. Woof!
makeDogSound("Stinky")
// I'm Stinky. Woof!

makeCowSound("Emma")
// I'm Emma. Moo!
```
