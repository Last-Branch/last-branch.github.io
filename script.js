(function () {
    var STORAGE_KEY = 'sozia-theme';
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    var label = document.getElementById('theme-label');
  
    function getStored() { return localStorage.getItem(STORAGE_KEY); }
    function setStored(value) { try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {} }
  
    function applyTheme(theme) {
      if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if (label) label.textContent = 'Light';
      } else {
        root.removeAttribute('data-theme');
        if (label) label.textContent = 'Dark';
      }
    }
  
    function toggle() {
      var isDark = root.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      applyTheme(next);
      setStored(next);
    }
  
    btn.addEventListener('click', toggle);
  
    var stored = getStored();
    if (stored === 'dark' || stored === 'light') {
      applyTheme(stored);
    } else {
      applyTheme('light');
    }
  })();