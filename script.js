function addTextRemove() {
  let getClick = document.getElementById('criar-tarefa');
  getClick.addEventListener('click', function () {
    let getText = document.getElementById('texto-tarefa').value;
    let getList = document.getElementById('lista-tarefas');
    let li = document.createElement('li');
    li.innerText = getText;
    getList.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}
addTextRemove();


