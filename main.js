/* eslint-disable no-unused-expressions */
const yargs = require('yargs')
const createDB = require('./createDB')
const search = require('./findCharacter')

yargs.command('find [name] [type] [status] [species] [gender] [origin] [location]', 'Input options to find a character', {}, (argv) => {
  let mainParams = {
    name: argv.name,
    type: argv.type,
    status: argv.status,
    species: argv.species,
    gender: argv.gender
  }
  let addParams = {
    origin: argv.origin,
    location: argv.location
  }
  mainParams = search.checkParams(mainParams)
  addParams = search.checkParams(addParams)

  createDB.allCharacters.then(body => {
    search.findCharacters(body, mainParams, addParams)
  })
}).alias({ 'n': 'name',
  't': 'type',
  's': 'status',
  'g': 'gender',
  'o': 'origin',
  'l': 'location' })
  .help()
  .demandCommand(1, 'You need at least one command before moving on')
  .argv
