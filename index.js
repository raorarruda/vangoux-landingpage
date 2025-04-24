document.addEventListener("DOMContentLoaded", function(){

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    menuToggle.addEventListener("click", function(){
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
});

const buttons = document.querySelectorAll(".button, .button-white");

buttons.forEach(button => {
    button.addEventListener("click", function(){
        alert("Button clicked!")
        console.log("A button was clicked!")
    });
});

window.onload = function() {
    document.body.classList.remove("init");
    console.log("Tudo carregado!");
  };
  