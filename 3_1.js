const log = console.log
const axios = require('axios')

//Access API google https://developers.google.com/books/docs/v1/using
// study API
// search book
// ex: https://www.googleapis.com/books/v1/volumes?q=quilting , test and url
// create mains function dataBooks and return total and title
// ex {total: 10 title:{ title of book } }

// type of book is a parameter and title is dynamic value send to parameter 

const getAllItems = async (bookTitle) => {
    try {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`
        const res = await axios.get(url)
        return res
      } catch (error) {
        return error
      }
}


const totalItems = async (arr) => {
    try {        
        const res = arr.items.length
        return res
      } catch (error) {
        return error
      }
  };
  
  const searchTitle = async (arr, getTitle) => {
    try {        
        const volumeInfo = arr.items.map(a => a.volumeInfo );
        const title = volumeInfo.filter(n => n.title ===  getTitle)

        return title[0];
        
      } catch (error) {
        return error
      }    
  };
  
  const dataBooks = async () => {
      
    try {        
        const { data: items } = await getAllItems('quilting')    
        const total = await totalItems(items);
        const title = await searchTitle(items, 'Quilting Bible')    
        const obj = {total, title}

        return obj

      } catch (error) {
        return error
      }  
  };

  
  (async () => {
    const obj = await dataBooks()
    log(obj)
  })();