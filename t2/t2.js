'use strict';

//  send user data via POST request and log the response to the console
async function createUser() {
  try {
    // Define the user data to send
    const userData = {
      name: 'Hussain',
      job: 'Developer'
    };

    // Make the POST request using fetch
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST', // Specify POST request
      headers: {
        'Content-Type': 'application/json' // Set the request header to indicate JSON data
      },
      body: JSON.stringify(userData) // Send the user data as a JSON string
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the response data to the console
    console.log('Response from POST request:', data);
  } catch (error) {
    // If an error occurs, log it to the console
    console.error('Error creating user:', error);
  }
}

createUser();
