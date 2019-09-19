export const state = () => ({
  pokemons: [],
  filteredPokemons: [],
  nextUrl: ''
})

export const mutations = {
  setPokemons (state, pokemons) {
    state.pokemons = pokemons
    state.filteredPokemons = pokemons
  },
  setNextPokemons (state, pokemons) {
    state.pokemons = [...state.pokemons, ...pokemons]
    state.filteredPokemons = [...state.pokemons]
  },
  setNextFetchUrl (state, url) {
    state.nextUrl = url
  }
}
