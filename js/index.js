const contactUs = (event) => {
  event.preventDefault(); // Prevents the form from submitting

  var fname = document.getElementById("fname").value;
  var Email = document.getElementById("Email").value;
  var MobileNumber = document.getElementById("MobileNumber").value;
  var messageTitle = document.getElementById("messageTitle").value;
  var message = document.getElementById("message").value;

  let x = 0, y = 0, z = 0;

  // Validate Mobile Number
  if (/^\d{10}$/.test(MobileNumber)) {
    x = 1;
  } else {
    alert("Invalid number. Please enter a valid 10-digit number.");
  }

  // Validate Email
  var atposition = Email.indexOf("@");
  var dotposition = Email.lastIndexOf(".");
  if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= Email.length) {
    alert("Please enter a valid e-mail address.");
  } else {
    z = 1;
  }

  // Validate Required Fields
  if (messageTitle === "" || message === "" || fname === "") {
    alert("Please enter all required fields.");
  } else {
    y = 1;
  }

  // Check all validations
  if (z === 1 && x === 1 && y === 1) {
    alert("Data saved successfully!");
  }
};

// Attach event listener to the form submit event
document.querySelector('form').addEventListener('submit', contactUs);
