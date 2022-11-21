function signup()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem('name1', name);
    localStorage.setItem('email1', email);
    localStorage.setItem('pass1', pass);

    window.location.href = "Login.html";
}
// function validate()
// {
//     var pass = document.getElementById("pass").value;
//     if(pass.length == 0 || pass.length < 6)
//         pass.style.border = "1px solid red";
//         pass.focus();
//         return false;
// }