let popUp = document.querySelector(".pop-menu");
let button = document.getElementById("drop-image");
let innerButtons = document.querySelectorAll(".close");

button.onclick = function() {
    popUp.classList.toggle("pop-menu-toggle");
}

innerButtons.forEach(item => {
    item.addEventListener("click", event => {
        popUp.classList.toggle("pop-menu-toggle");
    })
})