import axios from 'axios'

axios.get('https://pokeapi.co/api/v2/pokemon/charmander')
    .then(function(response) {
        console.log("Success!!")
        console.log(response.data)
        
    })
    .catch(function(error) {
        console.log("Errorr!!")
        console.log(error)
        
    })