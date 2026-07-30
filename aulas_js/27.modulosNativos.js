// const fs = require('node:fs');
const fs = require('node:fs/promises');
const { log } = require('node:console');

// fs.writeFile('ola.txt', 'Olá!',
//     (err) => {
//         if (err) throw err
//         log('Arquivo escrito com sucesso!')
//     }
// )

// fs.writeFile('OlaPromise.txt', 'Olá, mundo!')
//     .then(() => console.log('Arqiuivo escrito com sucesso!'))
//     .catch(err => console.log(err))

async function escrever() {
    try {
        await fs.writeFile('OlaComAwait.txt', 'Olá mundo!');
        console.log('Arquivo escrito com sucesso!');
    } catch (err) {
        log(err);
    }   
}
escrever();

// fs.readFile('ola.txt', 'utf8',
//     (err, data) => {
//         if (err) throw err
//         log(data);
//     }
// )
