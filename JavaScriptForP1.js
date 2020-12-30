
var UserName = null;

window.onload = function () {
    UserName = prompt("Please enter your name");

    if (UserName == null || UserName == "") { 
        UserName = "Mr. Nobody";
    }
    document.getElementById("demo").innerHTML = "Hello " + UserName + ", you are in the first page of the project!";
}
