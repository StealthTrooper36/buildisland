  function loadHTML(selector, file) {
    const el = document.querySelector(selector);
    if (!el) {
      console.error("Element not found for selector:", selector);
      return;
    }
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load ${file}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(error => console.error("Error loading " + file + ": " + error));
  }
  
  // When the DOM is fully loaded, load header and footer if the placeholders exist
  document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#header-placeholder", "https://buildisland.pages.dev/other/aetheria/topbar.html");
    loadHTML("#footer-placeholder", "https://buildisland.pages.dev/other/aetheria/footer.html");
  });