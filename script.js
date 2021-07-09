let tagCriarTarefa = document.getElementById('criar-tarefa');
tagCriarTarefa.addEventListener('click', insertLi);

function insertLi() {
  let tagListaTarefa = document.getElementById('lista-tarefas');
  let criaLi = document.createElement('li');
  let tagTextoTarefa = document.getElementById('texto-tarefa');
  tagListaTarefa.appendChild(criaLi);
  criaLi.innerText = tagTextoTarefa.value;
  tagTextoTarefa.value = '';
}
