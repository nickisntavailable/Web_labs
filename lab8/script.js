let close = document.getElementById('close');
let modal = document.getElementsByClassName('modal')[0];

function ready() {
    modal.classList.toggle('show');
    console.log('ready');
}

function hide() {
    modal.classList.toggle('show');
}




document.addEventListener("DOMContentLoaded", ready);
close.addEventListener('click', hide);

(function() {
    // 'use strict';
  
    function trackScroll() {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
  
      if (scrolled > 200) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < 200) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();