let btn = document.querySelector('#criar-tarefa');
btn.addEventListener('click', addTask);

function addTask() {
  let input = document.querySelector('#texto-tarefa');
  let list = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  li.className = 'tarefa';
  list.appendChild(li);
  selecItem();
  endTask();
  li.innerText = input.value;
  input.value = '';
  console.log(li);
}

function selecItem() {
  let li = document.querySelectorAll('.tarefa');
  for (let i = 0; i < li.length; i += 1) {
    const element = li[i];
    element.addEventListener('click', function printLi() {
      li.forEach((element) => {
        element.style.backgroundColor = 'white';
      });
      element.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}

function endTask() {
  let li = document.querySelectorAll('.tarefa');
  for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.addEventListener('dblclick', function risca(event) {
      if (element.classList.length === 2) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
