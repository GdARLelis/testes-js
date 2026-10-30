let qtdeLinhas = localStorage.length
console.log(`Quantidade de Linhas: ${qtdeLinhas}`);

let tema = localStorage.getItem("tema");
console.log(tema);

localStorage.setItem("tema", "light");