/*
Vários exercicios com o end-point abaixo
Acessar esse end-point 

http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page=1

1) Retornar a quantidade de itens dentro do results

2) Retornar todos os dados do  filme com o titulo "Star Wars: The Rise of Skywalker"

3) Buscar na segunda pagina e retornar os dados do filme com o titulo "The Addams Family"

4) Criar uma função que procurar o titulo do filme em várias paginas até encontrar... Indo no maximo até a pagina 10.
   Além de retornar o titulo dizer qual pagina esta.
   Os titulos são "The Fortune Goddess", "21 Bridges", "Arctic Dogs"

*/

const axios = require('axios');

const apiCons = "http://api.themoviedb.org/3/movie/now_playing?api_key=246bf886104d519a1d2bf62aef1054ff&page="

const searched = 'Star Wars: The Rise of Skywalker' 
console.log('searched2 = ' + searched)

//let foundIt;
let foundItAgain;
let index = 1;

const getUser = async (procurado, page) => {
    // console.log(procurado, index)
    try {
    let response = await axios.get(apiCons.concat(page));
    
    let res = await response.data.results.map((el) => 
        {
            //console.log('el.title = ' + el.title)
            //console.log('el.title === searched2 = ' + el.title === searched2)
            if(procurado === el.title){
                foundItAgain = el
                console.log('dentro do if: foundItAgain = ' + foundItAgain)
                console.log(page)                
                index = 52;
                return true
            } 

            return false
        })
     //console.log(foundItAgain)    
     // console.log('res', res)
        return res
    } catch (error) {
     console.error(error);
    }
  }

while(index < 52){
    getUser(searched, index)        
    index++    
}

console.log(index)
console.log(foundItAgain)
