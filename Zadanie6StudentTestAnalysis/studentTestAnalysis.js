const scores = [
    {grade: 4, surname: "Smith", subject: "Math"},
    {grade: 6, surname: "Johnson", subject: "Science"},
    {grade: 2, surname: "Williams", subject: "English"},
    {grade: 5, surname: "Jones", subject: "History"},
    {grade: 3, surname: "Brown", subject: "Geography"},
    {grade: 1, surname: "Davis", subject: "Art"},
    {grade: 6, surname: "Miller", subject: "PE"},
    {grade: 4, surname: "Wilson", subject: "Music"},
    {grade: 3, surname: "Moore", subject: "Math"},
    {grade: 2, surname: "Taylor", subject: "Science"},
    {grade: 5, surname: "Anderson", subject: "English"},
    {grade: 1, surname: "Thomas", subject: "History"},
    {grade: 6, surname: "Jackson", subject: "Geography"},
    {grade: 4, surname: "White", subject: "Art"},
    {grade: 2, surname: "Harris", subject: "PE"},
    {grade: 3, surname: "Martin", subject: "Music"},
    {grade: 5, surname: "Thompson", subject: "Math"},
    {grade: 1, surname: "Garcia", subject: "Science"},
    {grade: 6, surname: "Martinez", subject: "English"},
    {grade: 4, surname: "Robinson", subject: "History"},
    {grade: 3, surname: "Clark", subject: "Geography"},
    {grade: 2, surname: "Rodriguez", subject: "Art"},
    {grade: 6, surname: "Lewis", subject: "PE"},
    {grade: 1, surname: "Lee", subject: "Music"},
    {grade: 6, surname: "Walker", subject: "Math"},
    {grade: 4, surname: "Hall", subject: "Science"},
    {grade: 3, surname: "Allen", subject: "English"},
    {grade: 2, surname: "Young", subject: "History"}
]

class AnalyseGrades{


    static bestGrades(subject){
        let subjectGrades = scores.filter(score => score.subject == subject)
        let bestGrade = Math.max(...subjectGrades.map(grade => grade.grade))
        let bestGrades = subjectGrades.filter(grade => grade.grade == bestGrade)
        console.log(`Najlepsze oceny z ${subject}:`)
        bestGrades.forEach(score => {
            console.log(`- ${score.surname}, Grade: ${score.grade}`)
        })
    }


    static worstGrades(subject){
        let subjectGrades = scores.filter(score => score.subject == subject)
        let bestGrade = Math.min(...subjectGrades.map(grade => grade.grade))
        let bestGrades = subjectGrades.filter(grade => grade.grade == bestGrade)
        console.log(`Najgorsze oceny z ${subject}:`)
        bestGrades.forEach(score => {
            console.log(`- ${score.surname}, Grade: ${score.grade}`)
        })
    }


    static averageGrade(subject){
        let subjectGrades = scores.filter(score => score.subject == subject)
        let grades = subjectGrades.map(score => score.grade)
        let sum = (acc, currValue) => acc + currValue
        let sumGrades = grades.reduce(sum, 0)
        let avgGrades = sumGrades / grades.length
        console.log(`Średnia ocen z: ${subject}, to: ${avgGrades.toFixed(2)}`)
    }


}

AnalyseGrades.bestGrades("Math")
AnalyseGrades.worstGrades("Art")
AnalyseGrades.averageGrade("PE")
