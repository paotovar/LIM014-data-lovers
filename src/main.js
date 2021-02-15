//import { example } from './data.js';//
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/


import {
    filterByType,
    searchPokemonByName,
    order,
    changeOrder,
   calculateStab,
    calculateDps,
    calculateEps,
} from './data.js';

/console.log(example, data);/

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');

//Boton para mostrar pokemones
const btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', () => {
  firstScreen.classList.add('hide');
  secondScreen.classList.remove('hide');
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
let btnSort = false;//

const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((typeElement) => {
    imgEachPokemon += `<img src="img/pokemonType/${typeElement}.png" alt=" type pokemon"/>`;
  });
  return imgEachPokemon;
};
const resistant = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((resistantPokemon) => {
    imgEachPokemon += `<img src="img/pokemonType/${resistantPokemon}.png" alt="resistant"/>`;
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
  const names = attack.map(name => name.name);
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
  const modal = document.createElement('div');/*El método createElement () crea un nodo de elemento
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
  document.querySelector('.container-modal').appendChild(modal);

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
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});

// Historia 4: buscar pokemon por nombre
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
  if (pokemones.length === 0) {
    MessageError();
    document.getElementById('quantity').innerHTML = 0;
  } else {
    containerPokemons.innerHTML = '';
    showPokemon(pokemones);
  }
});

// Historia 5: Ordenar alfabeticamente
btnOrder.addEventListener('click', () => {
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
orderBy.addEventListener('change', () => {
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
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};
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