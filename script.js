
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission handler
    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation variables
        let isValid = true;
        const messages = [];

        // Validate username (minimum 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        }

        // Validate email (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        // Validate password (minimum 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        }

        // Display feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            // Here you could add code to actually submit the form if validation passes
            // form.submit();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    });
});