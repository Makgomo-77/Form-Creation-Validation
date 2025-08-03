document.addEventListener('DOMContentLoaded', function() {
    const form =
        document.getElementById('myform');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const feedback = document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true; // Flag to track form validity
        feedback.style.display = 'none'; // Hide feedback initially

        // Clear previous error messages
        username.classList.remove('error');
        email.classList.remove('error');
        password.classList.remove('error');

        // Validate username
        if (username.value.trim() === ''|| username.value.length < 3) {
            username.classList.add('error');
            isValid = false;
        }

        // Validate email
        if (email.value.trim() === '' || !validateEmail(email.value)) {
            email.classList.add('error');
            isValid = false;
        }

        // Validate password
        if (password.value.trim() === '' || password.value.length < 8) {
            password.classList.add('error');
            isValid = false;
        }

        if (isValid) {
            feedback.textContent = 'Form submitted successfully!';
            feedback.style.display = 'block';
            feedback.style.backgroundColor = '#28a745'; // Green background for success
        } else {
            feedback.textContent = 'Please correct the errors in the form.';
            feedback.style.display = 'block';
            feedback.style.backgroundColor = '#dc3545'; // Red background for error
        }
    });
});
