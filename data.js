var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("John","Senile",11));
allStudents.push(new Student("Jane","McCain",12));
allStudents.push(new Student("Matt","Shat",10));
allStudents.push(new Student("Becky","Ramen",9));
allStudents.push(new Student("Jen","Ten",12));

allTeachers.push(new Teacher("Carlos","Matos","Economics"));
allTeachers.push(new Teacher("Nokia","Beard","Math"));
allTeachers.push(new Teacher("Keldon","Clegg","History"));
allTeachers.push(new Teacher("Mattius","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

allSections.push(new Section("Math 2",30));
allSections.push(new Section("Math 3",25));
allSections.push(new Section("US History",30));
allSections.push(new Section("CS",32));
allSections.push(new Section("English",30));

var allItems = [allStudents,allTeachers,allSections];
