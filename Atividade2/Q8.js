async function processAPICalls(apiUrls) {
    for (const url of apiUrls) {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    }
  }
  