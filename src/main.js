/*import { example } from './data.js';

import data from './data/pokemon/pokemon.js';*/


import data from './data/pokemon/pokemon.js';

import {
    filterByType,
    searchPokemonByName,
    order,
    changeOrder,
   calculateStab,
    calculateDps,
    calculateEps,
} from './data.js';

/*console.log(example, data);*/

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');

//Boton para mostrar pokemones
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
/*addEventListener() elemento del DOM Registra un evento a un objeto en 
específico. El Objeto especifico puede ser un simple elemento 
en un archivo*/
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide');
    /*Esta propiedad es útil para agregar, 
  eliminar y alternar clases CSS en un elemento,debe ser llamado en el CSS
  con un display none.
 La propiedad classList es de solo lectura, sin embargo, 
 puede modificarla usando los métodos add () y remove ().*/
});

/*const pokemonList = data.pokemon;
const contentList = document.querySelector('#contentList');

pokemonList.forEach(pokemon=>{
    return contentList.innerHTML+=`<h2>${pokemon.name}</h2>`
})*/

const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const containerModal = document.querySelector('.container-modal');
const elementTypeFilter = document.getElementById('element-type-filter');
const orderBy = document.querySelector('#order-by');
const inputSearch = document.getElementById('search');
const btnAll = document.querySelector('.all-pokemon');
const btnOrder = document.querySelector('.btn-order');
let btnSort = false;

const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {/*forEach() ejecuta la función 
    callback una vez por cada elemento presente en el array en orden ascendente.
    arr.forEach(function callback(currentValue(elemento), index(indice), array) {
    // tu iterador
}[, thisArg]);*/
    imgEachPokemon += `<img src="img/pokemonType/${typeElement}.png" alt=" type pokemon"/>`;
    
  });
  return imgEachPokemon;
};
const resistant = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((resistantPokemon) => {
    imgEachPokemon += `<img src="img/pokemonType/${resistantPokemon}.png" alt="resistant"/>`;
   /* console.log(resistantPokemon);*/
  });
  return imgEachPokemon;
};
const weaknesses = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((weaknessesPokemon) => {
    imgEachPokemon += `<img src="img/pokemonType/${weaknessesPokemon}.png" alt="weaknesses"/>`;
  });
  return imgEachPokemon;
};
const obtainNames = (attack) => {
  const names = attack.map(name => name.name);/*map() crea un nuevo array
   con los resultados de la llamada a la función indicada aplicados a cada
    uno de sus elementos.
    var nuevo_array = arr.map(function callback(elemento actual, indice, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg]) */

  return names;
};
const showsAttacks = (arrayAtacks) => {
  let stabEachPokemon = '';
  arrayAtacks.forEach((nuevo) => {
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;
    
  });
  return stabEachPokemon;
};

const showModal = (pokemon) => {
  const modal = document.createElement('div');/*El método createElement ()
   crea un nodo de elemento
   con el nombre especificado.*/
  modal.classList.add('modal');
  modal.innerHTML = `<div class="modal-flex"> 
                     <div class="container-modal  comun-card">
                          <i class="close fas fa-times-circle"></i>
                          <div class="img-modal"><img src="${pokemon.img}"></div>
                          <div class="modal-info">
                            <p class="poke-name-card bold">${pokemon.name} N°<spam>${pokemon.num}</spam></p>
                            <p class="about">${pokemon.about}</p>
                            <div class="size-pokemon">
                              <div class="comun-modal contenido">
                                <img src="img/height.png">
                                <div>
                                  <p class="bold">Height</p>
                                  <p>${pokemon.size.height}</p>
                                </div>                                
                              </div>
                              <div class="comun-modal contenido">
                                <img src="img/egg.png">
                                <div>
                                  <p class="bold">Egg</p>
                                  <p>${pokemon.egg}</p>
                                </div>
                              </div>
                              <div class="comun-modal contenido">
                                <img src="img/weight.png">
                                <div>
                                  <p class="bold">Weight</p>
                                  <p>${pokemon.size.weight}</p>
                                </div>
                              </div>
                            </div>
                              <div class="resist-weakne">
                              <div class="comun-modal comun bold">
                                <p>Resistant</p>
                               <div class="resistant">${resistant(pokemon.resistant)}</div>
                              </div>
                              <div class="comun-modal comun bold">
                                <p>Weaknesses</p>
                                <div class="resistant">${weaknesses(pokemon.weaknesses)}</div>
                              </div>
                            </div>
                            <p class="bold comun title">Quick move</p>
                            <div class="comun bold quick-move">
                              <p class="encabezado">Name</p>
                              <p class="encabezado">STAB</p>
                              <p class="encabezado">DPS</p>
                              <p class="encabezado">EPS</p>
                            </div>
                            <div class="quick-move">
                              <div>${showsAttacks(obtainNames(pokemon['quick-move']))}</div>
                              <div>${showsAttacks(calculateStab(pokemon['quick-move'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateDps(pokemon['quick-move'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateEps(pokemon['quick-move']))}</div>
                            </div>
                            <p class="bold comun title">Special attack</p>
                            <div class="comun bold quick-move">
                              <p class="encabezado">Name</p>
                              <p class="encabezado">STAB</p>
                              <p class="encabezado">DPS</p>
                              <p class="encabezado">EPS</p>
                            </div>
                            <div class="quick-move">
                              <div>${showsAttacks(obtainNames(pokemon['special-attack']))}</div>
                              <div>${showsAttacks(calculateStab(pokemon['special-attack'], pokemon.type))}</div><!--f-->
                              <div>${showsAttacks(calculateDps(pokemon['special-attack'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateEps(pokemon['special-attack']))}</div>
                            </div>
                          </div>
                            </div>
                      </div>
                    </div>`;
  document.querySelector('.container-modal').appendChild(modal);

  modal.style.display = 'block';
  modal.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('modal');
    containerModal.innerHTML = '';
  });
  const modalFlex = document.querySelector('.modal-flex');
  window.addEventListener('click', (evento) => {
    if (evento.target === modalFlex) {/*Se logra reducir n eventos a tan solo 1,recoge
      el elemento sobre el cual se hizo click 
      si se asocia el evento a "contenedor" o "elemento padre" el this corresponde al mismo,
       mientras event.target corresponde al elemento hijo donde se produjo el click (en el caso del ejemplo el <span></span>).*/ 
    modal.classList.remove('modal');
      containerModal.innerHTML = '';
    }
  });
  return modal;
};

