
do {
    var UserName = prompt("Enter your name: ");
} while (UserName != null || UserName != "");

document.getElementById("demo").innerHTML = "Hello " + UserName + ", you are in the first page of the project!";