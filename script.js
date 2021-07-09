// Declarações iniciais baseado no exercício de Web Storage, dia 4
const inputText = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const listToDo = document.getElementById('lista-tarefas');
console.log(listToDo.children[0]);
// função para adicionar na lista um novo item, capturado pelo input
// aqui preciso do localStorage, pois ao final da inserção de dados, eles estejam lá para quando o usuário abrir novamente, ele ver a lista dele novamente.

function addTask() {
  let inputValue = inputText.value;
  const task = document.createElement('li');
  task.innerText = inputValue;
  listToDo.appendChild(task);
  inputValue = '';
  // if (listToDo.children[0] === 'undefined') {
  //   list
  // }
  // modo hard fica pra depois, esse raciocínio não roda :D
  // localStorage.setItem('tasks',inputValue);
  // localStorage.getItem();
  // localStorage.removeItem();

}

// evento para adicionar quando clicar no botão de criar tarefa
addBtn.addEventListener('click', addTask);

// função já feita no exercício de web storage, que adiciona um item ao teclar enter. Na documentação da Mozilla fala sobre eventos e métodos wich, key. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

