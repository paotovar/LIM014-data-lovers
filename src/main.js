/*import { example } from './data.js';

import data from './data/pokemon/pokemon.js';*/


import data from './data/pokemon/pokemon.js';

import {
  orderData,
  searchPokemons,
} from './data.js';

/*console.log(example, data);*/

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');

//Boton para mostrar pokemones
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide');
});


const pokemonList = data.pokemon;
const contentList = document.querySelector('#contentList');

pokemonList.forEach(pokemon=>{
    return contentList.innerHTML+=`<h2>${pokemon.name}</h2>`
})


