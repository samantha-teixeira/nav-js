let burger = document.querySelector('.burger');
let menu_deux = document.querySelector('.menu_deux');
let open_menu = document.querySelector('.menu_two');
let close = document.querySelector(".close");

burger.addEventListener('click', function() {
    if (menu_deux.style.display = 'none') {
        open_menu.style.display = 'block';
        menu_deux.style.display = 'block';
        burger.style.display = "none";
        close.style.display = "block";

        console.log('test');
    } else {
        return false;
    }
});

close.addEventListener('click', function() {
    open_menu.style.display = 'none';
    burger.style.display = "block";
    close.style.display = "none";

    if (menu_deux.style.display = 'block') {
        menu_deux.style.display = 'none';
        console.log('test')

    } else {
        return false;
    }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        open_menu.style.display = 'none';
        burger.style.display = "none";
        close.style.display = "none";
    } else {
        return false;
    }
  }
  
  var x = window.matchMedia("(min-width: 701px)")
  myFunction(x) // Call listener function at run time

  function myFunction(x) {
    if (x.matches) { // If media query matches
        open_menu.style.display = 'block';
        burger.style.display = "block";
        close.style.display = "block";
    } else {
        return false;
    }
  }
  
  var x1 = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  

