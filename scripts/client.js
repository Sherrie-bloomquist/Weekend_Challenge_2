// Global variables
// ==================
var tauStudents = [];
var timeInterval = 10000;

$(document).ready(function(){
  var searchUrl = 'http://devjana.net/support/tau_students.json';

  $.ajax({
    url: searchUrl,
    dataType: 'JSON',
    success: function( data ){
    console.log('successfully hit tau_students:' , data);
    for (var i = 0; i < data.length; i++) {
    tauStudents.push(data);
    }
  }
}); //end ajax call

$("#nextProfile").click(function(){


}); //end nextProfile button click

$("#previousProfile").click(function(){


}); //end previousProfile button click

$('student_buttons').click(function(){


}); //end student_buttons button click


//display tauStudents to DOM
var showStudents = function (results){
  console.log(showStudents);
  var outputText = '';
  for (var i = 0; i < tauStudents.length; i++) {
    outputText =  '<p>' + 'Name:' + tauStudents[i].first_name + '' + tauStudents[i].last_name + '</p>';
    outputText = '<p>' + 'Info:' + tauStudents[i].info + '</p>';
    outputText = '<img src="' + tauStudents[i].picUrl + '">';

  }
$( '#studentProfile' ).html(outputText);


}; //end showStudents function

}); //end doc ready function
