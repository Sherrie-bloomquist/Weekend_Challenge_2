// Global variables
// ==================
var tauStudents = [];
var i = 0;
var outputText = '';
var searchUrl = 'http://devjana.net/support/tau_students.json';
var timeInterval = 10000;

$(document).ready(function(){

  var studentData = function(){
  $.ajax({
    url: searchUrl,
    dataType: 'JSON',
    success: function( data ){
    console.log('successfully hit tau_students:' , data);
    console.log('data.tau:', data.tau);
    for (var i = 0; i < data.tau.length; i++) {
    tauStudents.push(data.tau[i]);
    showStudents(tauStudents);
      } //end for loop
    }
  }); //end ajax call
}; //end studentData function
studentData();

  //display tauStudents to DOM
  var showStudents = function (results){
    console.log(showStudents);
    for (var i = 0; i < tauStudents.length; i++) {
      outputText =  $('#studentName').html ('<p>' + '<strong>' + 'Name:' +'</strong>' + '  ' + tauStudents[i].first_name + ' ' + tauStudents[i].last_name + '</p>');
      outputText = $('#studentInfo').html ('<p>' + '<strong>' + 'Info:' +'</strong>' + '  ' + tauStudents[i].info + '</p>');
      outputText = $('#studentImg').html ('<img src="' + tauStudents[i].picUrl + '">');
          }

      outputText = $('#studentNumber').html('<p>' + 'The student displayed is:' + ' ' + (i) + ' ' + 'out of 15' + '</p>');

  }; //end showStudents function


 $("#nextProfile").on('click', function(){


 }); //end nextProfile button click
//
// $("#previousProfile").click(function(){
//
//
// }); //end previousProfile button click
//
// $('student_buttons').click(function(){
//
//
// }); //end student_buttons button click







}); //end doc ready function
