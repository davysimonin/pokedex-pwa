<template>
  <div class="">
    <SearchFilter />
    <TypeFilter />
    <StatsFilter />
    <PhysicalFilter />
  </div>
</template>

<script>
import PhysicalFilter from './PhysicalFilter'
import TypeFilter from './TypeFilter'
import SearchFilter from './SearchFilter'
import StatsFilter from './StatsFilter'

export default {
  components: { PhysicalFilter, TypeFilter, SearchFilter, StatsFilter }
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
.reset:hover {
  background-color: #eb6345;
  color: white;
  transition: background-color 0.5s;
}
</style>
