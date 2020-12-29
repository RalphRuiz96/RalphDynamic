do{
    UserName = prompt("Enter your name: ");
} while (UserName != "" || UserName != null);

document.getElementById("demo").innerHTML = "Hello " + UserName + ", you are in the first page of the project!";