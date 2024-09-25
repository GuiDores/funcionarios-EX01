const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcPais = local => local.pais === 'China'
    const funcSalario = valor => valor.salario <= 3000.00
    const funcGenero = sexo => sexo.genero === 'F'

    console.log(funcionarios.filter(funcPais).filter(funcSalario).filter(funcGenero));
})