const menuBtn = document.querySelector('.menu__button');
const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav__link');


menuBtn.addEventListener('click', function(){
    document.body.classList.toggle('change');
})

menuBtn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLink.forEach(navLink => {
    navLink.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
        document.body.classList.remove('change');
    })
})

//Scrolling up button
let mybutton = document.getElementById("scroolBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

      let clip = document.querySelectorAll(".vid");


      clip.forEach(clip => {
              /* Adding the event listeners on the video to play/pause the video. */
      clip.addEventListener("mouseover", function (e) {
        clip.play();
     })

     /* Applying the mouse out event to pause the video */
     clip.addEventListener("mouseout", function (e) {
        clip.pause();
     })
      }) 

