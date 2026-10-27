function validateForm() {
    // Get form values
    let fullname = document.getElementById("fullname").value.trim();
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    // Check fullname
    if (fullname === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Check age
    if (age === "" || age < 1 || age > 120) {
        alert("Please enter a valid age.");
        return false;
    }

    // Check email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check phone number
    let phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Check password
    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    alert("Form validated successfully!");
    return true;
}