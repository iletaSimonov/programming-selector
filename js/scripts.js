function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
};

window.onload = function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=user-input]:checked");
  const form = document.querySelector('form');
  form.addEventListener('submit', function() {
     event.preventDefault();
    let pet = document.querySelector('input[name="pet"]:checked').value;
    let python = document.getElementById('python');
    let c = document.getElementById('c#');
    let ruby = document.getElementById('ruby');
    
    if (pet === 'cat') {
      document.getElementById("python").removeAttribute('class');
    } else if (pet === 'dog') {
      document.getElementById("c").removeAttribute('class');
    } else (pet === 'hamster'); 
      document.getElementById("ruby").removeAttribute('class');
  };

  window.addEventListener("load", function {
    document.querySelector("form#survey").addEventListener("submit", handleForm);
  });

  $('submit').click(function() {
    $('form').hide();
    return false;
});

)};


