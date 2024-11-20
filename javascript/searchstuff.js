let searchIndex = [];
fetch('https://stealthtrooper36.github.io/buildisland/search.json')
    .then((response) => response.json())
    .then((data) => {
        searchIndex = data; 
    })
    .catch((error) => console.error('Error loading search index:', error));

    function toggleSearch() {
        const searchInput = document.getElementById("search");
        const searchResults = document.getElementById("search-results");
    
        if (searchInput.style.display === "none") {
            searchInput.style.display = "block";
            searchResults.style.display = "block";
        } else {
            searchInput.style.display = "none";
            searchResults.style.display = "none";
        }
    }
    
    // Ensure it's globally accessible
    window.toggleSearch = toggleSearch;
    

function searchFunction() {
    const input = document.getElementById("search").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    const matchingResults = searchIndex.filter((item) =>
        item.title.toLowerCase().includes(input)
    );

    if (matchingResults.length > 0) {
        resultsContainer.style.display = "block";
        matchingResults.forEach((result) => {
            const link = document.createElement("a");
            link.href = result.url;
            link.textContent = result.title;
            link.style.display = "block";
            link.style.color = "#09f";
            link.style.marginBottom = "5px";
            link.style.textDecoration = "none";
            link.onmouseover = () => (link.style.textDecoration = "underline");
            link.onmouseout = () => (link.style.textDecoration = "none");
            resultsContainer.appendChild(link);
        });
    } else {
        resultsContainer.style.display = "none";
    }
}
