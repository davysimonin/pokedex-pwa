<template>
  <a-row>
    <a-col v-for="pokemon in $store.state.filteredPokemons" :key="pokemon.name" :span="8">
      <Card :name="pokemon.name" :url="pokemon.url" />
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
    async onScroll ({ target: { scrollingElement: { scrollTop, scrollTopMax } } }) {
      if (scrollTop === scrollTopMax && !this.loading) {
        this.loading = true

        const response = await this.$axios.get(this.$store.state.nextUrl)
        this.$store.commit('setNextPokemons', response.data.results)
        this.$store.commit('setNextFetchUrl', response.data.next)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>
