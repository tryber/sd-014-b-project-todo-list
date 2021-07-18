const
function enviarTarefa() {
  const tarefa = document.querySelector('#texto-tarefa').innerText;
  console.log(tarefa);
}

const creatTask = document.querySelector('#criar-tarefa');
creatTask.addEventListener('click', enviarTarefa);