// estas funciones son de ejemplo
/*
export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
*/
export const orderData = (data, sortBy, sortOrder) => {
  let result;
  if (sortOrder === 'ascendente') {
    result = data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return -1;
    });
  } else {
    result = data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return -1;
    });
  }
  return result;
};
export const searchPokemons = (data, searchBy, condition) => {
  const search = data.filter(letter => (letter[searchBy]).toLowerCase().indexOf(condition) !== -1);
  return search;
};
