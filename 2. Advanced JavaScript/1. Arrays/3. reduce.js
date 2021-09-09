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
})

// usersArr: [ { name: 'John', age: 40 }, { name: 'Nasilele', age: 28 } ]
// usernameToAgeMap: { name: 'John', age: 40, Nasilele: 28 }


const arr = [1, 0, -2, 4, -9]
const negativeArr = arr.filter((num) => num < 0)
console.log({arr, negativeArr})
