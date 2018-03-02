//Yes I know I should have used classes for CSS I'll do it next time
//Also, the Type Secret box doesn't do anything

function addStudentToSection() {
    //This function is NOT what the name implies. It creates new students but doesn't add them to a section.
    if(document.getElementById("1").value == ""){
        alert("Please enter a first name for this student")
    }else{
        if(document.getElementById("2").value == "") {
            alert("Please enter a last name for this student (if they don't have a last name like McLovin from Superbad just enter a space)")
        }else{
            var firstName = document.getElementById("1").value;
            var lastName = document.getElementById("2").value;
            var grade = document.getElementById("20").value;
            allStudents.push(new Student(firstName, lastName, grade));
            document.getElementById("1").value = "";
            document.getElementById("2").value = "";
            document.getElementById("20").value = "9";
        }


    }
}
function addTeacherToSection() {
    //This function is NOT what the name implies. It creates new teachers but doesn't add them to a section.
    if(document.getElementById("4").value== ""){
        alert("Please enter a first name for this teacher")
    }else{
        if(document.getElementById("5").value== "") {
            alert("Please enter a last name for this teacher (if they don't have a last name like Seal from Band-Aid 30 just enter a space)")
        }else{
            var firstName = document.getElementById("4").value;
            var lastName = document.getElementById("5").value;
            var subject = document.getElementById("21").value;
            allTeachers.push(new Teacher(firstName, lastName, subject));
            document.getElementById("4").value = "";
            document.getElementById("5").value = "";
            document.getElementById("21").value = "9";
        }
    }
}
function addSection() {
    //This function creates a new section
    if(document.getElementById("7").value == ""){
        alert("Please enter a name for this section")
    }else {
        if (document.getElementById("8").value == "") {
            alert("Oh my god please just follow the instructions don't leave shit blank. Thanks")
        } else {
            var name = document.getElementById("7").value;
            var sectionCount = document.getElementById("8").value;
            allSections.push(new Section(name, sectionCount));
            document.getElementById("7").value = "";
            document.getElementById("8").value = "";
        }
    }
}
function display(){
    //This function is used to list Students, Teachers, or Sections and is the only time I didn't use a table because I wanted to try something different.
    document.getElementById("listingStuff").innerHTML = ' ';
    if(document.getElementById("category").value == 0){
        for(var i = 0; i < allStudents.length; i++){
            document.getElementById("listingStuff").innerHTML += '<p>' + allStudents[i].firstName + " " + allStudents[i].lastName + ": " + allStudents[i].grade + '<p/>'
        }
    }
    if(document.getElementById("category").value == 1){
        for(var i = 0; i < allTeachers.length; i++){
            document.getElementById("listingStuff").innerHTML += '<p>' + allTeachers[i].firstName + " " + allTeachers[i].lastName + ": " + allTeachers[i].subject + '<p/>'
        }
    }
    if(document.getElementById("category").value == 2){
        for(var i = 0; i < allSections.length; i++){
            document.getElementById("listingStuff").innerHTML += '<p>' + allSections[i].name + ": " + allSections[i].sectionCount + '<p/>'
        }
    }


}
function arrayToSelectStudent(){
    //This function puts the students in various select boxes
    var studentSelect = "";
    for(var i = 0; i< allStudents.length; i++){
        studentSelect = studentSelect + "<option value = '"+allStudents[i].id+"'>"+allStudents[i].firstName + " " + allStudents[i].lastName+"</option>"
    }
    document.getElementById("deleteStudent").innerHTML = studentSelect;
    document.getElementById("changeStudent").innerHTML = studentSelect;
    //document.getElementById("addStudent").innerHTML = studentSelect;
}
function arrayToSelectTeacher(){
    //This function puts the teachers in various select boxes
    var teacherSelect = "";
    for(var i = 0; i< allTeachers.length; i++){
        teacherSelect = teacherSelect + "<option value = '"+allTeachers[i].id+"'>"+allTeachers[i].firstName + " " + allTeachers[i].lastName+"</option>"
    }
    document.getElementById("putTeacherInSection").innerHTML = teacherSelect;
    document.getElementById("chooseTeacherToDeleteFromSection").innerHTML = teacherSelect;
}
function arrayToSelectSection(){
    //This function puts the sections in various select boxes
    var sectionSelect = "";
    for(var i = 0; i< allStudents.length; i++){
        sectionSelect = sectionSelect + "<option value ='"+allSections[i].id+"'>"+allSections[i].name+"</option>"
    }
    document.getElementById("deleteSection").innerHTML = sectionSelect;
    document.getElementById("changeSection").innerHTML = sectionSelect;
    document.getElementById("chooseSection").innerHTML = sectionSelect;
    document.getElementById("chooseSectionForTeacher").innerHTML = sectionSelect;
    document.getElementById("chooseSectionToListTeacher").innerHTML = sectionSelect;
    document.getElementById("chooseSectionToDeleteTeacherFrom").innerHTML = sectionSelect;
}

