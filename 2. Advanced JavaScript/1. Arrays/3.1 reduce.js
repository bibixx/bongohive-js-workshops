const grades = [3, 2, 5, 5, 4]

const sumOfGrades = grades.reduce((sum, grade) => grade + sum, 0)

const avgGrade = sumOfGrades / grades.length

// grades: [3, 2, 5, 5, 4]
// sumOfGrades: 19
// avgGrade: 3.8
