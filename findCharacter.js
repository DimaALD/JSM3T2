/* eslint-disable no-undef */
const fs = require('fs')

function checkParams (obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'undefined') {
      delete obj[key]
    }
  })
  if (Object.keys(obj).length !== 0) { return obj }
}
function findCharacters (list, mainParams, addParamsams) {
  let resultOfSearch = list.results.filter(page => {
    let result = true
    if (mainParams) {
      if (mainParams.name && !page.name.includes(mainParams.name)) {
        result = false
      }
      for (key in mainParams) {
        if (key !== 'name' && mainParams[key] && page[key] !== mainParams[key]) { result = false }
      }
    }
    if (result && addParamsams) {
      for (key in addParamsams) {
        if (page[key].name !== addParamsams[key]) { result = false }
      }
    }
    return result
  })
  if (resultOfSearch.length !== 0) {
    console.log('Characters with matched parametres was found')
    printInJSON(resultOfSearch)
  } else {
    console.log('No matches. Check inputted parametres')
  }
}
function printInJSON (json) {
  if (fs.existsSync('./Result')) {
    fs.writeFileSync('./Result/character.json', JSON.stringify(json, null, ' '))
  } else {
    fs.mkdirSync('./Result')
    fs.writeFileSync('./Result/character.json', JSON.stringify(json, null, ' '))
  }
  console.log('character.json file was created ')
}
module.exports.checkParams = checkParams
module.exports.findCharacters = findCharacters
