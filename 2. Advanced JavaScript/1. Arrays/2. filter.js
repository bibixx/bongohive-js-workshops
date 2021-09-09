const numbers = Array.from({ length: 10 }).map((_, i) => i + 1)

const odd = numbers.filter(num => num % 2 !== 0)
const greaterThanSix = numbers.filter(num => num > 6)

// numbers: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// odd: [ 1, 3, 5, 7, 9 ],
// greaterThanSix: [ 7, 8, 9, 10 ]
