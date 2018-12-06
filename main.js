/* eslint-disable no-unused-expressions */
const yargs = require('yargs')
const createDB = require('./createDB')
const search = require('./findCharacter')
yargs.command('find [name] [type] [status] [species] [gender] [origin] [location]', 'Input name ', {}, (argv) => {
  let obj = {
    name: argv.name,
    type: argv.type,
    status: argv.status,
    species: argv.species,
    gender: argv.gender,
    origin: argv.origin
  }
  let addPar = {
    origin: argv.origin,
    location: argv.location
  }
  obj = search.checkParams(obj)
  addPar = search.checkParams(addPar)
  createDB.allCharacters.then(body => {
    search.findCharacters(body, obj, addPar)
  })
})
  .alias('n', 'name')
  .alias('t', 'type')
  .alias('s', 'status')
  .alias('g', 'gender')
  .alias('o', 'origin')
  .help()
  .demandCommand(1, 'You need at least one command before moving on')
  .argv
