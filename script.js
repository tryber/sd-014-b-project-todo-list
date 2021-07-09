function addTask() {
  const getOl = document.querySelector('#lista-tarefas');
  const getButtonTask = document.querySelector('#criar-tarefa');
  const getInput = document.querySelector('#texto-tarefa');
  // eslint-disable-next-line prefer-arrow-callback
  getButtonTask.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.innerHTML = getInput.value;
    getOl.appendChild(createLi);
    getInput.value = '';
  });
}
addTask();
