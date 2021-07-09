const listaDeTarefas = document.querySelector('#lista-tarefas');
const addTarefasBtn = document.querySelector('#criar-tarefa');
const deleteAllTasksBtn = document.querySelector('#apaga-tudo');
let selectedTask = document.querySelector('.selected');

function addTaskToList(task) {
	const li = document.createElement('li');
	li.innerHTML = task;
	li.classList.add('task');
	li.addEventListener('click', setSelectedTask);
	listaDeTarefas.appendChild(li);
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

function getTaskValue() {
	const inputText = document.querySelector('#texto-tarefa').value;
	addTaskToList(inputText);
	document.querySelector('#texto-tarefa').value = '';
}

function deleteAllTasks() {
	const tasks = document.querySelectorAll('.task');
	for (let i = tasks.length - 1; i >= 0; i -= 1) {
		const task = listaDeTarefas.children[i];
		listaDeTarefas.removeChild(task);
	}
}





// Buttons

addTarefasBtn.addEventListener('click', getTaskValue);
deleteAllTasksBtn.addEventListener('click', deleteAllTasks);
