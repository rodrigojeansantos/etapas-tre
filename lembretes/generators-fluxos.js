let fetch = require('node-fetch')

function ajax(url){
  fetch(url)
    .then( data => data.json() )
    .then( data => dados.next(data) )
}

function* ajaxGen(){ 
  const url = 'https://'
  
  console.log('Buscando dados no github')
  const gitHub = yield ajax(`${url}api.github.com/users/rodrigojeansantos`)
  console.log(gitHub)

  console.log('Buscando eventos no github ')
  const events = yield ajax(`${url}api.github.com/users/rodrigojeansantos/received_events`)
  console.log(events)
}

const dados = ajaxGen()
dados.next()