
do {
    var UserName = prompt("Enter your name: ");
} while (UserName == null || UserName == "");

if (UserName == null || UserName == "") {
    UserName = "Mr. Nobody";
}

document.getElementById("demo").innerHTML = "Hello " + UserName + ", you are in the first page of the project!";