'use strict';

// Function to make a GET request and handle errors
async function handleGetRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) {
      throw new Error(`GET request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('GET request successful:', data);
  } catch (error) {
    console.error('Error during GET request:', error.message);
  }
}

// Function to make a POST request and handle errors
async function handlePostRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'John Doe', job: 'Developer' })
    });
    if (!response.ok) {
      throw new Error(`POST request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('POST request successful:', data);
  } catch (error) {
    console.error('Error during POST request:', error.message);
  }
}

// Function to make a PUT request and handle errors
async function handlePutRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: 'John Doe', job: 'Senior Developer' })
    });
    if (!response.ok) {
      throw new Error(`PUT request failed with status: ${response.status}`);
    }
    const data = await response.json();
    console.log('PUT request successful:', data);
  } catch (error) {
    console.error('Error during PUT request:', error.message);
  }
}

// Function to make a DELETE request and handle errors
async function handleDeleteRequest() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error(`DELETE request failed with status: ${response.status}`);
    }
    console.log('DELETE request successful');
  } catch (error) {
    console.error('Error during DELETE request:', error.message);
  }
}

// Call the functions to make the requests and handle errors
handleGetRequest();
handlePostRequest();
handlePutRequest();
handleDeleteRequest();
