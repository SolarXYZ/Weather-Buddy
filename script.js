window.addEventListener('load', () => {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
  
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = '';
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New+York`;
  
    function fetchWeatherData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          locationElement.textContent = data.location.name;
          temperatureElement.textContent = data.current.temp_c + '°C';
          conditionElement.textContent = data.current.condition.text;
        })
        .catch(error => console.log(error));
    }
  
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchQuery = searchInput.value;
      apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchQuery}`;
      fetchWeatherData(apiUrl);
      searchInput.value = '';
    });
  
    // Fetch weather data for the default location
    fetchWeatherData(apiUrl);
  });
