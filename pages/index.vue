<template lang="html">
  <div class="sendTrackContainer">
    <a-row>
      <a-col :span="4">
        <FiltersContainer />
      </a-col>
      <a-col :span="20">
        <CardsContainer  v-if="$store.state.filteredPokemons.length"/>
        <div v-else class="empty">Aucun Pokemon pour cette recherche</div>
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
    try {
      const fetchPokemons = await fetch(`${process.env.API_URL}/api/fetchpokemons?limit=25`)
      const response = await fetchPokemons.json()
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
  div.empty {
    text-align: center;
    font-size: 2rem;
  }
</style>
