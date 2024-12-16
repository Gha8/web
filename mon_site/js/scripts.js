// Bouton "En savoir plus"
document.getElementById('ctaButton').addEventListener('click', () => {
    alert("Merci de votre intérêt pour l'égalité des sexes !");
});
const map = L.map('map').setView([51.505, -0.09], 2); // Coordonnées pour centrer la carte
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.505, -0.09]).addTo(map) // Ajoute un marqueur
    .bindPopup('Exemple de données.')
    .openPopup();
