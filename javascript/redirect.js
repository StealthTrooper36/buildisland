(function() {
  if (window.location.hostname === 'stealthtrooper36.github.io') {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/buildisland')) {
      const newPath = currentPath.replace('/buildisland', '');
      const newUrl = 'https://buildisland.pages.dev' + (newPath || '/');
      const queryAndHash = window.location.search + window.location.hash;
      window.location.replace(newUrl + queryAndHash);
    }
  }
})();