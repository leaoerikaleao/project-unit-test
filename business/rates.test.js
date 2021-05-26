const rates = require('./rates')
const expect = require('chai').expect

//agrupa os testes
describe('modulo rates', () => {
    it('calc interest rates', () => {
        const teste1010 = rates.calcRates(1000, 0.01, 1)
        expect(teste1010).to.equal(1010)

        const test1020 = rates.calcRates(1000, 0.02, 1)
        expect(test1020).to.equal(1020)
    })
})
