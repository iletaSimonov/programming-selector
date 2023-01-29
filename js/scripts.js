function hideResults() {
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
};

const pet = document.getElementById("pet");
const outdoor = document.getElementById("outdoor");
const food = document.getElementById("food");
const travel = document.getElementById("travel");
const superPower = document.getElementById("super-power");

const form = document.querySelector("form");

window.onload = function() {

  form.onsubmit = function(event) {
    event.preventDefault();
    
    let c = document.querySelector("info#c#").value;
    let ruby = document.getElementById("info#ruby").value;
    let python = document.getElementById("info#python").value;
    let swift = document.getElementById("info#swift").value;
    const cat = document.getElementById("cat").value;
    const dog = document.getElementById("dog").value;
    const hamster = document.getElementById("hamster").value;
    const guineaPig = document.getElementById("guinea-pig").value;
    const goldFish = document.getElementById("gold-fish").value;
    const error = document.getElementById("error-message").value;

    if (pet = cat) {
      python.removeAttribute("class");
    } else if (pet = dog) {
      c.removeAttribute("class");
    } else if (pet = hamster) {
      swift.removeAttribute("class");
    } else if (pet = guineaPig) {
      ruby.removeAttribute("class");
    } else (pet = goldFish) 
      error.removeAttribute("class");
    

    // if (outdoor = snowboard) {
    //   python.removeAttribute("class");
    // } else if (outdoor = hiking) {
    //   c.removeAttribute("class") 
    // } else if (outdoor = surfing) {
    //   swift.removeAttribute("class");
    // } else if (outdoor = golfing) {
    //   ruby.removeAttribute("class");
    // } else (outdoor = volleyball) 
    //   error.removeAttribute("class");
    

    // if (food = mexican) {
    //   python.removeAttribute("class");
    // } else if (food = italian) {
    //   c.removeAttribute("class") 
    // } else if (food = chinese) {
    //   swift.removeAttribute("class");
    // } else if (food = thai) {
    //   ruby.removeAttribute("class");
    // } else (food = indian) 
    //   error.removeAttribute("class");
    

    // if (travel = japan) {
    //   python.removeAttribute("class");
    // } else if (travel = greece) {
    //   c.removeAttribute("class") 
    // } else if (travel = hawaii) {
    //   swift.removeAttribute("class");
    // } else if (travel = ireland) {
    //   ruby.removeAttribute("class");
    // } else (travel = newZealand) 
    //   error.removeAttribute("class");
    

    // if (superPower = mindControl) {
    //   python.removeAttribute("class");
    // } else if (superPower = flying) {
    //   c.removeAttribute("class") 
    // } else if (superPower = invisibility) {
    //   swift.removeAttribute("class");
    // } else if (superPower = telepathy) {
    //   ruby.removeAttribute("class");
    // } else (superPower = telekinesis) 
    //   error.removeAttribute("class");
    
  };
};