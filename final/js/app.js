// Declaring variables 
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrationLink = document.querySelector('.register-link');

registrationLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});