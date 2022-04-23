async function fetchPokemons(offset, limit){
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  let data = response.json();
  
  return data
}

async function fetchPokemonData(url) {
  let response = await fetch(url);
  let dataPokemon = response.json();

  return dataPokemon;
}

export async function getAllPokemonsData(offset, limit) {
  let allPokemonsData = await fetchPokemons(offset, limit)
  
  let pokemons = await Promise.all(allPokemonsData.results.map(async pokemon => {
    let pokemonData = await fetchPokemonData(pokemon.url);
    
    return {
      ID: pokemonData.id,
      NAME: pokemonData.name,
      IMAGE: pokemonData.sprites.other.dream_world.front_default,
      WEIGHT: pokemonData.weight,
      HP: pokemonData.stats[0].base_stat,
      ATTACK: pokemonData.stats[1].base_stat,
      DEFENSE: pokemonData.stats[2].base_stat,
      SPECIAL_ATTACK: pokemonData.stats[3].base_stat,
      SPECIAL_DEFENSE: pokemonData.stats[4].base_stat,
      SPEED: pokemonData.stats[5].base_stat
    };
  }))

  return pokemons;
}