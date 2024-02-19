function validate() {
    // Get input elements
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const userName = document.getElementById('userName');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate first name (required field)
    if (firstName.value.trim() === '') {
      alert('Please enter your first name');
      return false;
    }
  
    // Validate last name (required field)
    if (lastName.value.trim() === '') {
      alert('Please enter your last name');
      return false;
    }
  
    // Validate email (required field and proper format)
    if (email.value.trim() === '') {
      alert('Please enter your email');
      return false;
    } else if (!emailRegex.test(email.value)) {
      alert('Please enter a valid email address');
      return false;
    }
  
    // Validate username (required field)
    if (userName.value.trim() === '') {
      alert('Please enter your username');
      return false;
    }
  
    // Validate password (required field and minimum length)
    if (password.value === '') {
      alert('Please enter your password');
      return false;
    } else if (password.value.length < 8) {
      alert('Password should have at least 8 characters');
      return false;
    }
  
    // Validate confirm password (required field and match with password)
    if (confirmPassword.value === '') {
      alert('Please confirm your password');
      return false;
    } else if (confirmPassword.value !== password.value) {
      alert('Passwords do not match');
      return false;
    }
  
    // All validations passed
    return true;
}
  
const form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validate()) {
      // Form submission logic here
    alert('Form submitted successfully!');
      // You can submit the form using form.submit() or perform any other actions
  }
});