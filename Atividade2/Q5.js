async function fetchDataFromAPI() {
    const response = await fetch('https://api.example.com/data');
  
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('API request failed');
    }
  }
  