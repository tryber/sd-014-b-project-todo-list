const listaDeTarefas = document.querySelector('#lista-tarefas');
const addTarefasBtn = document.querySelector('#criar-tarefa');
const deleteAllTasksBtn = document.querySelector('#apaga-tudo');
const deleteCompletedBtn = document.querySelector('#remover-finalizados');
const deleteSelectedBtn = document.querySelector('#remover-selecionado');
const saveBtn = document.querySelector('#salvar-tarefas');
const upBtn = document.querySelector('#mover-cima');
const downBtn = document.querySelector('#mover-baixo');

let data = null;
let selectedTask = document.querySelector('.selected');

window.onload = recoverData;


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

function deleteCompletedTasks() {
	const completedTasks = document.querySelectorAll('.completed');
	for (let i = completedTasks.length - 1; i >= 0; i -= 1) {
		const taskComplete = completedTasks[i];
		if (taskComplete.classList.contains('selected')) {
			selectedTask = null;
		}
		listaDeTarefas.removeChild(taskComplete);
	}
}

function deleteSelectedTask() {
	if (selectedTask !== null) {
		const task = selectedTask;
		task.classList.remove('selected');
		listaDeTarefas.removeChild(task);
		selectedTask = null;
	}
}

function saveData() {
	const data = listaDeTarefas.innerHTML;
	localStorage.setItem('data', JSON.stringify(data));
}

function addListenerToRecoveredTasks(lis) {
	for (let i = 0; i < lis.length; i += 1) {
		const li = lis[i];
		li.addEventListener('click', setSelectedTask);
		li.classList.remove('selected');
	}
}

function recoverData() {
	if (window.localStorage.getItem('data')){
		const data = JSON.parse(window.localStorage.getItem('data'));
		listaDeTarefas.innerHTML = data;
		const tasks = document.querySelectorAll('.task');
		addListenerToRecoveredTasks(tasks);
	}
}

// Parte do Codigo foi retirado do stackoverflow: https://stackoverflow.com/a/34914096

function moveUp(element) {
	element = selectedTask;
	if (element !== null){
		if(element.previousElementSibling) {
			element.parentNode.insertBefore(element, element.previousElementSibling);
		}	
	}
}

function moveDown(element) {
	element = selectedTask;
	if (element !== null){
		if (element.nextElementSibling) {
			element.parentNode.insertBefore(element.nextElementSibling, element);
		}	
	}
}

// Buttons

addTarefasBtn.addEventListener('click', getTaskValue);
deleteAllTasksBtn.addEventListener('click', deleteAllTasks);
deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);
deleteSelectedBtn.addEventListener('click', deleteSelectedTask);
saveBtn.addEventListener('click', saveData);
upBtn.addEventListener('click', moveUp);
downBtn.addEventListener('click', moveDown);
