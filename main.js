// GLOBAL VARIABLES ------------------------------
var arrayTotal = 0; //var for the length of an array
var i = 0; //loop counter
// OBJECT PROTOTYPES -----------------------------

// ---TEACHERS---
var Teacher = function(fullName, departmentName, teacherCoursesArray, ratingsArray, addRating, averageTeacherRating){
  this.fullName = fullName;
  this.department = departmentName;
  this.teacherCourses = teacherCoursesArray;
  this.ratingsArray = ratingsArray;
}

Teacher.prototype = {
  addRating: function (newRating) {
      this.ratingsArray.push(newRating);
    },
    averageTeacherRating: function () {
      //var averageRating; //= (rating1 + rating2 + rating3) / 3;
      var sumOfNumbers = 0;
      arrayTotal = this.ratingsArray.length;
      for( i=0; i < arrayTotal; i++) {
        sumOfNumbers += this.ratingsArray[i];
      }
      averageRating = sumOfNumbers / arrayTotal;
      roundedRating = Math.round(averageRating * 10) / 10;
      return roundedRating;
    }
}
// ---COURSES---
var Course = function(course, department, teacher, semester){
  this.courseTitle = course;
  this.courseDepartment = department;
  this.courseTeacher = teacher;
  this.courseSemester = semester;
}
// ---STUDENTS---
var Student = function(studentName, studentMajor, studentEmail, studentGpa, studentCourses){
  this.fullName = studentName;
  this.major = studentMajor;
  this.email = studentEmail;
  this.averageGPA = studentGpa;
  this.coursesArray = studentCourses;
}
Student.prototype = {
  addCourse: function (newCourse) {
      this.coursesArray.push(newCourse);
    },
  dropCourse: function (courseToDrop) {
      //create a boolean variable to track if any courses were removed
      var courseRemovedBoolean = false;
      //loop through all courses in the arrays
      arrayTotal = this.coursesArray.length;
      for( i=0; i < arrayTotal; i++) {
        //if the course in the array is the course that will be dropped
        if(this.coursesArray[i] == courseToDrop){
          //remove that course and alert the user
          this.coursesArray.splice(i, 1);
          courseRemovedBoolean = true;
          console.log(courseToDrop + " was successfully dropped.");
          //assuming there will never be duplicate courses, no need to keep searching, exit the function
          return;
        }
        //if no courses were removed, alert the user
        if(courseRemovedBoolean == false){
          console.log("You aren't currently taking this course. No courses were dropped.");
        }
      }

    },
  changeMajor: function (newMajor) {
    this.major = newMajor;
    console.log("Your major has been changed to: "+ this.major)
    }
}


// OBJECT INSTANCES-------------------------------
var teacherCarl = new Teacher("Carl Henderson", "History", ["World History", "Chinese Classics"], [5.0, 4.0, 4.5]);
var teacherEmmeline = new Teacher("Emmeline Howe", "Science", ["Astro-Biology", "Physics"], [5.0, 4.0, 4.5]);
var teacherBrody = new Teacher("Brody Goodwin", "Mathematics", ["Calculus", "Algebra"], [5.0, 4.0, 4.5]);
var teacherKrista = new Teacher("Krista Jefferson", "Art", ["Photography", "Design"], [5.0, 4.0, 4.5]);
var teacherMaya = new Teacher("Maya Camden", "Science", ["Physics", "Chemistry"], [5.0, 4.0, 4.5]);

var course1 = new Course("Astro-Biology", "Science", teacherEmmeline, "Fall 2018");
var course2 = new Course("World History", "History", teacherCarl, "Fall 2018");
var course3 = new Course("Calculus", "Mathematics", teacherBrody, "Fall 2018");
var course4 = new Course("Mathematical Sculpture", "Art", teacherBrody, "Spring 2019");
var course5 = new Course("Physics", "Science", teacherEmmeline, "Spring 2019");
var course6 = new Course("Algebra", "Mathematics", teacherBrody, "Fall 2018");
var course7 = new Course("Photography", "Art", teacherKrista, "Fall 2018");
var course8 = new Course("Chemistry", "Science", teacherMaya, "Fall 2018");

//(studentName, studentMajor, studentEmail, studentGpa, studentCourses)
var student1 = new Student("Tilly Johnson", "Mathematics", "tjohnson@CGE.edu", 3.5, [course1, course2]);
var student2 = new Student("Lila Sullivan", "Biology", "lsullivan@CGE.edu", 3.6, [course1, course5]);
var student3 = new Student("Bryson Mills", "Art", "bmills@CGE.edu", 3.4, [course2, course4]);

// VARIABLES -------------------------------------
var coursesArray = [course1, course2, course3, course4, course5, course6, course7, course8];
var filteredCoursesArray = [];
var filteredCoursesString = "";

var averageRating; //= (rating1 + rating2 + rating3) / 3;
var roundedRating; //= Math.round(averageRating * 10) / 10;
var teacherCourse1 = 'Biology';
var teacherCourse2 = 'Physics';

var studentFullName = 'Tilly Johnson';
var studentMajor = 'History';
var studentEmail = 'tjohnson@CGE.edu';
var studentGpa = 3.5;
var studentCourse1 = 'Calculus';
var studentCourse2 = 'Econ 101';

var semester = 'Fall 2018';
var currentYear = 2018;

// INITIAL FUNCTION CALLS ----------------------------------
// update the courses displayed on the page
updateCourseDisplay(coursesArray);

