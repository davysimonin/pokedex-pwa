const express = require('express')
const router = express.Router()
const Pokemon = require('../schemas/Pokemon')

router.post('/', async (req, res, next) => {
  const physicalFilter = {}
  let typesFilter = {}
  let searchFilter = ''
  const { search, types, physical } = req.body.filters

  if (search.length) {
    searchFilter = { $text: { $search: search } }
  }
  if (physical.length) {
    physical.forEach(filter => (physicalFilter[filter] = -1))
  }
  if (types.length) {
    typesFilter = { types: { $all: types } }
  }
  const findQuery = { ...searchFilter, ...typesFilter }
  const query = Pokemon.find(findQuery).sort(physicalFilter)

  const response = await query.exec()
  res.json(response)
})

module.exports = router
