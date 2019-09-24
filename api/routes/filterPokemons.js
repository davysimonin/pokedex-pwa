const express = require('express')
const router = express.Router()
const Pokemon = require('../schemas/Pokemon')

router.post('/', async (req, res, next) => {
  const physicalFilter = {}
  let typesFilter = {}
  let searchFilter = ''
  const statsFilter = {}
  const { search, types, physical, stats } = req.body.filters

  if (search.length) {
    searchFilter = { $text: { $search: search } }
  }
  if (physical.length) {
    physical.forEach(filter => (physicalFilter[filter] = -1))
  }
  if (types.length) {
    typesFilter = { types: { $all: types } }
  }
  if (stats.length) {
    stats.forEach((stat) => {
      statsFilter[stat] = -1
    })
  }

  const findQuery = { ...searchFilter, ...typesFilter }
  const sortQuery = { ...statsFilter, ...physicalFilter }

  const query = Pokemon.find(findQuery).sort(sortQuery)

  const response = await query.exec()
  res.json(response)
})

module.exports = router
