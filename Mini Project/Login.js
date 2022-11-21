function Login()
{
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;

    var name1 = localStorage.getItem("name1");
    var pass1 = localStorage.getItem("pass1");

    if(name == name1 && pass == pass1)
        window.location.href = "First_Page.html";
    else
    {
        alert("Invalid password or username!")
        window.location.href = "New_Welcome.html";
    }
}