function run()
{
  var passwordOne = document.getElementById("passwordOne").value;
  var passwordTwo = document.getElementById("passwordTwo").value;
  if (!(passwordOne === passwordTwo))//if not equal
  {
    window.alert("ERROR: Passwords don't match");
  }
  else if (passwordOne.length < 8)
  {
    window.alert("ERROR: Password needs to be at least 8 characters long");
  }
  else
  {
    window.alert("Perfect!");
  }
}