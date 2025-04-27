function trigger404Error() {
    // Simulating a 404 error
    try {
      fetch('/invalid-endpoint')
        .then(response => {
          if (!response.ok) {
            throw new Error(`404 Error: ${response.statusText}`);
          }
          return response.json();
        })
        .catch(error => {
          logError(error.message);
        });
    } catch (e) {
      logError(e.message);
    }
  }
  
  function triggerInputError() {
    // Simulating an input parsing error
    try {
      let input = "abc";
      let age = parseInt(input);
      if (isNaN(age)) throw new Error("Input Error: Cannot parse age from 'abc'");
    } catch (e) {
      logError(e.message);
    }
  }
  
  function logError(message) {
    const logList = document.getElementById("logList");
    const item = document.createElement("li");
    item.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logList.appendChild(item);
  }
  
  function clearLogs() {
    document.getElementById("logList").innerHTML = '';
  }
  