{
    const welcome = () => {
        console.log("Cześć wszystkim!")
    }
    welcome();

    const TogglePhoto = () => {
        const photo = document.querySelector(".photo");
        photo.classList.toggle("photoBox");
        button.innerText = button.innerText === "Usuń zdjęcie" ? "Pokaż zdjęcie" : "Usuń zdjęcie";
    }

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", TogglePhoto);
    };
}