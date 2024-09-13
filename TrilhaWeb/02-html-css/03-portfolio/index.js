let light = document.getElementById('light');
let body = document.body;

light.addEventListener('click', () => {
    body.classList.toggle('lightmode');
});

const modal = document.querySelector('dialog')
function openModal(){
    modal.showModal();
}
function closeModal(){
    modal.close();
}