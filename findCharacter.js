
const fs = require('fs')
function find(json,obj){
    let resultOfSearch = json.results.filter(page => {
        let result = true
        for(key in obj){
            if(page[key] !== obj[key])
            result = false
        }
        return result
    })
    fs.writeFileSync('res1.json', JSON.stringify(resultOfSearch, null, ' '))
}
module.exports.find = find
