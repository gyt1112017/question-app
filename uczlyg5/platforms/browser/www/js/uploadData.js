var client;


function startDataUpload() {
alert ("start data upload");
var question = document.getElementById("question").value;
var answer_1 = document.getElementById("answer_1").value;
var answer_2 = document.getElementById("answer_2").value;
var answer_3 = document.getElementById("answer_3").value;
var answer_4 = document.getElementById("answer_4").value;
var correct_answer = document.getElementById("correct_answer").value;
var latitude = document.getElementById("latitude").value;
var longitude = document.getElementById("longitude").value;
//show a pop up alert
alert(question + " "+ answer_1 + " "+answer_2 + " "+ answer_3 + " "+ answer_4 + " "+ latitude + " "+longitude + " "+ correct_answer);
var postString = "question="+question+"&answer_1="+answer_1+"&answer_2="+answer_2+"&answer_3="+answer_3+"&answer_4="+answer_4+"&correct_answer="+correct_answer; 
postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
processData(postString);}

function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30273/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);

}

// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}