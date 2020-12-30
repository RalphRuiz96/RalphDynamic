
var UserName = null;

window.onload = function () {
    do{
        UserName = prompt("Please enter your name");
        if (UserName != null || UserName != "") {
            break;
        } else {
            continue;
        }
    } while (UserName == null || UserName == "");
    
    document.getElementById("demo").innerHTML = "Hello " + UserName + ", you are in the first page of the project!";
}
