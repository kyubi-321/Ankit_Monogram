/* User clicks on the button then toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of the dropdown anywhere on the screen.
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

// Client side validation code block 
  const form = document.getElementById('form')
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  
  form.addEventListener("submit", (e) => {
      if(email.validity.valueMissing){
          e.preventDefault();
          errorMessage.classList.remove('none');
          errorMessage.classList.add('show');
      }else if (email.validity.typeMismatch) {
          e.preventDefault();
          errorMessage.classList.remove('none');
          errorMessage.classList.add('show');
      } else {
          errorMessage.classList.remove('show');
          errorMessage.classList.add('none');
          email.value = '';
      }
  })

const hamburger = document.querySelector('.fa-bars');
const desktopNav = document.querySelector('.desktop__nav');

hamburger.addEventListener('click', ()=> {
  desktopNav.classList.toggle('desktop-nav-open')
})

const shoppingBags = document.querySelectorAll('.fa-shopping-bag');
const sidePanel = document.querySelector('.side-panel');
const body = document.querySelector('body');


shoppingBags.forEach(bag => bag.addEventListener('click', ()=> {
  sidePanel.classList.toggle('show');
  body.classList.toggle('stop-scrolling');
}))

const leftArrow = document.querySelector('.fa-chevron-left');

leftArrow.addEventListener('click', ()=> {
  sidePanel.classList.toggle('show');
  body.classList.toggle('stop-scrolling');
})

const understandBtn = document.querySelector('.understand');
const disclaimer = document.querySelector('.disclaimer');

understandBtn.addEventListener('click', ()=> {
  disclaimer.classList.toggle('none');
})

const bannerClose = document.querySelector('.fa-times');
const banner = document.querySelector('.banner');


bannerClose.addEventListener('click', ()=> {
  banner.classList.toggle('none');
})

const modalClose = document.querySelector('.fa-times-circle');
const modal = document.querySelector('.modal');

modalClose.addEventListener('click', ()=> {
  modal.classList.remove('show-popup');
})

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(()=> {
    modal.classList.add('show-popup')
  }, 2000)

})