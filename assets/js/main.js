const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151; // Limitar somente na 1ª geração dos pokemons
const limit = 10;
let offset = 0;

//--------
let allPokemons = [];
//--------

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

        //--------
        allPokemons = [...allPokemons, ...pokemons];//Os novos Pokémon carregados são concatenados ao array global allPokemons a cada chamada de loadPokemonItems.
        //--------

        //adiciondno um index para identificar cada pokemom (index)
        const newHtml = pokemons.map((pokemon, index) =>
            `<li class="pokemon ${pokemon.type}" data-index="${offset + index}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>`
        ).join('');

        pokemonList.innerHTML += newHtml;

        // Adicionar event listeners para os novos elementos adicionados
        const pokemonElements = pokemonList.querySelectorAll('.pokemon');

        pokemonElements.forEach((element) => {
            element.addEventListener('click', () => {

                //referenciando o pokemon ao array global com todos os poklemons
                const pokemonIndex = element.getAttribute('data-index');
                const pokemon = allPokemons[pokemonIndex];
                openModal(pokemon)

            });
        });
    });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtRecordNextPage = offset + limit;

    if (qtRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);


        // Remover o botão "load more" quando atingir o limite máximo
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
});