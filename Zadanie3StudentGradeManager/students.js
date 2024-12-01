class Student {
    constructor({ name, age, grades = [] }) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
  
    addGrade(...newGrades) {
      this.grades = [...this.grades, ...newGrades];
    }
  
    getAverage() {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    }
  }
  
  class StudentManager {
    constructor() {
      this.students = [];
    }
  
    addStudent(studentData) {
      const student = new Student(studentData);
      this.students.push(student);
    }
  
    printStudents() {
      this.students.forEach(student => {
        const { name, age, grades } = student; 
        console.log(`Student: ${name}, Wiek: ${age}, Oceny: [${grades.join(", ")}], Średnia: ${student.getAverage().toFixed(2)}`);
      });
    }
  }
  
  const manager = new StudentManager();
  
  manager.addStudent({ name: "Marian", age: 37, grades: [6, 2, 1] });
  manager.addStudent({ name: "Marek", age: 23, grades: [3, 4] });
  
  manager.students[0].addGrade(4, 5);
  manager.students[1].addGrade(3);
  
  manager.printStudents();
  