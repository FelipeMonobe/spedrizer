const fs = require('fs')
const json2xls = require('json2xls')
const { promisify } = require('util')

const _readFile = promisify(fs.readFile)

async function main() {
  const [_, __, caminhoTxt, codigoPai, ...codigosFilhos] = process.argv
  const padraoLinha = /^\|.+\|$/gm
  const textoCru = await _readFile(caminhoTxt, 'utf-8')
  const linhas = textoCru.match(padraoLinha)
  const linhasParseadas = linhas.map((linha, indiceLinha) => {
    const colunas = linha.split(/\|/g)
    const dados = colunas.slice(1, colunas.length - 1)
    const linhaJson = dados.reduce((acumulador, atual, indiceDado) => {
      return { [indiceDado + 1]: atual, ...acumulador }
    }, { 0: indiceLinha + 1 })

    return linhaJson
  })
  const linhasSelecionadas = linhasParseadas.filter((linha) => {
    return [codigoPai, ...codigosFilhos].includes(linha['1'])
  })

  const xlsx = json2xls(linhasSelecionadas)
  const nomeArquivo = `extracao_${Date.now()}.xlsx`

  return fs.writeFileSync(nomeArquivo, xlsx, 'binary')
}

main()
