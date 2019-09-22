<template>
  <a-row>
    <a-col v-for="pokemon in $store.state.filteredPokemons" :key="pokemon.id" :span="8">
      <Card
        :id="pokemon.id"
        :name="pokemon.name"
        :height="pokemon.height"
        :weight="pokemon.weight"
        :sprite="pokemon.sprites.front_default"
        :types="pokemon.types"
      />
    </a-col>
  </a-row>
</template>

<script>
import Card from './Card'
export default {
  components: { Card },
  data () {
    return {
      loading: false
    }
  },
  mounted () {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  beforeUpdate () {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    onScroll ({ target: { scrollingElement: { scrollTop, scrollTopMax } } }) {
      if (scrollTop === scrollTopMax && this.canLoadNextPokemons()) {
        this.$store.dispatch('loadNextPokemons')
      }
    },
    canLoadNextPokemons () {
      const { isFetching, searchFilter, typeFilter, physicalFilter } = this.$store.state
      if (!isFetching && !searchFilter && !typeFilter.length && !physicalFilter.length) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped>
</style>
