// Get the form element
var bookingForm = document.getElementById('booking-form');

// Event listener for form submission
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the input values
  var usernameInput = document.getElementById('username').value;
  var emailInput = document.getElementById('email').value;

  // Create an object to store the user data
  var userData = {
    username: usernameInput,
    email: emailInput
  };

  // Convert the data to JSON format
  var userDataJSON = JSON.stringify(userData);

  // Store the data in local storage
  localStorage.setItem('bookingData', userDataJSON);

  // Reset the form
  bookingForm.reset();

  // Provide feedback to the user
  alert('Booking information saved successfully!');
});
