// Adapted from https://codepen.io/hi-im-si/pen/DHoup?editors=0010
const typewriterPhrases = ['I am a full stack developer', 'I am an innovator',
  'I like to have FUN :)', 'I am passionate about design', 'I enjoy developing mobile and web applications'];
const typewriterDelay = 1000;

let TypewriterElement = function(el) {
  this.phrases = typewriterPhrases;
  this.el = el;
  this.loopNum = 0;
  this.delay = typewriterDelay;
  this.txt = '';
  this.animate();
  this.isDeleting = false;
};

TypewriterElement.prototype.animate = function() {
  let phraseIndex = this.loopNum % this.phrases.length;
  let fullTxt = this.phrases[phraseIndex];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt + '<span></span>';

  // Set timeout will execute at the global context if 'this' is not bound
  let boundAnimate = this.animate.bind(this);
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.delay;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(boundAnimate, delta);
};

window.onload = function() {
  let element = document.getElementsByClassName('typewriter')[0];
  let reverse = document.getElementById('reverse');
  let forwards = document.getElementById('forwards');

  reverse.src = "img/walk-in-reverse.gif";
  forwards.src = "img/walk-in-regular.gif";
  new TypewriterElement(element);
};
