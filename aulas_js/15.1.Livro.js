function Livro(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.detalhes = function () {
        return `O livro ${this.titulo} foi escrito por ${this.autor} no ano de ${this.ano}`;
    }
}

const harryPotter = new Livro(
    "Harry Potter e a Pedra Filosofal",
    "J. K. Rowling",
    "1997"
);
console.log(harryPotter.detalhes());
