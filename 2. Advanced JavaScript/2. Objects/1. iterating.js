const studentMarks = {
  'Johnny Doe': 5,
  'Pablo Escobar': 2,
  'Mark Andersen': 3
}

// loop keys
for(const name of Object.keys(studentMarks)) {
  console.log(`Student: ${name}`)
}
// Outputs ->
  // Student: Johnny Doe
  // Student: Pablo Escobar
  // Student: Mark Andersen


// loop values
for(const mark of Object.values(studentMarks)) {
  console.log(`Mark: ${mark}`)
}
// Outputs ->
  // Mark: 5
  // Mark: 2
  // Mark: 3


// loop both keys and values
for(const [name, mark] of Object.entries(studentMarks)) {
  console.log(`${name} got '${mark}''`)
}
// Outputs ->
  // Johnny Doe got '5'
  // Pablo Escobar got '2'
  // Mark Andersen got '3'

