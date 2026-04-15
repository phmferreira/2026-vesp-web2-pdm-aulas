function gerarRelatorioInventario(itens) {
    let valorTotalGeral = 0;
    const itensEmEstoqueBaixo = [];
    const detalhesPorItem = [];

    for (const item of itens) {
        if (item.quantidade <= 5) {
            itensEmEstoqueBaixo.push(item.nome);
        }
        item.valorEstoque = item.quantidade * item.precoUnitario;
        detalhesPorItem.push(item);
        valorTotalGeral += item.valorEstoque;
    }

    return {
        valorTotalGeral,
        itensEmEstoqueBaixo,
        detalhesPorItem
    }
}

const inventarioLoja = [
  { nome: "Smartphone", quantidade: 10, precoUnitario: 1200.00 },
  { nome: "Fone de Ouvido", quantidade: 3, precoUnitario: 150.00 },
  { nome: "Carregador", quantidade: 15, precoUnitario: 50.00 },
  { nome: "Cabo USB", quantidade: 5, precoUnitario: 25.00 },
  { nome: "Mouse", quantidade: 2, precoUnitario: 80.00 }
];

console.log(gerarRelatorioInventario(inventarioLoja));
