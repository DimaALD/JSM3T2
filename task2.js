const request = require('request-promise')
const fs = require('fs')
const arrayOfOptions = () => {
    let options = []
    for (let i = 1; i < 26; i++) {
        let option = {
            method: 'GET',
            uri: `https://rickandmortyapi.com/api/character/?page=${i}`,
            json: true
        }
        options.push(option)
    }
    return options
}
async function getAllData() {
    let result = await Promise.all(arrayOfOptions().map(request)).then(body => {
        let characters = body.reduce((prev, current) => {
            return { results: prev.results.concat(current.results) }
        })
        return characters
    })
    return result
}

function printInFile(){
    getAllData().then(body=>{
        fs.writeFileSync('info.json', JSON.stringify(body, null, " "))
    })
}

printInFile()