function putStudentInSection(){
    //This function puts students in specified sections. Also sorry for the weird sound effects I was just messing with them. I'll comment them out but I want to keep them for reference.
    //document.getElementById("soundEffect1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LONubMUvgbA?autoplay=1&start=13&end=14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    var section = getSectionById(document.getElementById("deleteSection").value);
    var student = getStudentById(document.getElementById("deleteStudent").value);
    section.studentList.push(student);
    console.log(section.studentList);
}


function putTeacherInSection(){
    //This function puts teachers in specified sections
    //document.getElementById("soundEffect1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/v3dN5Gz5Wl8?autoplay=1&start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    //document.getElementById("soundEffect1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/LONubMUvgbA?autoplay=1&start=13&end=14" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'

    var section = getSectionById(document.getElementById("chooseSectionForTeacher").value);
    var teacher = getTeacherById(document.getElementById("putTeacherInSection").value);
    section.teacherList.push(teacher);
    console.log(section.teacherList);
}

function listStudents(){
    //This function lists students in a section in a table form
    //document.getElementById("soundEffect2").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xP5z3nht61c?autoplay=1&start=8&end=9" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    var section = getSectionById(document.getElementById("chooseSection").value);
    var tables = "<table border = '1'>";
    for(var i = 0; i <section.studentList.length; i++){
        tables += "<tr>";
        tables += "<td>" + section.studentList[i].firstName + "</td>";
        tables += "<td>" + section.studentList[i].lastName + "</td>";
        tables += "<td>" + section.studentList[i].grade + "</td>";
        tables += "</tr>";
    }
    tables += "</table>";
    document.getElementById("listOfStudentsInTheSection").innerHTML = tables;
    console.log(tables);
    if(section.studentList.length==0 ){
        alert("There are no students currently in this section");
    }
}
function listTeachers(){
    //This function lists teachers for a section in a table form
    //document.getElementById("soundEffect2").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/xP5z3nht61c?autoplay=1&start=8&end=9" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    var section = getSectionById(document.getElementById("chooseSectionToListTeacher").value);
    var tables = "<table border = '1'>";
    for(var i = 0; i <section.teacherList.length; i++){
        tables += "<tr>";
        tables += "<td>" + section.teacherList[i].firstName + "</td>";
        tables += "<td>" + section.teacherList[i].lastName + "</td>";
        tables += "<td>" + section.teacherList[i].subject + "</td>";
        tables += "</tr>";
    }
    tables += "</table>";
    document.getElementById("listOfTeachersInTheSection").innerHTML = tables;
    console.log(tables);
    if(section.teacherList.length==0 ){
        alert("There are no teachers currently assigned to this section");
    }
}


function deleteStudentFromASection(){
    //This function deletes students from a section
    //document.getElementById("soundEffect1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/v3dN5Gz5Wl8?autoplay=1&start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    var section = getSectionById(document.getElementById("changeSection").value);
    var student = getStudentById(document.getElementById("changeStudent").value);
    console.log(student);
    for(var i = 0; i < section.studentList.length; i++){
        if(section.studentList[i].id == student.id){
            section.studentList.splice(i,1);
            break;
        }
    }
}
function deleteTeacherFromASection(){
    //This function deletes teachers from a section
    //document.getElementById("soundEffect1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/v3dN5Gz5Wl8?autoplay=1&start=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    var section = getSectionById(document.getElementById("chooseSectionToDeleteTeacherFrom").value);
    var teacher = getTeacherById(document.getElementById("chooseTeacherToDeleteFromSection").value);
    console.log(teacher);
    for(var i = 0; i < section.teacherList.length; i++){
        if(section.teacherList[i].id == teacher.id){
            section.teacherList.splice(i,1);
            break;
        }
    }
}



function getSectionById(secId) {
    //This function gets a section by its ID
    for(var i = 0; i< allSections.length; i++){
        if(allSections[i].id == secId){
            return allSections[i];
        }
    }
}

function getTeacherById(teacherId) {
    //This function gets a teacher by its ID
    for(var i = 0; i < allTeachers.length; i++){
        if(allTeachers[i].id == teacherId){
            return allTeachers[i];
        }
    }
}

function getStudentById(studentId) {
    //This function gets a student by its ID
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id == studentId){
            return allStudents[i];
        }
    }
}





