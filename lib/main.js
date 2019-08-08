let fluidContainer = document.getElementsByClassName("container-fluid")[0]

let url = "https://pokeapi.co/api/v2/pokemon/chimchar";
function getType (pokemonJSON){
    let types = [];
    for (let type of pokemonJSON.types){
        types.push(type.type.name)
    }
    return types;
}

function getMoves (pokemonJSON){
    let moves = [];
    for (let move of pokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves;
}

function getAbilities (pokemonJSON){
    let abilities = [];
    for (let ability of pokemonJSON.abilities){
    abilities.push(ability.ability.name);
}
    return abilities;
}
function createPokemonElement(pokemon){
    //p tag for name
    let h1 = document.createElement("h1");
    h1.innerText = pokemon.name;
    //h2 tag for number
    let h2 = document.createElement("h2");
    h2.innerText = pokemon.number;
    //p tag for types
    let img = document.createElement("img");
    img.src = pokemon.sprite;

    let p = document.createElement("p");
    for (let type of pokemon.types){
        p.innerText += `${type}`
    }
    //ul tag for moves
    let moveUl = document.createElement("ul");
    for (let move of pokemon.moves){
        moveUl.innerHTML += `<li>${move}</li>`;
    }
    //ul tag for abilities
    let abilityUl = document.createElement("ul");
    for (let ability of pokemon.abilities){
        abilityUl.innerHTML += `<li>${ability}</li>`;
    }

    let div = document.createElement("div");
    div.append(h1,h2,img,p,moveUl,abilityUl);
    fluidContainer.appendChild(div);

   
}

fetch(url)
.then ((response) => response.json())
.then (function(data){
    let name = data.name;
    let number = data.id;
    let sprite = data.sprites.front_default;
    let types = getType(data);
    let moves = getMoves(data);
    let abilities = getAbilities(data);
    let chimchar = new Pokemon(name, types, number, moves, abilities,sprite);
    console.log(data);
    createPokemonElement(chimchar);
})

.catch(function(error){
    console.log(error);
});

