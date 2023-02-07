
let buttons = document.querySelector('.btn')

let icons = document.querySelector('.icon')

let modals = document.querySelector('.modal-section')




buttons.addEventListener('click' , function(){
    modals.classList.add("modal-show")
})


icons.addEventListener('click' , function(){

    modals.classList.remove("modal-show")



})
