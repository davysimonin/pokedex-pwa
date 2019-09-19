<template>
  <div class="container">
    <a-card class="card" :title="upperCaseFirstLetter()" :bordered="false">
      <p class="url">{{ url }}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ['name', 'url'],
  methods: {
    upperCaseFirstLetter () {
      const newString = `${this.name[0].toUpperCase()}${this.name.slice(1)}`
      return newString
    }
  }
}
</script>
<style scoped>
div.container {
  margin: 12px;
  padding: 5px;
  border: 2px solid #eb6345;
  border-radius: 20px;
}
.card {
  width: 300px;
  text-align: center;
}
.url {
  text-align: left;
}
</style>
