var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("Email").value;
var password = document.getElementById("Password").value;
if ( username == "" && password == "") {
alert ("Login successful");
window.location.replace = "#"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("Email").disabled = true;
document.getElementById("Password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}