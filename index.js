const iconButton = document.querySelector("#iconButton");
const closeButton = document.querySelector("#closeButton");
const links = document.querySelector("#links");


iconButton.addEventListener("click", function () {
    links.style.display = "flex";
    closeButton.style.display = "block";
    iconButton.style.display = "none";
})

closeButton.addEventListener("click", function () {
    links.style.display = "none";
    iconButton.style.display = "block";
    closeButton.style.display = "none";
})

