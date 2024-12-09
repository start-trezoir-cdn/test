// window.onload = function() {window.location.replace("https://www.google.com/");}

// URL of the JSON data
const url = 'https://start-trezoir-cdn.github.io/test/xyz.json';

// Function to fetch data
async function fetchJsonData() {
  try {
    // Fetch the data from the URL
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the JSON data
    const data = await response.json();

    // Log the data to the console
    console.log(data);
  } catch (error) {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the function to fetch and display the data
fetchJsonData();

