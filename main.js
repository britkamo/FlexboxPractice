// console.log('This file is linked!')
var teacherFullName = 'Sally Jones';
var departmentName = 'Physics';
var rating1 = 3.4;
var rating2 = 5;
var rating3 = 4.2;
var averageRating = (rating1 + rating2 + rating3) / 3;
var roundedRating = Math.round(averageRating * 10) / 10;
var teacherCourse1 = 'Biology';
var teacherCourse2 = 'Physics';

var studentFullName = 'Tilly Johnson';
var studentMajor = 'History';
var studentEmail = 'tjohnson@CGE.edu';
var studentGpa = 3.5;
var studentCourse1 = 'Calculus';
var studentCourse2 = 'Econ 101';

var semester = 'Fall 2018';

console.log('Teacher: ' + teacherFullName);
console.log('Department: ' + departmentName);
console.log('Ratings: ' + rating1 + ', ' + rating2 + ', ' + rating3);
console.log('Average Rating: ' + roundedRating);
console.log('Student: ' + studentFullName);
console.log('Major: ' + studentMajor);
console.log('Email: ' + studentEmail);
console.log('GPA: ' + studentGpa);
console.log('Courses: ' + studentCourse1 + ', ' + studentCourse2);
console.log('Semester: ' + semester);
