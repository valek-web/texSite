const close_btn = document.querySelector('.close')
const open_btn = document.querySelector('.open')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const bgFor_aM = document.querySelector('.bgFor_aM')

open_btn.addEventListener('click', () => {
    menu.classList.add('menu_isActive')
    body.style.overflow = "hidden"
    bgFor_aM.classList.add('bgFor_aM_active') 
})

close_btn.addEventListener('click', () => {
    menu.classList.toggle('menu_isActive')
    body.style.overflow = "auto"
    bgFor_aM.classList.toggle('bgFor_aM_active') 
})