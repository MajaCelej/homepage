{
    const welcome = () => {
        console.log("Cześć wszystkim!")
    }
    welcome();

    const button = document.querySelector(".js-button");

    const togglePhoto = () => {
        const photo = document.querySelector(".photo");
        photo.classList.toggle("photoBox");
        button.innerText = button.innerText === "Usuń zdjęcie" ? "Pokaż zdjęcie" : "Usuń zdjęcie";
    }

    const init = () => {
        button.addEventListener("click", togglePhoto);
    };

    init();
}