document.getElementById("case-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Basic email validation
    const email = document.getElementById("email").value;
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Add your other form validation logic here
    // Example: Check if required fields are filled, validate phone number, etc.

    // If validation passes, you can submit the form or show a success message
    // Otherwise, display error messages

    // Assuming the form is successfully validated:
    alert("Form submitted successfully!");
});

// Function to validate email address
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
