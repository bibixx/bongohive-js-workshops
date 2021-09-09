# Advanced JavaScript
## Functions


Advanced functions
functions as values,
callbacks,
function and variable scope,
pure function,
immutability,
currying,
classes,
this,
call,
apply

### Function as value
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
  if (number === 1) {
    return 'psa'
  }

  if (number === 2 || number === 3 || number === 4) {
    return 'psy'
  }

  return 'psów'
}

formatTextWithNumber("Mam #", 2, getDogsText)
// Mam 2 psy
```

### Functions and variable scopes
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

### Functional programming
> Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects

#### Pure functions
Example of a not-pure function with side effects
```js
const user = {
  firstName: 'John',
  lastName: 'Doe',
  password: 'admin123',
  passwordTries: 0,
}

const checkPassword = (user, password) => {
  if (user.passwordTries > 5) {
    return;
  }

  if (user.password !== password) {
    user.passwordTries = passwordTries + 1
    return;
  }

  loginUser()
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

  loginUser()

  return { ...user };
}

const userAfterFirstCheck = checkPassword(user, 'hello')
const userAfterSecondCheck = checkPassword(userAfterFirstCheck, 'hello1')
// After those checks the user object will still be the same.
// The changes are only reflected in the returned object
```

