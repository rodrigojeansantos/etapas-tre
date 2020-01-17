const log = console.log
const axios = require('axios')

// Acessar API do google https://developers.google.com/books/docs/v1/using
// Estudar a API

// Procurar um livro exemplo abaixo
// ex: https://www.googleapis.com/books/v1/volumes?q=quilting , testar url
//Criar uma função main dataBooks e retornar o total de livros e o titulo do livro, essa função recebe tipo e titulo
// exemplo de resposta
// ex {total: 10 title:{ title of book } }
// 

let title = "Title Insurance";

let totalBooks;
let titleBooks;
var livros = []

const apiCons = "https://www.googleapis.com/books/v1/volumes?q=quilting"
axios({
    method: 'get',
    url: apiCons,
    responseType: 'object'
  })
    .then(
    (response)=>{
        // log((response.data.items).map(el => el.volumeInfo.title))
        // log(response.data.items.length)
        livros = response.data.items
        console.log('Fui chamado dentro do then',livros[0])
    })
    .catch(  (error) => {
        console.log(error.message)
      })

console.log('fui chamado fora do then', livros[0])

// log(titleBooks)
// log(totalBooks)


//'Quilting For Dummies'

