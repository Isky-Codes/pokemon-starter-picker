let fireType = document.querySelector('.fireType').addEventListener('click', getFirePokemon);
let grassType = document.querySelector('.grassType').addEventListener('click', getGrassPokemon);
let waterType = document.querySelector('.waterType').addEventListener('click', getWaterPokemon);

//FUNCTION TO GET FIRE POKEMON GENERATED(when fire button is clicked)//


function getFirePokemon() {
    Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/charmander/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/cyndaquil/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/torchic/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/chimchar/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/tepig/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/fennekin/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/litten/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/scorbunny/").then(res => res.json()),
    ])
    .then(data => {
        document.querySelector('.pokemonPic1').src = data[0].sprites.front_default
        document.querySelector('.pokemonPic2').src = data[1].sprites.front_default
        document.querySelector('.pokemonPic3').src = data[2].sprites.front_default
        document.querySelector('.pokemonPic4').src = data[3].sprites.front_default
        document.querySelector('.pokemonPic5').src = data[4].sprites.front_default
        document.querySelector('.pokemonPic6').src = data[5].sprites.front_default
        document.querySelector('.pokemonPic7').src = data[6].sprites.front_default
        document.querySelector('.pokemonPic8').src = data[7].sprites.front_default
    })
}

function getGrassPokemon() {
    Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/chikorita/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/treecko/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/turtwig/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/snivy/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/chespin/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/rowlet/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/grookey/").then(res => res.json()),
    ])
    .then(data => {
        document.querySelector('.pokemonPic1').src = data[0].sprites.front_default
        document.querySelector('.pokemonPic2').src = data[1].sprites.front_default
        document.querySelector('.pokemonPic3').src = data[2].sprites.front_default
        document.querySelector('.pokemonPic4').src = data[3].sprites.front_default
        document.querySelector('.pokemonPic5').src = data[4].sprites.front_default
        document.querySelector('.pokemonPic6').src = data[5].sprites.front_default
        document.querySelector('.pokemonPic7').src = data[6].sprites.front_default
        document.querySelector('.pokemonPic8').src = data[7].sprites.front_default
    })
}

function getWaterPokemon() {
    Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/squirtle/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/totodile/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/mudkip/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/piplup/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/oshawott/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/froakie/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/popplio/").then(res => res.json()),
    fetch("https://pokeapi.co/api/v2/pokemon/sobble/").then(res => res.json()),
    ])
    .then(data => {
        document.querySelector('.pokemonPic1').src = data[0].sprites.front_default
        document.querySelector('.pokemonPic2').src = data[1].sprites.front_default
        document.querySelector('.pokemonPic3').src = data[2].sprites.front_default
        document.querySelector('.pokemonPic4').src = data[3].sprites.front_default
        document.querySelector('.pokemonPic5').src = data[4].sprites.front_default
        document.querySelector('.pokemonPic6').src = data[5].sprites.front_default
        document.querySelector('.pokemonPic7').src = data[6].sprites.front_default
        document.querySelector('.pokemonPic8').src = data[7].sprites.front_default
    })
}