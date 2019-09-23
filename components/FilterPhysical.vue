<template>
  <a-card title="Physical" :bordered="false">
    <button slot="extra" class="reset" @click="reset()">
      Reset
    </button>
    <a-checkbox-group v-model="value" class="container" :options="options" @change="onChange" />
  </a-card>
</template>

<script>
const options = [
  { label: 'Height', value: 'height' },
  { label: 'Weight', value: 'weight' }
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
      this.$store.commit('setFilter', { value: this.value, filter: 'physicalFilter' })
      this.$store.dispatch('fetchFilteredList')
    },
    reset () {
      this.value = []
      this.$store.commit('setFilter', { value: this.value, filter: 'physicalFilter' })
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
