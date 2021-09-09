const studentMarks = {
  'Mark Andersen': 3,
  'Anna Jensen': 5,
  'Pablo Escobar': 2,
  'Johnny Doe': 5,
  'Joe Rogan': 3
}

const groupedByMarks = Object.entries(studentMarks)
  .reduce((obj, entry) => {
    const [name, mark] = entry
    const oldNames = obj[mark] || []
    const newNames = [...oldNames, name]

    return {
      ...obj,
      [mark]: newNames
    }
  }, {})

// groupedByMarks:
//   {
//     '2': [ 'Pablo Escobar' ],
//     '3': [ 'Mark Andersen', 'Joe Rogan' ],
//     '5': [ 'Johnny Doe', 'Anna Jensen' ]
//   }
