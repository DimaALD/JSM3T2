const info = require('./info.json')
const fs = require('fs')
function search(obj){
    let resultOfSearch = info.results.filter(page => {
        let result = true
        for(key in obj){
            if(page[key] !== obj[key])
            result = false
        }
        return result
    })
    fs.writeFileSync('res.json', JSON.stringify(resultOfSearch, null, ' '))
}
module.exports.search = search
