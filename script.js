const btnOpenModal = document.querySelector(".modalButton")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const close = document.querySelector(".close")



btnOpenModal.addEventListener("click", function(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
});



close.addEventListener("click", closef);

overlay.addEventListener("click", closef);

function closef(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}





