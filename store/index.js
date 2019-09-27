export const state = () => ({
  pokemons: [],
  filteredPokemons: [],
  nextUrl: '',
  searchFilter: '',
  typeFilter: [],
  physicalFilter: [],
  statsFilter: [],
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
    try {
      commit('isFetching', true)
      const response = await fetch(`${process.env.API_URL}/${state.nextUrl}`)
      const data = await response.json()
      commit('setNextPokemons', data.pokemons)
      commit('setNextFetchUrl', data.nextUrl)
      commit('isFetching', false)
    } catch (err) {
      commit('isFetching', false)
      console.error(err)
    }
  },
  async fetchFilteredList ({ state, commit }) {
    const { typeFilter, physicalFilter, searchFilter, statsFilter } = state
    if (!typeFilter.length && !physicalFilter.length && !searchFilter && !statsFilter.length) {
      commit('resetFilteredPokemons')
      return
    }
    const filters = {
      types: state.typeFilter,
      physical: state.physicalFilter,
      search: searchFilter,
      stats: statsFilter
    }
    try {
      const response =
      await fetch(`${process.env.API_URL}/api/filterpokemons`,
        {
          method: 'POST',
          body: JSON.stringify(filters),
          headers: {
            'Content-Type': 'application/json'
          }
        })

      const data = await response.json()
      commit('setFilteredPokemons', data)
    } catch (err) {
      console.error(err)
    }
  }
}
