var moon = document.getElementById('moon');
var sun = document.getElementById('sun');

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    if (sun.style.display === 'block') {
      sun.style.display = 'none';
      moon.style.display = 'block';
      document.body.classList.add('dark-mode');
        
    } else {
      sun.style.display = 'block';
      moon.style.display = 'none';
      document.body.classList.remove('dark-mode');  
      
    }
});

