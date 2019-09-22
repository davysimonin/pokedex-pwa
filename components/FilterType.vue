<template>
  <a-card title="Types" :bordered="false">
    <button slot="extra" class="reset" @click="reset()">
      Reset
    </button>
    <a-checkbox-group v-model="value" class="container" :options="options" @change="onChange" />
  </a-card>
</template>

<script>
const options = [
  { label: 'Normal', value: 'normal' },
  { label: 'Fire', value: 'fire' },
  { label: 'Fighting', value: 'fighting' },
  { label: 'Water', value: 'water' },
  { label: 'Flying', value: 'flying' },
  { label: 'Grass', value: 'grass' },
  { label: 'Poison', value: 'poison' },
  { label: 'Electric', value: 'electric' },
  { label: 'Ground', value: 'ground' },
  { label: 'Psychic', value: 'psychic' },
  { label: 'Rock', value: 'rock' },
  { label: 'Ice', value: 'ice' },
  { label: 'Bug', value: 'bug' },
  { label: 'Dragon', value: 'dragon' },
  { label: 'Ghost', value: 'ghost' },
  { label: 'Steel', value: 'steel' },
  { label: 'Fairy', value: 'fairy' },
  { label: 'Dark', value: 'dark' }
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
      this.$store.commit('setFilter', { value: this.value, filter: 'typeFilter' })
      this.$store.dispatch('fetchFilteredList')
    },
    reset () {
      this.value = []
      this.$store.commit('setFilter', { value: this.value, filter: 'typeFilter' })
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
  .reset {
    color: #eb6345;
    background-color: white;
    border: 1px solid #eb6345;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 14px;
  }
  .reset:hover {
    background-color: #eb6345;
    color: white;
    transition: background-color 0.5s;
  }
</style>
