<template>
  <div class="container">
    <div class="img">
      <img class="img" :src="sprite" alt="name">
    </div>
    <a-card class="card" :title="upperCaseFirstLetter()" :bordered="false" :head-style="{'text-align': 'center'}">
      <div class="flex">
        <div class="">
          <p><b>N°</b>: {{ id }}</p>
          <p><b>Height</b>: {{ formatValue(height, 'm') }}</p>
        </div>
        <div class="">
          <p>
            <b>Type</b>:
            <span v-for="type in types" :key="type" class="poketype" :class="type">{{ type.toUpperCase() }}</span>
          </p>
          <p><b>Weight</b>: {{ formatValue(weight, 'kg') }}</p>
        </div>
      </div>
      <a-card class="card" title="Base stats" :bordered="false" :head-style="{'text-align': 'center'}">
        <div class="flex">
          <div class="">
            <p><b>HP</b>: {{ stats.hp.base_stat }} - EV: {{ stats.hp.effort }}</p>
            <p><b>ATK</b>: {{ stats.attack.base_stat }} EV: {{ stats.attack.effort }}</p>
            <p><b>DEF</b>: {{ stats.defense.base_stat }} EV: {{ stats.defense.effort }}</p>
          </div>
          <div class="">
            <p><b>SPD</b>: {{ stats.speed.base_stat }} EV: {{ stats.speed.effort }}</p>
            <p><b>SP ATK</b>: {{ stats['special-attack'].base_stat }} EV: {{ stats['special-attack'].effort }}</p>
            <p><b>SP DEF</b>: {{ stats['special-defense'].base_stat }} EV: {{ stats['special-defense'].effort }}</p>
          </div>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    sprite: { type: String, required: true },
    types: { type: Array, required: true },
    stats: { type: Object, required: true }
  },
  data () {
    return {
      pokemonTypes: []
    }
  },
  methods: {
    upperCaseFirstLetter () {
      const newString = `${this.name[0].toUpperCase()}${this.name.slice(1)}`
      return newString
    },
    formatValue (value, str) {
      if ((value / 10) % 1 !== 0) {
        return (value / 10).toFixed(2) + str
      }
      return (value / 10) + str
    }
  }
}
</script>
<style scoped>
div.flex {
  display: flex;
  justify-content: space-between;
}
div.flexDown {
  align-self: flex-end;
}
div.ant-card-head-title {
  text-align: center;
}
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
  max-width: 350px;
  margin: 0 auto;
}
.url {
  text-align: left;
}
.poketype {
  color: white;
  border: 1px solid black;
  margin-right: 3px;
  padding: 5px;
  border-radius: 12px;
}
.poison {
  background-color: #a040a0;
}
.grass {
  background-color: #78c850;
}
.normal {
  background-color: #a8a878;
}
.fire {
  background-color: #f08030;
}
.fighting {
  background-color: #c03028;
}
.water {
  background-color: #6890f0;
}
.flying {
  background-color: #a890f0;
}
.electric {
  background-color: #f8d030;
}
.ground {
  background-color: #e0c068;
}
.psychic {
  background-color: #f85888;
}
.rock {
  background-color: #b8a038;
}
.ice {
  background-color: #98d8d8;
}
.bug {
  background-color: #a8b820;
}
.dragon {
  background-color: #7038f8;
}
.ghost {
  background-color: #705898;
}
.fairy {
  background-color: #ee99ac;
}
.steel {
  background-color: #b8b8d0;
}
.dark {
  background-color: #705848;
}
</style>
