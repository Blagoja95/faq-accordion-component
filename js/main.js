'use strict'

const faqBox = document.querySelectorAll('.faq-div');

faqBox.forEach((el, i) =>{
    if(i === 0) 
        el.classList.add('active');
})

const removeActive = function(elementArr){
    elementArr.forEach(el => el.classList.remove('active'));
}

const openDiv = function(el) {
    removeActive(faqBox);
    el.classList.add('active');
} 

faqBox.forEach((el, i) =>{
        el.addEventListener('click', function() {
            removeActive(faqBox);
            el.classList.add('active');
        } )
})