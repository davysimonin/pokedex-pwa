<template lang="html">
  <div class="sendTrackContainer">
    <a-row>
      <a-col :span="6">
        <FiltersContainer />
      </a-col>
      <a-col :span="18">
        <CardsContainer />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CardsContainer from '../components/CardsContainer'
import FiltersContainer from '../components/FiltersContainer'

export default {
  layout: 'main',
  components: { CardsContainer, FiltersContainer },
  async fetch ({ store, $axios }) {
    const response = await $axios.get('https://pokeapi.co/api/v2/pokemon?limit=25')
    store.commit('fetchPokemons', response.data.results)
  }
}
</script>

<style lang="css" scoped>
  div.sendTrackContainer {
    margin-top: 12px;
  }
</style>
