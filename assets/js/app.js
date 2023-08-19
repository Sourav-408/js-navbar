let label = document.querySelector( "#label" )
let navbox = document.querySelector( ".nav-box" )

label.addEventListener( "click", function ()
{
    navbox.classList.toggle( "left-0" )
} )