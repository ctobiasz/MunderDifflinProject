// trying to use js to make an image go left to right

var flying = document.getElementById('flyingboom');
var flyP = document.querySelector('p');


function left2Right() {

  flying.classList.add('paper-animation');
}

  function leftRightStop() {
  flying.classList.remove('paper-animation');
}

flying.addEventListener('click', left2Right);

// Change this to ('event') listener
// flying.addEventListener('click', leftRightStop);



// function for newletters to show.
function myFunction() {
    alert("THANK YOU FOR SIGNING UP!");
}
