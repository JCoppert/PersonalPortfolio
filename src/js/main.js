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

  this.el.innerHTML = '<span style="background: #888888; font-family: \'Press Start 2P\', cursive; padding: 1vw;">' +this.txt + '<span></span></span>';

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

// Adapted from https://codepen.io/JacobLett/pen/xqpEYE
$(document).ready(() => {
  var $videoSrc;
  $('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $('#full-demo-modal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" );
  })

  // stop playing the youtube video when I close the modal
  $('#full-demo-modal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc);
  })

  $('#full-demo-modal').on('show.bs.modal', function() {
    $('#video').trigger('focus')
  })

});

$('.angular').hover(function () {
  $('#talent-text').text('AngularJS');
});

$('.swift').hover(function () {
  $('#talent-text').text('Swift');
});

$('.c-sharp').hover(function () {
  $('#talent-text').text('C Sharp');
});

$('.typescript').hover(function () {
  $('#talent-text').text('Typescript');
});

$('.html').hover(function () {
  $('#talent-text').text('HTML 5');
});

$('.css').hover(function () {
  $('#talent-text').text('CSS 3');
});

$('.entity-framework').hover(function () {
  $('#talent-text').text('Entity Framework');
});

$('.opengl').hover(function () {
  $('#talent-text').text('OpenGl');
});

$('.cplusplus').hover(function () {
  $('#talent-text').text('C Plus Plus');
});

$('.java').hover(function () {
  $('#talent-text').text('Java');
});

$('.mongodb').hover(function () {
  $('#talent-text').text('MongoDB');
});

$('.tsql').hover(function () {
  $('#talent-text').text('T-SQL');
});
