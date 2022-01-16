
//A loop to get no of data//

function noOfPokemon() {
    for (i = 1; i <= 50; i++) {
        getData(i);
    }
}

//To fetch the data//

async function getData(id) {
    try{
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const detail = await data.json();
    createData(detail);
    }catch(error){
        console.log("Error",error);
    }
}
noOfPokemon();

//To append the data to display//

function createData(detail) {
    const info = document.createElement("div");
    info.setAttribute("class", "infoPoke");
    const innerHTMLCont = `
    <div class="pic">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${detail.id}.png"/>
    </div>
    <div class="info">
    <span><b>Name   :${detail.name}</b></span><br>
    <span><b>Ability:</b>${detail.abilities[0].ability.name}</span><br>
    <span><b>Move   :</b>${detail.moves[0].move.name}</span><br>
    <span><b>Weight :</b>${detail.weight}</span>
    </div>
    </div>
    `;
    info.innerHTML = innerHTMLCont;
    const container = document.getElementById("container");
    container.append(info);
}