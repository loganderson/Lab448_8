
var x = 0;
function hideAll()
{
  document.getElementById("bob").style.display = "none";
  document.getElementById("skate1").style.display = "none";
  document.getElementById("skate2").style.display = "none";
  document.getElementById("space").style.display = "none";
  document.getElementById("bball").style.display = "none";
}

function displayImage()
{
  if(x == 0)
  {
    document.getElementById("bob").style.display = "block";
  }
  else if (x == 1)
  {
    document.getElementById("space").style.display = "block";
  }
  else if (x == 2)
  {
    document.getElementById("skate1").style.display = "block";
  }
  else if (x == 3)
  {
    document.getElementById("skate2").style.display = "block";
  }
  else
  {
    document.getElementById("bball").style.display = "block";
  }
}

function previous()
{
  hideAll();
  //go back
  if (x == 0)
  {
    x = 4;
  }
  else
  {
    x = x-1;
  }
  displayImage();
}

function next()
{
  hideAll();
  //go forward
  if (x == 4)
  {
    x = 0;
  }
  else
  {
    x = x+1;
  }
  displayImage();
}

