const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

console.log(cartButton);

cartButton.addEventListener('click',(event)=>{
   modal.classList.add('is-open');
});
closeButton.addEventListener('click',()=>{
   modal.classList.remove('is-open');
});


new WOW().init();