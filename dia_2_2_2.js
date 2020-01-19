/*
Vários exercicios com o end-point abaixo
Acessar esse end-point http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page=1

1) Retornar a quantidade de itens dentro do results

2) Retornar todos os dados do  filme com o titulo "Star Wars: The Rise of Skywalker"

3) Buscar na segunda pagina e retornar os dados do filme com o titulo "The Addams Family"

4) Criar uma função que procurar o titulo do filme em várias paginas até encontrar... Indo no maximo até a pagina 10.
   Além de retornar o titulo dizer qual pagina esta.
   Os titulos são "The Fortune Goddess", "21 Bridges", "Arctic Dogs"
*/

const searchFilm = (response, nameFilm) => {

  response.data.results.map(film => {
    
    if(film.title === nameFilm) {
      console.log(`Dados do filme ${film}:`)
      console.log(film)
    }
  })
}

const definePage = (url, page) => url.concat(page)

const totalItems = (response) => response.data.results.length

const axios = require('axios')

const api = "http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page="
//console.log(typeof(api))
  
  let page = 'http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page='//
  

for(let i=1; i <= 1; i++){

  const axiosGet = axios.get(definePage(page, i))
  
    .then(response1 => {
      // 1
      if(response1.data.page == 1) {
        console.log('\nEx1) Qtde de itens dentro do results:', totalItems(response1), 'da page', response1.data.page, '\n')

        //return response1.data.results
        return response1
      }
    })
    .then(response2 => {
      // 2
      if(response2.data.page === 1) {
        let film2 = 'Star Wars: The Rise of Skywalker'
        searchFilm(response2, film2)
        return response2
      }
    })
/*
    .then(response3 => {
      // 3
      //3) Buscar na segunda pagina e retornar os dados do filme com o titulo "The Addams Family"
      if(response3.data.page === 2) {
        let film3 = 'The Addams Family'
        searchFilm(response3, film3)
        return response3
      }
    })
*/
    .then(response4 =>{
      runPages('The Fortune Goddess')  
      /*
      for(var j=1; j <= 10; j++){
        // console.log(response3)
        let axiosGetN = axios.get(definePage(page, j))
        axiosGetN.then(result =>{
          console.log(result.data.results.length)
        })
        // console.log(j)
        // console.log(axiosGetN.data)
      }
      */
      console.log('Mostrar no final')
      return response4

    })
    .catch(error => console.log(error.message))

  }

  const runPages = (title) => {

    console.log('Titulo pesquisado: ', title)
    
    for(let i=1; i <= 10; i++) {
      
      let axiosGet = axios.get(definePage(page, i))
      
      axiosGet.then(response => {
         
        console.log(response.data.results[i].title)
        
        if(response.data.results[i].title === title){
          console.log('achou')
          console.log(`Título ${response.data.results[i].title} encontrado na page ${response.data.page}`)
        }
      })
    }
  }