const AddButton = document.querySelector('#criar-tarefa');
const TaskSelect = document.querySelector('#lista-tarefas');
// Adicionar tarefa ao clicar no botão
AddButton.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const AddList = document.createElement('li');
  if (input.value === '') alert('Adicione uma tarefa');
  AddList.innerText = input.value;
  TaskSelect.appendChild(AddList);
  input.value = '';
});
// Colorir tarefa selecionada
TaskSelect.addEventListener('click', (selected) => {
  const TaskSelected = document.querySelectorAll('li');
  for (const i of TaskSelected) { i.style.backgroundColor = 'white'; }
  selected.target.style.backgroundColor = 'rgb(128,128,128)';
});
// Apagar tudo
const EraseAllButton = document.querySelector('#apaga-tudo');
EraseAllButton.addEventListener('click', () => {
  TaskSelect.parentNode.removeChild(TaskSelect);
});
// Selected via .toggle(Bel Albuquerque, 2021)
function taskcompleted(event) {
  event.target.classList.toggle('completed');
}
const DoneTask = document.querySelector('ol');
DoneTask.addEventListener('dblclick', taskcompleted);
// Remover finalizados
const RemoveDone = document.querySelector('#remover-finalizados');
RemoveDone.addEventListener('click', () => {
  console.log('entrou');
  const completed = document.querySelectorAll('.completed');
  console.log(completed);
  for (let i = 0; i < completed.length; i += 1) {
    console.log(completed[i]);
    completed[i].remove();
  }
});