// Historia 1 y 2: mostrar pokemones y realizar un contador
const showPokemon = (list) => {
  let count = 0;
  list.forEach((pokem) => {
    const card = document.createElement('div');
    card.className = 'pokemon-group';
    card.innerHTML = `
      <div class="poke-img">
        <p class="poke-num">${pokem.num}</p>
        <img src="${pokem.img}">
      </div>
      <div class="container-info">
        <p class="poke-name">${pokem.name}</p>
        <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
        <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
        <div class="comun">${TypePokemon(pokem.type)}</div>
      </div>`;
    card.addEventListener('click', () => {
      const show = showModal(pokem);
      show.classList.add('modal');
    });
    count += 1;
    containerPokemons.appendChild(card);/*del #container-card */
  });
  document.getElementById('quantity').innerHTML = count;
  return containerPokemons;
};

showPokemon(pokemonList); // llamado al metodo

btnAll.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(order(pokemonList, 'num'));
});

// Historia 3: filtrar pokemones por tipo
elementTypeFilter.addEventListener('change', () => {/* del #element-type-filter */
  if (elementTypeFilter.value === 'all') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {/*del método del array filterByType  */
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);/*chapa el valor del 
    array de data */
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});

// Historia 4: buscar pokemon por nombre  /*Containerpokemons es un div ubicado en index.html */
const MessageError = () => {
  containerPokemons.innerHTML = '';
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  div.className = 'message-error comun';
  p.innerHTML = 'There are not pokemon with that name';
  img.src = 'img/error.gif';
  div.appendChild(p);
  div.appendChild(img);
  containerPokemons.appendChild(div);
};

inputSearch.addEventListener('input', () => {
  const pokemones = searchPokemonByName(pokemonList, inputSearch.value);
  /*Llama al método searchPokemonByName de data  */
  if (pokemones.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(pokemones);
  }
});

// Historia 5: Ordenar alfabeticamente
btnOrder.addEventListener('click', () => {/*botoncillo del html aparece de al A-Z */
  if (btnSort === false) {
    containerPokemons.innerHTML = '';
    btnOrder.classList.replace('btn-order', 'btn-orderAsc');
    const ascendente = order(pokemonList, 'a-z');
    showPokemon(ascendente);
  }
  if (btnSort === true) {
    containerPokemons.innerHTML = '';
    btnOrder.classList.replace('btn-orderAsc', 'btn-order');
    const descendente = changeOrder(order(pokemonList, 'a-z'));
    showPokemon(descendente);
  }
  btnSort = !btnSort;
});
// Historia 6,7,8: Ordenar por num, max-cp, max-hp
orderBy.addEventListener('change', () => {/*llama al metodo de order by de la data  */
  switch (orderBy.value) {
    case 'num':
      containerPokemons.innerHTML = '';
      showPokemon(order(pokemonList, 'num'));
      break;
    case 'cp':
      containerPokemons.innerHTML = '';
      // eslint-disable-next-line no-case-declarations
      const orderCP = order(pokemonList, 'max-cp');
      showPokemon(changeOrder(orderCP));
      break;
    case 'hp':
      containerPokemons.innerHTML = '';
      showPokemon(order(pokemonList, 'max-hp'));
      break;
    default:
  }
});

// Funcion Extra : boton para subir en pantalla
window.onscroll = () => {/*El método Window.scroll() 
  desplaza la ventana a un lugar particular en el documento.
  window.scroll(x-coord, y-coord)
window.scroll(options)*/
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};
document.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

