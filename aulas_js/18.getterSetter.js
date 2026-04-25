function criarProduto(nome, preco, qntEstoque) {
    return {
        nome,
        preco,
        get estoque() {
            return qntEstoque;
        },
        set estoque(valor) {
            if (typeof valor !== "number") {
                throw new TypeError('O valor deve ser numérico!')
            }
            qntEstoque = valor;
        }
    }
}

const placaMae = criarProduto('Asus placa', 500, 50);
console.log(placaMae);
console.log(placaMae.estoque);
placaMae.estoque = 40;
console.log(placaMae.estoque);

// exemplificar usando a função construtora
function Produto(nome, preco, qntEstoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque',
        {
            enumerable: true,
            configurable: true,
            get: function () {
                return qntEstoque;
            },
            set: function (valor) {
                if (typeof valor !== 'number') {
                    throw new TypeError('O valor deve ser numérico!');
                }
                qntEstoque = valor;
            }
        }
    )
}

const placaVideo = new Produto('MSI RTX 3050', 1500, 35);
console.log(placaVideo);
// exemplo de get
console.log(placaVideo.estoque);
// exemplo de set
placaVideo.estoque = 60;

