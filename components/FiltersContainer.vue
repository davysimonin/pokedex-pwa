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
