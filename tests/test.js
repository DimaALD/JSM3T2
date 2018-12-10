const chai = require(`chai`)
const chaiAsPromise = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromise)
const createDB = require('../createDB')
const find = require('../findCharacter')

describe('Test createDB', () => {
  it(`Test that length of array of options is 25`, async () => {
    const pages = await createDB.arrayOfOptions
    expect(pages.length).to.equal(25)
  })
  it(`Test that allCharacters is Object`, async () => {
    const array = await createDB.allCharacters
    expect(array).to.be.an('Object')
  })
  it(`Test that allData json has properties info and results`, async () => {
    const json = await createDB.allData
    json.forEach(body => {
      expect(body).to.have.property('results')
    })
  })
})
describe(`Test findChar`, () => {
  it(`Test method checkParams`, () => {
    const obj = {
      name: 'Dima',
      surname: undefined
    }
    find.checkParams(obj)
    expect(obj).not.have.property('surname')
    expect(obj).have.property('name')
  })
})
