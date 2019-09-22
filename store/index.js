export const state = () => ({
  pokemons: [],
  filteredPokemons: [],
  nextUrl: '',
  searchFilter: '',
  typeFilter: [],
  physicalFilter: [],
  isFetching: false
})

export const mutations = {
  setPokemons (state, pokemons) {
    state.pokemons = pokemons
    state.filteredPokemons = pokemons
  },
  setFilteredPokemons (state, filteredPokemons) {
    state.filteredPokemons = filteredPokemons
  },
  resetFilteredPokemons (state) {
    state.filteredPokemons = state.pokemons
  },
  setNextPokemons (state, pokemons) {
    state.pokemons = [...state.pokemons, ...pokemons]
    state.filteredPokemons = state.pokemons
  },
  setNextFetchUrl (state, url) {
    state.nextUrl = url
  },
  setSearch (state, str) {
    state.searchFilter = str
  },
  setFilter (state, { value, filter }) {
    state[filter] = value
  },
  isFetching (state, bool) {
    state.isFetching = bool
  }
}

export const actions = {
  async loadNextPokemons ({ state, commit }) {
    commit('isFetching', true)
    const response = await this.$axios.get(`${process.env.CUSTOM_POKEAPI}/${state.nextUrl}`)
    commit('setNextPokemons', response.data.pokemons)
    commit('setNextFetchUrl', response.data.nextUrl)
    commit('isFetching', false)
  },
  async fetchFilteredList ({ state, commit }) {
    const { typeFilter, physicalFilter, searchFilter } = state
    if (!typeFilter.length && !physicalFilter.length && !searchFilter) {
      commit('resetFilteredPokemons')
      return
    }
    const filters = { types: state.typeFilter, physical: state.physicalFilter, search: searchFilter }
    const response = await this.$axios.post(`${process.env.CUSTOM_POKEAPI}/api/filterpokemons`, { filters })
    commit('setFilteredPokemons', response.data)
  }
}
