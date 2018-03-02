var id = 0;

function Student(firstName, lastName, grade){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;

}

function Teacher(firstName, lastName, subject){
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Section(name, sectionCount) {
    this.id = id++;
    this.name = name;
    this.sectionCount = sectionCount;
    this.studentList = [];
    this.teacherList = [];

}

