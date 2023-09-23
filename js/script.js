console.log("Cześć wszystkim!")

let button = document.querySelector(".js-button");
let photo = document.querySelector(".photo");

button.addEventListener("click", () => {
    photo.classList.toggle("photoBox");
    button.innerText = button.innerText === "Usuń zdjęcie" ? "Pokaż zdjęcie" : "Usuń zdjęcie";
});