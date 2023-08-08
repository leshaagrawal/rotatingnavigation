const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    container.classList.add('show-nav');
})

close.addEventListener('click', () => { 
    document.body.style.overflow = 'visible';
    container.classList.remove('show-nav');
})