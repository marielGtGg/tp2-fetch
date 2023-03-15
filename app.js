// API à utiliser pour les images de chiens: https://dog.ceo/api/breeds/image/random
const btn = document.getElementById('next-dog-button');

btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.log('Erreur : ' + error)
    })   
});