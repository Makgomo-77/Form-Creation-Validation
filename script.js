document.addEventListener('DOMContentLoaded', function() {
    const form =
        document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const feedbackDiv = document.getElementById('form-feedback');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true; // Flag to track form validity
        feedback.style.display = 'none'; // Hide feedback initially

        // Clear previous error messages
        username.classList.remove('error');
        email.classList.remove('error');
        password.classList.remove('error');

        let messages =[]
        if (username.value.trim().length<3){
            mesages.push("Username must be at least 3 characters long.");
        }

        // Validate email
        if (!email.value.includes('@')|| !email.value.includes('.')) {
            messages.push("please enter a valid email address.");
        }

        // Validate password
        if (password.value.length < 8) {
            messages.push("password must be at least 8 characters long.");
            isValid = false;
        }

        if (messages.length>0) {
            feedback.style.display = 'block';
            feedbackDiv.innerHTML = messsages.join('<br>');
        }else{
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#28a745'; // Green background for success
        } else {
            feedbackDiv.textContent = 'Please correct the errors in the form.';
            feedbackDiv.style.display = 'block';
            feedbackDiv.style.backgroundColor = '#dc3545'; // Red background for error
        }
    });
});


