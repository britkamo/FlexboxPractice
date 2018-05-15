// console.log('This file is linked!')
var teacher = {
  fullName: 'Sally Jones',
  departmentName: 'Physics',
  ratingsArray: [3.5, 5, 4.2, 5, 1, 1, 1, 1],
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
// var teacherFullName = 'Sally Jones';
// var departmentName = 'Physics';
// var ratingsArray = [3.5, 5, 4.2, 5, 1, 1, 1, 1];
var coursesArray = [["Biology", "Science"],["Physics", "Science"],["Calculus", "Mathematics"],["Algebra", "Mathematics"],["Econ 101", "Business"],["Photography", "Art"],["World History", "History"],["Sculpture", "Art"],["Astronomy", "Science"]];
var filteredCoursesArray = [];
var filteredCoursesString = "";
var arrayTotal = 0;
// var rating1 = 3.4;
// var rating2 = 5;
// var rating3 = 4.2;
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
/*var getGradYear = prompt("Please enter the college graduation year.", "Example: 2018");
var getGradMonth = prompt("Please enter the college graduation month.", "Example: May or December");

var welcomeCollegeStudent = function(studentClass){
  alert("Welcome " + studentClass)+ "!";
}
var welcomeHsStudent = function(studentClass){
  alert("You're still a " + studentClass + " in high school!");
}

if(getGradYear != null || getGradYear != ""){
  //if in college,
  //the graduation year will be within 4 years of the current year - 18,19,20,21
  //if in high school,
  //the graduation year will be within 8 years of the current year - 22,23,24,25
  if (getGradYear < 2021) {
    //console.log(welcomeCollegeStudent("Freshman"));
    console.log(welcomeStudentsByGraduatingClass(getGradMonth, getGradYear, welcomeCollegeStudent));
  } else if(getGradYear < 2025) {
    //console.log(welcomeHsStudent("Sophomore"));
    console.log(welcomeStudentsByGraduatingClass(getGradMonth, getGradYear, welcomeHsStudent));
  } else {
    console.log("Whoa, college is some years away...");
  }
}


var userFilter = prompt("Please enter a department to view available courses.", "Example: Science");

if(userFilter != null || userFilter != ""){
  filterCourses(coursesArray,userFilter);
  if(filteredCoursesArray[0]){
    filteredCoursesString = "Courses available in the " + userFilter + " department include: \n";
    for ( i=0; i< filteredCoursesArray.length; i++){
        //console.log(filteredCoursesArray[i]);
        filteredCoursesString += filteredCoursesArray[i][0] + "\n";
    }
    alert(filteredCoursesString);
  } else {
    filteredCoursesString = "Sorry, that department doesn't exist or has no available courses!";
    var userFilter2 = prompt("Please try again. Enter a department to view available courses.", "Example: Art");
    if(userFilter2 != null || userFilter2 != ""){
      filterCourses(coursesArray,userFilter2);
      if(filteredCoursesArray[0]){
        filteredCoursesString = "Courses available in the " + userFilter2 + " department include: \n";
        for ( i=0; i< filteredCoursesArray.length; i++){
            //console.log(filteredCoursesArray[i]);
            filteredCoursesString += filteredCoursesArray[i][0] + "\n";
        }
        alert(filteredCoursesString);
      }
    }
  }
}
*/
var userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0.", "0-5");


if(userRating == null) {
  alert("You can always leave a review later!");
} else if(userRating >= 0 && userRating <= 5) {
  userRating = Math.floor(userRating);
  //addTeacherRating(ratingsArray, userRating);
  console.log(teacher.averageTeacherRating());
  teacher.addRating(userRating);
  //averageStuff(ratingsArray);
  console.log(teacher.averageTeacherRating());
  alert("Thanks for your review! " + teacher.fullName + "'s average rating is now: " + teacher.averageTeacherRating());
} else {
  userRating = prompt("We won't ask again but would really appreciate your review . Please make sure your rating is between 0.0 - 5.0.", "0-5");
  if(userRating == null) {
    alert("You can always leave a review later!");
  } else if(userRating >= 0 && userRating <= 5) {
    addTeacherRating(ratingsArray, userRating);
    alert("Thanks for your review! <teacher's name> average rating is now: " + averageRating);
  } else {
    alert("You can always leave a review later!");
  }
}


// Add a new rating entered by the user to the passed array
// function addTeacherRating(existingArray, newRating) {
//   existingArray.push(newRating);
//   return existingArray;
// }
// take some numbers and find the average
// function averageStuff(existingArray) {
//   //var averageRating; //= (rating1 + rating2 + rating3) / 3;
//   var sumOfNumbers = 0;
//   arrayTotal = existingArray.length;
//   for( i=0; i < arrayTotal; i++) {
//     sumOfNumbers += existingArray[i];
//   }
//   averageRating = sumOfNumbers / arrayTotal;
//   roundedRating = Math.round(averageRating * 10) / 10;
//   return roundedRating;
// }
//function to filter courses by the department
function filterCourses(existingArray, selectedDepartment){
  //loop through all arrays in the selected array
  arrayTotal = existingArray.length;
   for(i=0; i< arrayTotal; i++) {
     //if existingArray.nestedArray[1] value is equal to the selectedDepartment value
     //console.log(existingArray[i][1]);
     if(existingArray[i][1] == selectedDepartment){
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



// console.log('Teacher: ' + teacherFullName);
// console.log('Department: ' + departmentName);
// console.log('Ratings: ' + rating1 + ', ' + rating2 + ', ' + rating3);
// console.log('Average Rating: ' + roundedRating);
// console.log('Student: ' + studentFullName);
// console.log('Major: ' + studentMajor);
// console.log('Email: ' + studentEmail);
// console.log('GPA: ' + studentGpa);
// console.log('Courses: ' + studentCourse1 + ', ' + studentCourse2);
// console.log('Semester: ' + semester);
