//calcular juros
const calcRates = (p, i, n) => p * Math.pow(1 + i, n)

module.exports = {
    calcRates
}