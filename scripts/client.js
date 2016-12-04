// Global variables
// ==================
var tauStudents = [];
var outputText = '';
var searchUrl = 'http://devjana.net/support/tau_students.json';
var timeInterval = 10000;
var student = 0;

$(document).ready(function(){

  var studentData = function(){
  $.ajax({
    url: searchUrl,
    dataType: 'JSON',
    success: function( data ){
    console.log('successfully hit tau_students:' , data);
    console.log('data.tau:', data.tau);
    tauStudents = data.tau;
    showStudent(tauStudents[0]);
    }//end success function
  }); //end ajax call
}; //end studentData function
studentData();

  //display tauStudents to DOM
  var showStudent = function (student){
    console.log(student);
      outputText =  $('#studentName').html ('<p>' + '<strong>' + 'Name:' +'</strong>' + '  ' + student.first_name + ' ' + student.last_name + '</p>');
      outputText = $('#studentInfo').html ('<p>' + '<strong>' + 'Info:' +'</strong>' + '  ' + student.info + '</p>');
      outputText = $('#studentImg').html ('<img src="' + student.picUrl + '">');
      studentNumber();

    }; //end showStudents function

    //display the number of which student is being shown
    var studentNumber = function(){
      $('#studentNumber').html('<p>' + '( The student displayed is:' + ' ' + (student + 1) + ' ' + 'out of 15 )' + '</p>');
    };//end studentNumber function

 $('#nextProfile').click(function(){
   console.log('in next button function', student);
   if(student === 14){
    student = 0;
  }else{
     student +=  1;
  }
  showStudent(tauStudents[student]);
});//end nextStudent function

$('#previousProfile').click(function(){
  console.log('in previous button function', student);
  if(student === 0){
   student = 14;
 }else{
    student -=  1;
 }
 showStudent(tauStudents[student]);
}); //end previousProfile button click

 $('student_buttons').click(function(){
   

}); //end student_buttons button click







}); //end doc ready function
