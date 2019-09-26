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
  async fetch (context) {
    console.log(context)
    try {
      const fetchPokemons = await fetch(`${process.env.API_URL}/api/fetchpokemons?limit=25`)
      const response = await fetchPokemons.json()
      console.log(response)
      context.store.commit('setPokemons', response.pokemons)
      context.store.commit('setNextFetchUrl', response.nextUrl)
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="css" scoped>
  div.sendTrackContainer {
    margin-top: 12px;
  }
</style>
