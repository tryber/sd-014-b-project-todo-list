const query = document.querySelector.bind(document);
const queries = document.querySelectorAll.bind(document);

function olList() {
  let localList = document.querySelector('#local-lista');
  let oList = document.createElement('ol');
  oList.id = 'lista-tarefas';

  localList.appendChild(oList);
}
olList();
