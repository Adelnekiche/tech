window.addEventListener("load", function() {
    var text = document.getElementById("text");
    var text2 = document.getElementById("text2");
    var photo = document.getElementById("img-overlay");
    
  
    text.style.opacity = "0";
    text.style.transition = "opacity 1s ease-in-out";
    text2.style.opacity = "0";
    text2.style.transition = "opacity 1s ease-in-out";
  
    photo.style.opacity = "0";
    photo.style.transform = "translateX(-100%)";
    photo.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
  
    setTimeout(function() {
      text.style.opacity = "1";
    }, 1000); // Délai de 1 seconde pour l'animation du texte

    setTimeout(function() {
        text2.style.opacity = "1";
      }, 2000); // Délai de 2 seconde pour l'animation du texte

    setTimeout(function() {
      photo.style.opacity = "1";
      photo.style.transform = "translateX(0)";
    }, 3000); // Délai de 3 seconde pour l'animation de la photo
  
   
  });