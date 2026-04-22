import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^\s$.?#].[^\s]*)\)/gm;
  const resultados = [];

  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    resultados.push({ [temp[1]]: temp[2] });
  }

  return resultados.length === 0
    ? 'Não há links no arquivo'
    : resultados;
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho.'));
}

export async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';

  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}