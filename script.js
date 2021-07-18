function newTask() {
    const info = document.getElementById('texto-tarefa').value
    const list = document.getElementById('lista-tarefas');
    const toDo = document.createElement('li');
    toDo.innerHTML = info;
    if (toDo !== '') {
      list.appendChild(toDo);
    }
    document.querySelector('#texto-tarefa').value = '';
    
}
//Referências: https://www.w3schools.com/jsref/prop_text_value.asp