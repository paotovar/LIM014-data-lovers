<<<<<<< HEAD
/*import { example } from './data.js';

import data from './data/pokemon/pokemon.js';*/


=======
//import { example } from './data.js';//
// import data from './data/lol/lol.js';
>>>>>>> bri
import data from './data/pokemon/pokemon.js';

<<<<<<< HEAD
=======
/*console.log(example, data);*/


>>>>>>> bri
import {
    filterByType,
    searchPokemonByName,
    order,
    changeOrder,
   calculateStab,
    calculateDps,
    calculateEps,
} from './data.js';

<<<<<<< HEAD
/*console.log(example, data);*/
=======
/console.log(example, data);/
>>>>>>> bri

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');

//Boton para mostrar pokemones
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
<<<<<<< HEAD
  /*Esta propiedad es útil para agregar, 
  eliminar y alternar clases CSS en un elemento.
 La propiedad classList es de solo lectura, sin embargo, 
 puede modificarla usando los métodos add () y remove ().*/
=======
>>>>>>> bri
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide');
});

<<<<<<< HEAD
=======

>>>>>>> bri
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
<<<<<<< HEAD
let btnSort = false;/*---falta---*/

const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {/*forEach() ejecuta la función 
    callback una vez por cada elemento presente en el array en orden ascendente.
    arr.forEach(function callback(currentValue(elemento), index(indice), array) {
    // tu iterador
}[, thisArg]);*/
    imgEachPokemon += `<img src="img/icon-type/${typeElement}.png" alt=" type pokemon"/>`;
=======
let btnSort = false;//

const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/pokemonType/${typeElement}.png" alt=" type pokemon"/>`;
>>>>>>> bri
  });
  return imgEachPokemon;
};
const resistant = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((resistantPokemon) => {
<<<<<<< HEAD
    imgEachPokemon += `<img src="img/icon-type/${resistantPokemon}.png" alt="resistant"/>`;
=======
    imgEachPokemon += `<img src="img/pokemonType/${resistantPokemon}.png" alt="resistant"/>`;
>>>>>>> bri
  });
  return imgEachPokemon;
};
const weaknesses = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((weaknessesPokemon) => {
<<<<<<< HEAD
    imgEachPokemon += `<img src="img/icon-type/${weaknessesPokemon}.png" alt="weaknesses"/>`;
=======
    imgEachPokemon += `<img src="img/pokemonType/${weaknessesPokemon}.png" alt="weaknesses"/>`;
>>>>>>> bri
  });
  return imgEachPokemon;
};
const obtainNames = (attack) => {
<<<<<<< HEAD
  const names = attack.map(name => name.name);/*map() crea un nuevo array
   con los resultados de la llamada a la función indicada aplicados a cada
    uno de sus elementos.
    var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg]) */
=======
  const names = attack.map(name => name.name);
>>>>>>> bri
  return names;
};
const showsAttacks = (arrayAtacks) => {
  let stabEachPokemon = '';
  arrayAtacks.forEach((nuevo) => {
<<<<<<< HEAD
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;/*--falta */
=======
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;
>>>>>>> bri
  });
  return stabEachPokemon;
};

const showModal = (pokemon) => {
<<<<<<< HEAD
  const modal = document.createElement('div');/*El método createElement ()
   crea un nodo de elemento
=======
  const modal = document.createElement('div');/*El método createElement () crea un nodo de elemento
>>>>>>> bri
   con el nombre especificado.*/
  modal.classList.add('modal');
  modal.innerHTML = `<div class="modal-flex"> 
                      <div class="container-modal ${pokemon.type[0]} comun-card">
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
                              <div>${showsAttacks(calculateStab(pokemon['special-attack'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateDps(pokemon['special-attack'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateEps(pokemon['special-attack']))}</div>
                            </div>
                          </div>
                      </div>
                    </div>`;
<<<<<<< HEAD
  document.querySelector('.container-modal').appendChild(modal);/*---falta */
=======
  document.querySelector('.container-modal').appendChild(modal);
>>>>>>> bri

  modal.style.display = 'block';
  modal.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('modal');
    containerModal.innerHTML = '';
  });
  const modalFlex = document.querySelector('.modal-flex');
  window.addEventListener('click', (evento) => {
    if (evento.target === modalFlex) {
      modal.classList.remove('modal');
      containerModal.innerHTML = '';
<<<<<<< HEAD
    }/*---falta */
=======
    }
>>>>>>> bri
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
<<<<<<< HEAD
      <div class="poke-img">,
=======
      <div class="poke-img">
>>>>>>> bri
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
    containerPokemons.appendChild(card);
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
elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
<<<<<<< HEAD
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);/*chapa el valor del 
    array de data */
