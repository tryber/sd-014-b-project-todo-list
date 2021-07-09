/* No campo de input será digitado o texto de uma tarefa qualquer e,
 em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input. */

const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');


function addTask() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'classLi'
  taskList.appendChild(li);
  input.value = '';
}

button.addEventListener('click', addTask);

function liGetColor(event) {
  const qtdLi = document.querySelectorAll('.classLi');
  
  taskList.addEventListener('click', function color(event) {
    // all li become white
    for (let index = 0; index < qtdLi.length; index += 1){
      qtdLi[index].classList.remove('colorGray');
      //qtdLi[index].style.backgroundColor = 'white';
    }
    
    //selected li become gray(rgb 128, 128, 128))
    event.target.classList.add('colorGray');
  });
}

taskList.addEventListener('click', liGetColor);
