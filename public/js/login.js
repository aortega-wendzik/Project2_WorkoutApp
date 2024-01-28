const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#username1').value.trim();
  const password = document.querySelector('#password1').value.trim();
  

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector('#first-name').value.trim();
  const last_name = document.querySelector('#last-name').value.trim();
  const username = document.querySelector('#username').value.trim();
  const phone_number = document.querySelector('#phone-number').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (first_name && last_name && username && phone_number && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, username, phone_number, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};



document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);

  document.getElementById('loginButton');
  var loginForm = document.getElementById('login-form')
  document.getElementById('loginButton').addEventListener('click', function() {
    if (loginForm.style.display == 'none') {
      loginForm.style.display = 'block';
    } else {
      loginForm.style.display = 'none';
    }
  });

    // Get the sign-up link and sign-up container elements var signupLink =
    document.getElementById('signupLink');
    var signupContainer = document.getElementById('signupContainer');
    // Add a click event listener to the sign-up link
    signupLink.addEventListener('click', function() { 
      // Toggle the visibility of the sign-up container 
      if (signupContainer.style.display == 'none') { 
        signupContainer.style.display = 'block'; 
        } else {
    signupContainer.style.display = 'none';
    }
    });
  
