// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random
const btn = document.getElementById('next-dog-button');
const img = document.getElementById('dogsAPI');
const id = document.getElementById('dogId');
const age = document.getElementById('dogAge');
const registry = document.getElementById('dogRegistry');

btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        img.src = data.message;
        id.textContent = randomNumber(10000, 99999);
        age.textContent = randomNumber(1, 15) + ' Years';
        registry.textContent = randomNumber(100, 999);
    })
    .catch(error => console.log('Erreur : ' + error))   
});

function randomNumber(min, max) {
    return min + Math.floor((max - min + 1) * Math.random());
}