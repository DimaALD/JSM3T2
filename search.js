
const fs = require('fs')
function search(json,obj){
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
module.exports.search = search
