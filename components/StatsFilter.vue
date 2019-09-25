<template>
  <a-card title="Statistics" :bordered="false">
    <button slot="extra" class="reset" @click="reset()">
      Reset
    </button>
    <a-checkbox-group v-model="value" class="container" :options="options" @change="onChange" />
  </a-card>
</template>

<script>
const options = [
  { label: 'HP', value: 'stats.hp.base_stat' },
  { label: 'ATK', value: 'stats.attack.base_stat' },
  { label: 'DEF', value: 'stats.defense.base_stat' },
  { label: 'SP ATK', value: 'stats.special-attack.base_stat' },
  { label: 'SP DEF', value: 'stats.special-defense.base_stat' },
  { label: 'SPEED', value: 'stats.speed.base_stat' }
]
export default {
  data () {
    return {
      options,
      value: []
    }
  },
  methods: {
    onChange () {
      this.$store.commit('setFilter', { value: this.value, filter: 'statsFilter' })
      this.$store.dispatch('fetchFilteredList')
    },
    reset () {
      this.value = []
      this.$store.commit('setFilter', { value: this.value, filter: 'statsFilter' })
      this.$store.dispatch('fetchFilteredList')
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