=======
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
>>>>>>> bri
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});

<<<<<<< HEAD
// Historia 4: buscar pokemon por nombre  /*Containerpokemons es un div ubicado en index.html */
=======
// Historia 4: buscar pokemon por nombre
>>>>>>> bri
const MessageError = () => {
  containerPokemons.innerHTML = '';
  const div = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');
  div.className = 'message-error comun';
  p.innerHTML = 'No hay ningun pokemon con ese nombre';
  img.src = 'img/error.gif';
  div.appendChild(p);
  div.appendChild(img);
  containerPokemons.appendChild(div);
};

inputSearch.addEventListener('input', () => {
  const pokemones = searchPokemonByName(pokemonList, inputSearch.value);
<<<<<<< HEAD
  /*Llama a un array de data  */
=======
>>>>>>> bri
  if (pokemones.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(pokemones);
  }
});

// Historia 5: Ordenar alfabeticamente
<<<<<<< HEAD
btnOrder.addEventListener('click', () => {/*botoncillo del html aparece de al A-Z */
=======
btnOrder.addEventListener('click', () => {
>>>>>>> bri
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
  btnSort = !btnSort;//*entender */
});
// Historia 6,7,8: Ordenar por num, max-cp, max-hp
<<<<<<< HEAD
orderBy.addEventListener('change', () => {/*llama al order by del html y al order del array  */
=======
orderBy.addEventListener('change', () => {
>>>>>>> bri
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
<<<<<<< HEAD
window.onscroll = () => {/*El método Window.scroll() 
  desplaza la ventana a un lugar particular en el documento.
  window.scroll(x-coord, y-coord)
window.scroll(options)*/
=======
window.onscroll = () => {
>>>>>>> bri
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};
<<<<<<< HEAD
ds.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',/*---falta */
  });
});

=======
document.querySelector('.container-btn-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


// SHOW POKEDEX PAGE //

/*const showPokedex= document.getElementById('pokedex');
showPokedex.addEventListener('click',()=>{
    document.getElementById('firstScreen').style.display='none';
    document.getElementById('secondScreen').style.display='block';
});

const showPokedex = document.getElementById('btnMostrar');
showPokedex.addEventListener('click', () =>{
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide')
});

/*
import {
  filterByType,
} from './data.js';


const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const elementTypeFilter = document.getElementById('element-type-filter');


const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/icon-type/${typeElement}.png" alt=" type pokemon"/>`;
  });
  return imgEachPokemon;
};
const resistant = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((resistantPokemon) => {
    imgEachPokemon += `<img src="img/icon-type/${resistantPokemon}.png" alt="resistant"/>`;
  });
  return imgEachPokemon;
};
const weaknesses = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((weaknessesPokemon) => {
    imgEachPokemon += `<img src="img/icon-type/${weaknessesPokemon}.png" alt="weaknesses"/>`;
  });
  return imgEachPokemon;
};
const obtainNames = (attack) => {
  const names = attack.map(name => name.name);
  return names;
};
const showsAttacks = (arrayAtacks) => {
  let stabEachPokemon = '';
  arrayAtacks.forEach((nuevo) => {
    stabEachPokemon += `<p class="comun-attack">${nuevo}</p>`;
  });
  return stabEachPokemon;
}; */
>>>>>>> bri
