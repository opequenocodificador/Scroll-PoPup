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
  {
    imageImprove.style.opacity = 1;
    imageImprove.style.transform = "translateX(" + 0 + "px) ";
  }
});

//popup

const PopUp = document.getElementById("popup");

window.addEventListener("scroll", () => {
  window.scrollY > 800;
  {
    popup.style.opacity = 1;
    popup.style.transform = "translateX(" + 0 + "px) ";
  }
});

//disparition popup
