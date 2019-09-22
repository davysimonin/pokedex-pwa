<template>
  <a-card title="Search" :bordered="false">
    <button slot="extra" class="reset" @click="reset()">
      Reset
    </button>
    <a-input placeholder="Pikachu" v-model="searchValue" @change="debouncedSearch" />
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

<style>
.reset {
  color: #eb6345;
  background-color: white;
  border: 1px solid #eb6345;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 14px;
}
</style>
