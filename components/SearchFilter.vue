<template>
  <a-card title="Search" :bordered="false">
    <button slot="extra" class="reset" @click="reset()">
      Reset
    </button>
    <a-input v-model="searchValue" placeholder="Pikachu" @change="debouncedSearch" />
  </a-card>
</template>

<script>
let timeoutId = null

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    debouncedSearch () {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        this.$store.commit('setSearch', this.searchValue)
        this.$store.dispatch('fetchFilteredList')
      }, 500)
    },
    reset () {
      this.searchValue = ''
      this.$store.commit('setSearch', this.searchValue)
      this.$store.dispatch('fetchFilteredList')
    }
  }
}
</script>
