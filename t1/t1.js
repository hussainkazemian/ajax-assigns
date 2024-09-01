'use strict';

//  fetch user data from the API and log it to the console
async function fetchUserData() {
  try {
    // Make the GET request using fetch
    const response = await fetch('https://reqres.in/api/users/1');

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Log the response data to the console
    console.log(data);
  } catch (error) {
    // If an error occurs, log it to the console
    console.error('Error fetching user data:', error);
  }
}

// Call the function to fetch and log user data when the script loads
fetchUserData();

