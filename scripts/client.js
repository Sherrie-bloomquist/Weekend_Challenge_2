// Global variables
// ==================
var tauStudents = [];
var outputText = '';
var searchUrl = 'http://devjana.net/support/tau_students.json';
var timeInterval = 10;
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
    everyoneGetsAButton();
    }//end success function
  }); //end ajax call
}; //end studentData function
studentData();

// make dynamic buttons for each student
var everyoneGetsAButton = function(){
  for (var i = 0; i < tauStudents.length; i++) {
    $('#buttons').append("<button onClick='showStudent(" + i + ")' class='btn btn-info'>" + tauStudents[i].first_name + " " + "</button>");
  }
}; //end everyoneGetsAButton function

  //display tauStudents to DOM
  var showStudent = function(student){
      outputText =  $('#studentName').html ('<p>' + '<strong>' + 'Name:' +'</strong>' + '  ' + student.first_name + ' ' + student.last_name + '</p>');
      outputText = $('#studentInfo').html ('<p>' + '<strong>' + 'Info:' +'</strong>' + '  ' + student.info + '</p>');
      outputText = $('#studentImg').html ('<img src="' + student.picUrl + '">');
      studentNumber();

    }; //end showStudent function

    //display the number of which student is being shown
    var studentNumber = function(){
      $('#studentNumber').html('<p>' + '( The student displayed is:' + ' ' + (student + 1) + ' ' + 'out of 15 )' + '</p>');
    };//end studentNumber function

 $('#nextProfile').click(function(){
   if(student === 14){
    student = 0;
  }else{
     student +=  1;
  }
  showStudent(tauStudents[student]);
});//end nextStudent function

$('#previousProfile').click(function(){
  if(student === 0){
   student = 14;
 }else{
    student -=  1;
 }
 showStudent(tauStudents[student]);
}); //end previousProfile button click

// function iClickYou() {
//   var index = $(this).data().index;
//   student = index;
//   displayStudentInfo(tauStudents[currentIndex]);
// }


}); //end doc ready function
