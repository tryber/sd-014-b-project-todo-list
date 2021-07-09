window.onload = function() {
    let addTask = document.getElementById('criar-tarefa');
    addTask.addEventListener('click', addTarefa);

    function addTarefa() {
        let input = document.getElementById('texto-tarefa');
        let newTask = document.createElement('li');
        let position = document.getElementById('lista-tarefas');

        newTask.innerText = input.value;
        position.appendChild(newTask)
    }
}