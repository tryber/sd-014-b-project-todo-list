function addTextRemove() {
  let getClick = document.getElementById('criar-tarefa');
  getClick.addEventListener('click', function () {
    const getText = document.getElementById('texto-tarefa').value;
    const getList = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
    li.innerText = getText;
    getList.appendChild(li);
    getList.addEventListener('click', colorizeText);
    getList.addEventListener('dblclick', markAsCompleted);
    document.getElementById('texto-tarefa').value = '';
  });
}
addTextRemove();

function colorizeText(event) {
  let itemSelected = document.querySelectorAll('li');
  itemSelected.forEach((element) => {
    element.classList.remove('selectedItem');
  });
  event.target.classList.add('selectedItem');
}

function markAsCompleted(event) {
  const itemMarked = event.target.classList;
  console.log(itemMarked);
  if (itemMarked.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
