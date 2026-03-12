// q4
// factory de livro
function criarLivro(titulo, autor, paginas) {
    return {
        titulo,
        autor,
        paginas
    }
}

const livros = [
    criarLivro('C++ completo', 'João Silva', 437),
    criarLivro('Java Fácil de Programar', 'Ana Santos', 345),
    criarLivro('Javascript - uma nova programação', 'Maria Santos', 567)
]

console.log(livros);

// q3
// calculadora
const calculadora = {
    resultado: undefined,
    
    soma(numero1, numero2) {
        this.resultado = numero1 + numero2;
    }
}

calculadora.soma(3, 4);
console.log(calculadora.resultado);
