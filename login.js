function addUser()
{
    username = document.getElementById("user_name").value;
    localStorage.setItem("Username" , username);
}