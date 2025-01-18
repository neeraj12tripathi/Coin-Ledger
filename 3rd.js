function validateForm() {
    const emailInput = document.getElementById('Input_Email');
    const passwordInput = document.getElementById('Input_Password');
    const errorEmail = document.getElementById('error-Email');
    const errorPassword = document.getElementById('error-Password');
    
    let formValid = true;

    // Validate email
    if (!emailInput.value || !emailInput.checkValidity()) {
        errorEmail.style.display = 'inline';  // Show error message if email is invalid
        formValid = false;
    } else {
        errorEmail.style.display = 'none';  // Hide error message if email is valid
    }

    // Validate password
    if (!passwordInput.value) {
        errorPassword.style.display = 'inline';  // Show error message if password is empty
        formValid = false;
    } else {
        errorPassword.style.display = 'none';  // Hide error message if password is entered
    }

    // If form is valid, you can submit the form or proceed with further logic
    if (formValid) {
        // Proceed with form submission or API call here (e.g., form.submit() or AJAX request)
        window.location.assign("4th.html")
    }
}