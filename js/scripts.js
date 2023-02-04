function hideResults() {
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  document.querySelector("form#survey").addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelector("form#survey").setAttribute("style", "display:none;");

    hideResults();

    let pet = document.querySelector('input[name="pet"]:checked').value;
    if (pet === 'cat') {
      document.getElementById("python").removeAttribute('class');
    } else if (pet === 'dog') {
      document.getElementById("c#").removeAttribute('class');
    } else if (pet === 'hamster') {
      document.getElementById("ruby").removeAttribute('class');
    }
  });
});
