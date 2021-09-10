const usersArr = [
  {name: 'John', age: 40},
  {name: 'Nasilele', age: 28}
]

const usernameToAgeMap = usersArr.reduce((obj, user) => {
  const { name, age } = user
  return {
    ...obj,
    [name]: age
  }
}, {})

// usersArr: [ { name: 'John', age: 40 }, { name: 'Nasilele', age: 28 } ]
// usernameToAgeMap: { John: 40, Nasilele: 28 }
