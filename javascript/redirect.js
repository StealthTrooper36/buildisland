(function() {
    if (window.location.hostname === 'stealthtrooper36.github.io' && 
        window.location.pathname.startsWith('/buildisland')) {
      const currentPath = window.location.pathname.replace('/buildisland', '');
      const newUrl = 'https://buildisland.pages.dev' + (currentPath || '/');
      const queryAndHash = window.location.search + window.location.hash;
      window.location.replace(newUrl + queryAndHash);
    }
  })();