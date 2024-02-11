const form = document.querySelector('#pokeForm');

const input = document.querySelector('#dexNumber');
const button = document.querySelector('button');

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

input.addEventListener('click', function () {
    removeImage('addedPokemon');
})

function removeImage(id) {
    var elementToBeRemoved = document.getElementById("addedPokemon");
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const search = input.value;
    input.value = "";
    const pokemon = document.createElement('img');
    pokemon.src = `${baseURL}${search}.png`;
    this.append(pokemon);
    pokemon.setAttribute('id', 'addedPokemon')
})
