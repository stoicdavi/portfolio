'use strict'
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var message = document.forms["myForm"]["message"].value;

    // Regular expression to check if the email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if fields are empty
    if (name === "" || email === "" || lname === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }

    // Check if name and last name contain only letters
    var nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name) || !nameRegex.test(lname)) {
        alert("Name and Last Name should only contain letters");
        return false;
    }

    // Check if the email is valid
    if (!emailRegex.test(email)) {
        alert("Invalid email address");
        return false;
    } else if (email.length > 50) {
        alert("Email address is too long");
        return false;
    }

    // Check if name and last name are not too long (adjust the length as needed)
    if (name.length > 50 || lname.length > 50) {
        alert("Name or Last Name is too long");
        return false;
    }

    // If all checks pass, the form can be submitted
    alert("Form submitted successfully, thank you! We will get back to you soon");
}
