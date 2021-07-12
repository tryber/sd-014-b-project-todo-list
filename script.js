/* eslint-disable no-constant-condition */
function alterColor() {
  const getTasks = document.querySelectorAll('.task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].classList.remove('selected');
  }
}
// eslint-disable-next-line max-lines-per-function
function addTask() {
  const getOl = document.querySelector('#lista-tarefas');
  const getButtonTask = document.querySelector('#criar-tarefa');
  const getInput = document.querySelector('#texto-tarefa');
  // eslint-disable-next-line prefer-arrow-callback
  getButtonTask.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = getInput.value;
    createLi.addEventListener('click', (event) => {
      alterColor();
      event.target.classList.add('selected');
      // eslint-disable-next-line no-param-reassign
    });
    getOl.appendChild(createLi);
    getInput.value = '';
  });
}
addTask();
