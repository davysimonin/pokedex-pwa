<template>
  <div class="container">
    <div class="img">
      <img class="img" :src="sprite" alt="name">
    </div>
    <a-card class="card" :title="upperCaseFirstLetter()" :bordered="false" style="padding: 0 !important;">
      <p><b>Type</b>: {{ formatTypes() }}</p>
      <p><b>N°</b>: {{ id }}</p>
      <p><b>Height</b>: {{ height }}</p>
      <p><b>Weight</b>: {{ weight }}</p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'height', 'weight', 'sprite', 'type'],
  methods: {
    upperCaseFirstLetter () {
      const newString = `${this.name[0].toUpperCase()}${this.name.slice(1)}`
      return newString
    },
    formatTypes () {
      const types = this.type.map(el => el.type.name)
      return types.join('/').toUpperCase()
    }
  }
}
</script>
<style scoped>
div.img {
  text-align: center;
}
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
div.ant-card-head-title {
  padding: 0 !important;
}
.url {
  text-align: left;
}
</style>
