export const state = () => ({
  pokemons: {}
})

export const mutations = {
  fetchPokemons (state, pokemons) {
    state.pokemons = pokemons
  }
}
