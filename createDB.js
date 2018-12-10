const request = require('request-promise')

const arrayOfOptions = request.get('https://rickandmortyapi.com/api/character/', { json: true }).then(body => {
  let options = []
  for (let i = 1; i < body.info.pages + 1; i++) {
    let option = {
      method: 'GET',
      uri: `https://rickandmortyapi.com/api/character/?page=${i}`,
      json: true
    }
    options.push(option)
  }
  return options
})

const allData = arrayOfOptions.then(body => {
  let data = Promise.all(body.map(request))
  return data
})

const allCharacters = allData.then(body => {
  let characters = body.reduce((prev, current) => {
    return { results: prev.results.concat(current.results) }
  })
  if (characters.length !== 0) {
    console.log(`DB was uploaded successfuly`)
    return characters
  } else {
    throw new Error(`DB wasn't uploaded`)
  }
})
module.exports = {
  allCharacters,
  arrayOfOptions,
  allData
}
