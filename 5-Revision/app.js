import chalk from "chalk"
import fs from "fs"

function errorMessage(error) {
    throw new Error(chalk.bgRedBright(error))
}

// 📌 1. Usando Promise (.then / .catch)
function getFilePromise(path) {
    fs.promises
        .readFile(path, "utf-8")
        .then((texto) => console.log(chalk.green(texto)))
        .catch((error) => errorMessage(error))
}

// 📌 2. Usando async/await
async function getFileAsync(path) {
    try {
        const texto = await fs.promises.readFile(path, 'utf-8')
        console.log(chalk.blue(texto))
    } catch (error) {
        errorMessage(error)
    }
}

// 📌 Chamadas
getFilePromise("./arquivos/arquivo.md")
getFileAsync("./arquivos/arquivo.md")