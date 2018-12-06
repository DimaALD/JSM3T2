/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
const json = require('./res.json')

function checkParams (obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'undefined') {
      delete obj[key]
    }
  })
  if (Object.keys(obj).length !== 0) { return obj }
}
addPar = checkParams(addPar)
function findCharacter (array, obj, addPar) {
  let resultOfSearch = array.results.filter(page => {
    let result = false
    if (page.name.includes(obj.name)) {
      result = true
    }
    for (key in obj) {
      if (key !== 'name' && page[key] !== obj[key]) { result = false }
    }
    if (result && addPar) {
      for (key in addPar) {
        if (page[key].name !== addPar[key]) { result = false }
      }
    }
    return result
  })

  return resultOfSearch
}
console.log(findCharacter(json, obj, addPar))
