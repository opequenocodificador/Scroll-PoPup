// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//navbar

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    navbar.style.height = "20px";
  } else {
    navbar.style.height = "90px";
  }
});

//img-improve

const imageImprove = document.getElementById("imgImprovise");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    imageImprove.style.opacity = 1;
    imageImprove.style.transform = "translateX(" + 0 + "px) ";
  }
});

//popup

const PopUp = document.getElementById("popup");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1485) {
    PopUp.style.opacity = 1;
    PopUp.style.transform = "translateX(" + 0 + "px) ";
  }
});

//disparition popup

const closeBox = document.getElementById("closeBtn");
window.addEventListener("click", () => {
  closeBox = PopUp.style.opacity = 0;
  closeBox = PopUp.style.transform = "translateX(" + 400 + "px) ";
});
