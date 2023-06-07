  // Sélectionne tous les éléments <button> avec la classe "hero-btn"
  var buttons = document.querySelectorAll("button.hero-btn");
    
  // Parcourt tous les boutons et ajoute le gestionnaire d'événements
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      window.location.href = "./descriptoin.html";
    });
  });