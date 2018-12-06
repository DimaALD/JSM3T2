const yargs = require('yargs')
const createDB = require('./createDB')
const search = require('./findCharacter')
yargs.command('find [name] [type] [status] [species] [gender]','Input name ',{},(argv)=>{
      let obj = {
          name : argv.name,
          type : argv.type,
          status : argv.status,
          species : argv.species,
          gender : argv.gender
      }
      Object.keys(obj).forEach(key=>{
          if(typeof obj[key] === 'undefined')
          {
            delete obj[key]
          }
      })
        createDB.getAllData().then(body => {
        search.find(body, obj) 
      })
     
})
.alias('n', 'name')
.alias('t','type')
.alias('s', 'status')
.alias('g', 'gender')
.help()
.demandCommand(1, 'You need at least one command before moving on')
.argv