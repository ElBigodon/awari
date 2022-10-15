const { styleSheets } = document;

// noStyles();

function atualizarNome() {
  var nome = prompt("Insira um novo nome");

  var aluno = document.querySelector("h1");
  aluno.textContent = `Parabéns, ${!nome ? "aluno" : nome}!`;
}

function noStyles() {
  for (const key in styleSheets) {
    styleSheets[key].disabled = true;
  }
}

function reStyle(number) {
  noStyles();
  styleSheets[number].disabled = false;
}

// function noStyles() {
//   document.styleSheets[0].disabled = true;
//   document.styleSheets[1].disabled = true;
// }

// function reStyle(n) {
//   noStyles()
//   document.styleSheets[n].disabled = false;
// }
