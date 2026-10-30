let qtdeLinhas = localStorage.length
console.log(`Quantidade de Linhas: ${qtdeLinhas}`);

//ler
let tema = localStorage.getItem("tema");
console.log(tema);

// Salvar/Atualizar
localStorage.setItem("tema", "light");
localStorage.setItem("criadoEm", new Date());
localStorage.setItem("atualizadoEm", new Date());
localStorage.setItem("id", 1234);
localStorage.setItem("ligado", true);
localStorage.setItem("usuario", "diegobarros");

// Excluir 
localStorage.removeItem("id");
//localStorage.clear();

let produtos = [];

let iphone18ProMax ={
    id:1,
    name: "iPhone 18 Pro Max",
    preco: 13000,
    quantidade: 50
}

let macbookPro = {
    id: 2,
    name: "Macbook Pro",
    preco: 42000,
    quantidade: 20
}

produtos.push(iphone18ProMax,macbookPro);

console.table(produtos);

let produtosTexto = JSON.stringify(produtos);
localStorage.setItem("produtos", produtosTexto);

produtos = JSON.parse(localStorage.getItem("produtos"));
console.log(produtos);

let ipad = {
    id: 3,
    nome : "iPad Pro",
    preco: 15000
}

produtos.push(ipad);
localStorage.setItem("produtos", JSON.stringify(produtos));