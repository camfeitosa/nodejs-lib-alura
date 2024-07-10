const fs = require('fs') // lib nativa do node - file system

const caminhoArquivo = process.argv // pega as intruções, links, e adiciona em um array
const link = caminhoArquivo[2]

fs.readFile(link, 'utf-8', (erro, texto) => {
  verificaPalavrasDuplicadas(texto)
}) 

function quebraEmParagrafos(texto){
  const paragrafos = texto.split('\n')
}

function verificaPalavrasDuplicadas(texto){
  const listaPalavras = texto.split(' ') 
  const resultado = {}

  // objeto[propriedade] = valor

  listaPalavras.forEach(palavra => {
    resultado[palavra] = (resultado[palavra] || 0) + 1
  })
  console.log(resultado)
}

