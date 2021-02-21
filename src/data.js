// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
export const filterByType = (arrayObj, elementType) => {
  const pokemon = arrayObj.filter(obj => obj.type.includes(elementType));/*El includes()método 
  determina si una cadena contiene los caracteres de una cadena especificada. */
  return pokemon;
};
export const searchPokemonByName = (arrayObj, input) => {
  const pokemon = arrayObj.filter(poke => poke.name.startsWith(input.toLowerCase()));
  /*toLowerCase () convierte una cadena en letras minúsculas. */
  return pokemon;/*string.startsWith(searchvalue, start) */
};
export const order = (arrayObj, orderBy) => {
  let sortObj = [];/*la declaración switch evalúa una expresión */
  switch (orderBy) {
    case 'a-z':
      sortObj = arrayObj.sort((a, b) => ((a.name <= b.name) ? -1 : 1));
      break;
    case 'max-cp':
      sortObj = arrayObj.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
      break;
    case 'max-hp':
      sortObj = arrayObj.sort((a, b) => a.stats['max-hp'] - b.stats['max-hp']);
      break;
    case 'num':
      sortObj = arrayObj.sort((a, b) => a.num - b.num);
      break;
    default:
  }
  return sortObj;
};

export const changeOrder = array => array.reverse();



export const calculateStab = (attack, tipoPokemon) => {
  const result = attack.map((obj) => {
    const damage = Number(obj['base-damage']);
    if (tipoPokemon.includes(obj.type)) {
      const stab = Number((damage * 20) / 100 + damage);
      return stab;
    }
    return damage;
  });
  return result;
};

export const calculateDps = (attack, tipoPokemon) => {
  const result = attack.map((obj) => {
    const damage = Number(obj['base-damage']);
    const time = Number(obj['move-duration-seg']);
    let dps = Math.round((damage / time));
    if (tipoPokemon.includes(obj.type)) {
      const stab = Number((damage * 20) / 100 + damage);
      dps = Math.round((stab / time));
    }
    return dps;
  });
  return result;
};

export const calculateEps = (attack) => {
  const result = attack.map((obj) => {
    const energy = Number(obj.energy);
    const time = Number(obj['move-duration-seg']);
    const eps = Math.round(energy / time);
    return eps;
  });
  return result;
};  
