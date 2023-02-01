window.onload = function(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    
    let pet = document.querySelector('input[name="pet"]:checked').value;
    let python = document.getElementById('python');
    let c = document.getElementById('c#');
    let ruby = document.getElementById('ruby');
    
    if (pet === 'cat') {
      python.removeAttribute('class');
    } else if (pet === 'dog') {
      c.removeAttribute('class');
    } else (pet === 'hamster'); 
      ruby.removeAttribute('class');
  }
)};
