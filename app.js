/* I'm using querySelector instead of like id or document.getclass because it's just I can never always switch it, if I have a class in my html, I can switch it easily just by puting a dot instead of a thing.
So querySelector and what are we targeting. We're targeting the mobile menu. So it's going to be #mobile-menu. Now where the heck is this. Let me command be back 
Nombre: menu (pero puede ser cualquier otro) */
const menu = document.querySelector('#mobile-menu');

/* This one is actually a class. Por eso .navbar__menu */
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
/* Write a function that add a class that we have either active or is active which is the ones we have ir our css 
En css: .navbar__menu.active
I'm going to essentially create an arrow function so in order to do that. You simply just say const and the name of your function (ej: mobileMenu). And then
obviosly it's an arrow function so we said that you go to parentheses with the arrow and the the curly braces
And then now so I want to write my actual code. So we have the menu which is targeting the actual menu section so 
what I'm going to do is say menu (and this is javascript:) dot classList and then I want to toggle, so essentially it's like: true or false, true or false. Think of it as like:
active, no active. And for this one I want to toggle the class that we put which called is dash active
In menuLinks I want to set that to the class active. Whenever I click the little icon, I want to toggle these two classes here.
*/
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

/* And then how do we even toggle this, well you have to actually add an event listener. I'm going to say menu so now
we're targeting the actual div of the Hamburger menu section, the icon. I'm gonna say dot add... 
Parentheses: it takes in some sort of action, so this one's gonna be a click. Comma, and then I'm just going to pass in the name of the 
function that we created up here.*/
/* (There's additional way that people do like function() and write the logic inside) 
menu.addEventListener('click', function( ))
Pero nosotros vamos a poner mobileMenu */
menu.addEventListener('click', mobileMenu);
/* Nothing happened. Because I have to import the script tag on the html at the bottom */