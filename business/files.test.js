const files = require('./files')
expect = require('chai').expect
const fs = require('fs')
const sinon = require('sinon')

// Stub torna fake, possibilita que vc defina a saída do método

// Não é função do teste unitário saber se o Readdir funciona, 
// o teste verifica se a chamada do método está correta e se o 
// path corresponde ao esperado. 
describe('reading directory', () => {
    // volta a fs como era antes, pois 2 stubs estão sendo realizado
    afterEach(done => {
        fs.readdir.restore()
        done()
    })
    it('reads a directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, cb) => {
            cb(null, ['file.txt'])
        })
        const path = './'
        return files.readdir(path).then(list => {
            expect(list.length).to.equal(1)
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })

    it('fails reading a directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, cb) => {
            cb('error')
        })
        const path = './'
        return files.readdir(path).
            catch(err => {
                expect(err).to.equal('error')
                expect(fs.readdir.getCall(0).args[0]).to.equal(path)
            })
    })
})