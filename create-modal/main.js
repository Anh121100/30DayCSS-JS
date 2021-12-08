var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.icon-close');
var btnClose = document.querySelector('.close-modal-btn');

function toggleModal(e){
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click',toggleModal);
iconClose.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal();
    }
});

