let APIUrl = 'http://localhost:3000/api/listarUsuario'

export default fetch(APIUrl, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  cache: 'default',
})
  .then((res) => res.json())
  .then((users) => console.log(users))
