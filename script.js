const listaDeTarefas = document.querySelector('#lista-tarefas');
const addTarefasBtn = document.querySelector('#criar-tarefa');
let selectedTask = document.querySelector('.selected');

function addTaskToList(task) {
	const li = document.createElement('li');
	li.innerHTML = task;
	li.classList.add('task');
	li.addEventListener('click', setSelectedTask);
	listaDeTarefas.appendChild(li);
}

function getTaskValue() {
	const inputText = document.querySelector('#texto-tarefa').value;
	addTaskToList(inputText);
	document.querySelector('#texto-tarefa').value = '';
}

function setSelectedTask(event) {
	if (selectedTask !== null) {
		selectedTask = document.querySelector('.selected');
		selectedTask.classList.remove('selected');
		const newTaskSelected = event.target;
		newTaskSelected.classList.add('selected');
		selectedTask = document.querySelector('.selected');
	} else {
		const newTaskSelected = event.target;
		newTaskSelected.classList.add('selected');
		selectedTask = document.querySelector('.selected');
	}
	selectedTask.addEventListener('dblclick', setCompletedTask)
}

function setCompletedTask(event) {
	const task = event.target;
	if (task.classList.contains('completed')) {
		task.classList.remove('completed');
	} else {
		task.classList.add('completed');
	}
}




// Buttons

addTarefasBtn.addEventListener('click', getTaskValue);