// USER PROMPTS ----------------------------------
// var getGradYear = prompt("Please enter the college graduation year.", "Example: 2018");
// var getGradMonth = prompt("Please enter the college graduation month.", "Example: May or December");
//
// var welcomeCollegeStudent = function(studentClass){
//   alert("Welcome " + studentClass)+ "!";
// }
// var welcomeHsStudent = function(studentClass){
//   alert("You're still a " + studentClass + " in high school!");
// }
//
// if(getGradYear != null || getGradYear != ""){
//   //if in college,
//   //the graduation year will be within 4 years of the current year - 18,19,20,21
//   //if in high school,
//   //the graduation year will be within 8 years of the current year - 22,23,24,25
//   if (getGradYear < 2021) {
//     //console.log(welcomeCollegeStudent("Freshman"));
//     console.log(welcomeStudentsByGraduatingClass(getGradMonth, getGradYear, welcomeCollegeStudent));
//   } else if(getGradYear < 2025) {
//     //console.log(welcomeHsStudent("Sophomore"));
//     console.log(welcomeStudentsByGraduatingClass(getGradMonth, getGradYear, welcomeHsStudent));
//   } else if (getGradYear > 2025){
//     console.log("Whoa, college is some years away...");
//   } else {
//     console.log("Welcome visitor!");
//   }
// }
//
//
// var userFilter = prompt("Please enter a department to view available courses.", "Example: Science");
//
// if(userFilter != null || userFilter != ""){
//   filterCourses(coursesArray,userFilter);
//   if(filteredCoursesArray[0]){
//     filteredCoursesString = "Courses available in the " + userFilter + " department include: \n";
//     for ( i=0; i< filteredCoursesArray.length; i++){
//         //console.log(filteredCoursesArray[i]);
//         filteredCoursesString += filteredCoursesArray[i].courseTitle + "\n";
//     }
//     alert(filteredCoursesString);
//   } else {
//     filteredCoursesString = "Sorry, that department doesn't exist or has no available courses!";
//     var userFilter2 = prompt("Please try again. Enter a department to view available courses.", "Example: Art");
//     if(userFilter2 != null || userFilter2 != ""){
//       filterCourses(coursesArray,userFilter2);
//       if(filteredCoursesArray[0]){
//         filteredCoursesString = "Courses available in the " + userFilter2 + " department include: \n";
//         for ( i=0; i< filteredCoursesArray.length; i++){
//             //console.log(filteredCoursesArray[i]);
//             filteredCoursesString += filteredCoursesArray[i].courseTitle + "\n";
//         }
//         alert(filteredCoursesString);
//       }
//     }
//   }
// }
//
// var userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0.", "0-5");
//
//
// if(userRating == null) {
//   alert("You can always leave a review later!");
// } else if(userRating >= 0 && userRating <= 5) {
//   userRating = Math.floor(userRating);
//   //addTeacherRating(ratingsArray, userRating);
//   //console.log(teacherCarl.averageTeacherRating());
//   teacherCarl.addRating(userRating);
//   //averageStuff(ratingsArray);
//   //console.log(teacherCarl.averageTeacherRating());
//   alert("Thanks for your review! " + teacherCarl.fullName + "'s average rating is now: " + teacherCarl.averageTeacherRating());
// } else {
//   userRating = prompt("We won't ask again but would really appreciate your review . Please make sure your rating is between 0.0 - 5.0.", "0-5");
//   if(userRating == null) {
//     alert("You can always leave a review later!");
//   } else if(userRating >= 0 && userRating <= 5) {
//     teacherCarl.addRating(userRating);
//     alert("Thanks for your review! " + teacherCarl.fullName + "'s average rating is now: " + teacherCarl.averageTeacherRating());
//   } else {
//     alert("You can always leave a review later!");
//   }
// }


// FUNCTIONS -------------------------------------
//function to filter courses by the department
function filterCourses(existingArray, selectedDepartment){
  //loop through all arrays in the selected array
  arrayTotal = existingArray.length;
   for(i=0; i< arrayTotal; i++) {
     //if existingArray.nestedArray[1] value is equal to the selectedDepartment value
     //console.log(existingArray[i][1]);
     if(existingArray[i].courseDepartment == selectedDepartment){
       //push that value to a new array filteredArray
       filteredCoursesArray.push(existingArray[i]);
       //console.log(existingArray[i]);
     }
   }
  //return the filteredCoursesArray
  return filteredCoursesArray;
}

function welcomeStudentsByGraduatingClass(gradMonth, gradYear, gradGreet) {
  var yearsLeft = gradYear - currentYear;
  var currentClass = "";
  switch(yearsLeft) {
    case 0:
    case 4:
      currentClass = "Senior";
      break;
    case 1:
    case 5:
      currentClass = "Junior";
      break;
    case 2:
    case 6:
      currentClass = "Sophomore";
      break;
    case 3:
    case 7:
      currentClass = "Freshman";
      break;
  }
  gradGreet(currentClass);
}

// Dynamically create courses
function updateCourseDisplay(arrayOfCourses){
  arrayTotal = arrayOfCourses.length;
  var coursesHtmlString = "";
  //loop through the courses
  for( i=0; i < arrayTotal; i++) {
    // generate an html string for each course
    coursesHtmlString += "<div class='courseBox'><div class='partA'><h2>";
    coursesHtmlString += arrayOfCourses[i].courseDepartment + "</h2><h3>";
    coursesHtmlString += arrayOfCourses[i].courseTitle + "</h3></div>";
    coursesHtmlString += "<div class='partB'><p><strong>Teacher: </strong>";
    coursesHtmlString += arrayOfCourses[i].courseTeacher.fullName + "</p>";
    coursesHtmlString += "<p><strong>Semester: </strong>";
    coursesHtmlString += arrayOfCourses[i].courseSemester + "</p></div></div><!-- end courseBox-->";
  }
  //alert(coursesHtmlString);
  //$( document ).ready( handler )
  $(function() {
    // add coursesHtmlString to the HTML
    $('#coursesContainer').append(coursesHtmlString);
  });
}
