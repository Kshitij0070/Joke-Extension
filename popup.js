//// Function to fetch a random joke from the JokeAPI
async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any');
    const data = await response.json();
    if (data.type === 'single') {
      return data.joke;
    } else if (data.type === 'twopart') {
      return `${data.setup} ${data.delivery}`;
    }
  }
  
  // Function to display the joke in the popup
  async function displayJoke() {
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = 'Loading...';
  
    try {
      const joke = await fetchJoke();
      jokeElement.textContent = joke;
    } catch (error) {
      jokeElement.textContent = 'Failed to fetch joke.';
      console.error(error);
    }
  }
  
  // Add event listener to the button once the DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('jokeButton').addEventListener('click', displayJoke);
  });
  
  