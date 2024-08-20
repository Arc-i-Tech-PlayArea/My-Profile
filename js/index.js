const contactUs=()=>
{
  var fname=document.getElementById("fname").value;
  var email=document.getElementById("email").value;
  var mobileNumber=document.getElementById("mobileNumber").value;
  var messageTitle=document.getElementById("messageTitle").value;
  var message=document.getElementById("message").value;
  if(fname=="" || email=="" || mobileNumber=="" || messageTitle=="" || message=="")
  {
    alert("Something Went Wrong");
  }
  else
  {
    alert(" Submitted Successfully");
  }
}