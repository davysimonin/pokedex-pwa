<template>
  <a-row>
    <a-col :span="8" v-for="pokemon in $store.state.pokemons" :key="pokemon.name">
      <Card :name="pokemon.name" :url="pokemon.url" />
    </a-col>
  </a-row>
</template>

<script>
import Card from './Card'
export default {
  components: { Card }
}
</script>

<style scoped>
</style>
