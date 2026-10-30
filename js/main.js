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