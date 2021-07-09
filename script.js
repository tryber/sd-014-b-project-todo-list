let tagCriarTarefa = document.getElementById('criar-tarefa');
tagCriarTarefa.addEventListener('click', insertLi);

function insertLi() {
  let tagListaTarefa = document.getElementById('lista-tarefas');
  let criaLi = document.createElement('li');
  let tagTextoTarefa = document.getElementById('texto-tarefa');
  tagListaTarefa.appendChild(criaLi);
  let selectLi = document.getElementsByTagName('li');
  for (let i = 0; i < selectLi.length; i++) {
    const element = selectLi[i];
    element.addEventListener('click', turnGrey);
  }
  criaLi.innerText = tagTextoTarefa.value;
  tagTextoTarefa.value = '';
}

function turnGrey() {
  let selectLi = document.getElementsByTagName('li');
  for (let i = 0; i < selectLi.length; i++) {
    const element = selectLi[i];
    element.style.backgroundColor = 'rgb(128,128,128)';
  }
}
