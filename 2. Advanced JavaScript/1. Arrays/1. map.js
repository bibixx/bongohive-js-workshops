const cats = ['Molly', 'Flower', 'Kitty']

const greetings = cats.map(cat => `Hello ${cat}`)
const loudGreetings = greetings.map(greeting => greeting.toUpperCase())

// cats: [ 'Molly', 'Flower', 'Kitty' ]
// greetings: [ 'Hello Molly', 'Hello Flower', 'Hello Kitty' ]
// loudGreetings: [ 'HELLO MOLLY', 'HELLO FLOWER', 'HELLO KITTY' ]
