const { MongoClient } = require('mongodb')
const { createReadStream } = require('fs')
const readline = require('readline')

const [_, __, caminhoTxt, poolSize = '5'] = process.argv
const cliente = await MongoClient.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  poolSize: Number(poolSize),
})

async function main() {
  const colecao = `extracao_${Date.now()}`
  const leitor = readline.createInterface({
    input: createReadStream(caminhoTxt),
    crlfDelay: Infinity,
  })

  return leitor
  .on('line', processar)
  .on('end', finalizar)
}

async function processar(linha) {
  if (!/^\|.+\|$/.test(linha)) return null;

  const [_, codigo, ...dados] = linha.split(/\|/g)
  const documento = dados.reduce((acumulador, atual, indice) =>
    ({ [indice + 1]: atual, ...acumulador }), { 0: codigo })

  await cliente
  .db('spedrizer')
  .collection(colecao)
  .insertOne(documento)
}

async function finalizar() {
  await cliente.close()
}

main()
