<template lang="html">
  <div class="sendTrackContainer">
    <a-row>
      <a-col :span="4">
        <FiltersContainer />
      </a-col>
      <a-col :span="20">
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
    const response = await $axios.get(`/api/fetchpokemons?limit=25`)
    store.commit('setPokemons', response.data.pokemons)
    store.commit('setNextFetchUrl', response.data.nextUrl)
  }
}
</script>

<style lang="css" scoped>
  div.sendTrackContainer {
    margin-top: 12px;
  }
</style>
