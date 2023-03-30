const url = 'https://petstore.swagger.io/v2/swagger.json';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export const fetchPetstore = () =>
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
