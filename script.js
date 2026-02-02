const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const overlay = document.getElementById("overlay");
const hint = document.getElementById("hint");

let noCount = 0;

// Paramètres de grossissement du bouton "Oui"
let yesScale = 1;

noBtn.addEventListener("click", () => {
  noCount++;

  // Grossit progressivement "Oui"
  yesScale = Math.min(yesScale + 0.18, 3.2); // limite à x3.2
  yesBtn.style.transform = `scale(${yesScale})`;

  // Rend "Non" un peu plus petit/transparent pour renforcer l'effet
  const noScale = Math.max(1 - noCount * 0.06, 0.55);
  noBtn.style.transform = `scale(${noScale})`;
  noBtn.style.opacity = String(Math.max(1 - noCount * 0.08, 0.35));

  // Petit texte fun
  const msgs = [
    "T'es sûre ? 😭",
    "Réfléchis bien… 👀",
    "Allez stp 🙏",
    "On est faits l'un pour l'autre 😌",
    "Dernière chance 😳",
  ];
  hint.textContent = msgs[Math.min(noCount - 1, msgs.length - 1)];

  // Bonus : si elle spam "Non", déplace le bouton Non un peu
  const x = (Math.random() * 140 - 70);
  const y = (Math.random() * 80 - 40);
  noBtn.style.translate = `${x}px ${y}px`;
});

yesBtn.addEventListener("click", () => {
  // Affiche l'overlay avec gif de célébration
  overlay.classList.remove("hidden");
});

// Clique n'importe où pour fermer (optionnel)
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
});
