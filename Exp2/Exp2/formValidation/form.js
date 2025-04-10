document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true; // Track form validity

    // Get input elements
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let phone = document.getElementById("phone");

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let phoneError = document.getElementById("phoneError");

    // Regular Expressions for validation
    let namePattern = /^[A-Za-z\s]{3,}$/; // At least 3 letters
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Valid email
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 8+ chars, 1 letter, 1 number
    let phonePattern = /^[0-9]{10}$/; // 10-digit phone number

    // Function to validate a field
    function validateField(input, pattern, errorElement, errorMessage) {
        if (!pattern.test(input.value.trim())) {
            errorElement.innerText = errorMessage;
            input.classList.add("error-border");
            isValid = false;
        } else {
            errorElement.innerText = "";
            input.classList.remove("error-border");
        }
    }

    // Validate fields using the function
    validateField(name, namePattern, nameError, "Name must be at least 3 letters");
    validateField(email, emailPattern, emailError, "Enter a valid email");
    validateField(password, passwordPattern, passwordError, "Password must be 8+ chars with 1 letter & 1 number");
    validateField(phone, phonePattern, phoneError, "Enter a valid 10-digit number");

    // If all fields are valid, show success message
    if (isValid) {
        alert("Form submitted successfully!");
    }
});
