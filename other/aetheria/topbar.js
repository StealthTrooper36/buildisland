function loadHTML(selector, file) {
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  // When the DOM is ready, load header and footer.
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header-placeholder", "topbar.html");
    loadHTML("footer-placeholder", "footer.html");
  });
  