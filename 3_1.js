const log = console.log
//const axios = require('axios')

// Acessar API do google https://developers.google.com/books/docs/v1/using
// Estudar a API

// Procurar um livro exemplo abaixo
// ex: https://www.googleapis.com/books/v1/volumes?q=quilting , testar url
// Criar uma função main dataBooks e retornar o total de livros e o titulo
// do livro, essa função recebe tipo e titulo
// exemplo de resposta
// ex {total: 10 title:{ title of book } }
// 
const axios = require('axios')

let titulos = {}

let apiGoogle = "https://www.googleapis.com/books/v1/volumes?q=quilting"
  console.log(typeof(apiGoogle))

  const dataBooks = axios.get(apiGoogle)
    .then(response => {
      console.log('Títulos: ', (response.data.items).map(livro => livro.volumeInfo.title))
      console.log('Total de Livros: ', response.data.items.length)
      //log((response.data.items))
    })
    .catch(error => error.message)

  // .then(response => console.log(response.data.totalItems))