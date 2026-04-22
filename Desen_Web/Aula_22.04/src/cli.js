#!/usr/bin/env node

import chalk from 'chalk';
import { pegaArquivo } from './index.js';

const caminho = process.argv;

async function processaTexto(argumentos) {
  const caminhoArquivo = argumentos[2];

  if (!caminhoArquivo) {
    console.log(chalk.red('❌ Você precisa passar o caminho do arquivo'));
    return;
  }

  try {
    const resultado = await pegaArquivo(caminhoArquivo);
    console.log(chalk.yellow('\n📎 Links encontrados:\n'));
    console.log(resultado);
  } catch (erro) {
    console.log(chalk.red('Erro:', erro.message));
  }
}

processaTexto(caminho);