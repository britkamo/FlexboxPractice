// console.log('This file is linked!')
var teacherFullName = 'Sally Jones';
var departmentName = 'Physics';
var ratingsArray = [3.5, 5, 4.2, 5, 1, 1, 1, 1];
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

var userRating = prompt("We would like for you to review . Please enter a rating between 0.0 - 5.0.", "0-5");

// I think this could be a function or loop somehow...
if(userRating == null) {
  alert("You can always leave a review later!");
} else if(userRating >= 0 && userRating <= 5) {
  addTeacherRating(ratingsArray, userRating);
  //averageStuff(ratingsArray);
  alert("Thanks for your review! <teacher's name> average rating is now: " + averageRating);
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
// Add a new rating entered bye the user to the passed array
function addTeacherRating(existingArray, newRating) {
  existingArray.push(newRating);
  return existingArray;
}
// take some numbers and find the average
function averageStuff(existingArray) {
  //var averageRating; //= (rating1 + rating2 + rating3) / 3;
  var sumOfNumbers = 0;
  var arrayTotal = existingArray.length;
  for( i=0; i < arrayTotal; i++) {
    sumOfNumbers += existingArray[i];
  }
  averageRating = sumOfNumbers / arrayTotal;
  roundedRating = Math.round(averageRating * 10) / 10;
  return roundedRating;
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
