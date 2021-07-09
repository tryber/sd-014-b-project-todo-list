const listaDeTarefas = document.querySelector('#lista-tarefas');
const addTarefasBtn = document.querySelector('#criar-tarefa');

function addTaskToList(task) {
	const li = document.createElement('li');
	li.innerHTML = task;
	listaDeTarefas.appendChild(li);
}

function getTaskValue() {
	const inputText = document.querySelector('#texto-tarefa').value;
	addTaskToList(inputText);
	document.querySelector('#texto-tarefa').value = '';
}

addTarefasBtn.addEventListener('click', getTaskValue);
