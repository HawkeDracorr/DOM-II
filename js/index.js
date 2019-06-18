// Your code goes here
// Wolves of a feather, awoo toghether


// Event 1: click
let nav = document.querySelectorAll('.nav-link');
nav[0].addEventListener('click', clickyNav);
nav[1].addEventListener('click', clickyNav2);
nav[2].addEventListener('click', clickyNav3);
nav[3].addEventListener('click', clickyNav4);

function clickyNav() {
  alert ('This Link goes nowhere, kid.')
};
function clickyNav2() {
  alert ('Still goes nowhere...')
};
function clickyNav3() {
  alert ('You thought wrong, dude.')
};
function clickyNav4() {
  alert ('Denied.')
};

// Event 2: Mouseover & Event 3: Mouseout
let bodyContent = document.querySelectorAll('.content-section');
bodyContent[0].addEventListener('mouseover', highlight)
bodyContent[0].addEventListener('mouseout', revert)

bodyContent[1].addEventListener('mouseover', highlight)
bodyContent[1].addEventListener('mouseout', revert)

function highlight() {
  this.style.background = "cadetblue"
  this.style.borderRadius = '5px'
  this.style.padding = '15px'
  // alert ('test')
}
function revert() {
  this.style.background = "transparent"
  this.style.padding = '0'
}

// Event 4: Double clicked
let headerImg = document.querySelector('#header-img');
headerImg.addEventListener('dblclick', do_a_flip)

let isFlipped = false;

function do_a_flip() {

  if (isFlipped === false) {
    this.style.transform = 'rotate(180deg)'
    isFlipped = true;
  } else {
    this.style.transform = 'rotate(0deg)'
    isFlipped = false;
  }
}
