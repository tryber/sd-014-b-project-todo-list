function mark(element) {
  let li = document.querySelectorAll('li');
  element.addEventListener('dblclick', function risca(event) {
    event.target.classList.toggle('completed');
  });
}

function selecItem() {
  let li = document.querySelectorAll('li');
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

let btn = document.querySelector('#criar-tarefa');
btn.addEventListener('click', addTask);

function addTask() {
  let input = document.querySelector('#texto-tarefa');
  let list = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  list.appendChild(li);
  selecItem();
  mark(li);
  li.innerText = input.value;
  input.value = '';
  console.log(li);
}
