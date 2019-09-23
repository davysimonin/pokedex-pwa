<template>
  <div class="">
    <SearchFilter />
    <FilterType />
    <FilterPhysical />
  </div>
</template>

<script>
import FilterPhysical from './FilterPhysical'
import FilterType from './FilterType'
import SearchFilter from './SearchFilter'

export default {
  components: { FilterPhysical, FilterType, SearchFilter }
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
