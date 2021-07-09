function addTextRemove() {
  let getClick = document.getElementById('criar-tarefa');
  getClick.addEventListener('click', function () {
    const getText = document.getElementById('texto-tarefa').value;
    const getList = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = getText;
    getList.appendChild(li);
    getList.addEventListener('click', colorizeText);
    document.getElementById('texto-tarefa').value = '';
  });
}
addTextRemove();
function colorizeText(event) {
  event.target.classList.add('selectedItem');
}
