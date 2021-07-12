window.onload = function (){
  getLocalStorage();
}

    let getButton = document.querySelector('#criar-tarefa');
    let getList = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');
    let getClearTasks = document.querySelector('#apaga-tudo');
    let buttonRemoveTasks = document.querySelector('#remover-finalizados');
    let buttonRemoveSelected = document.querySelector('#remover-selecionado');
    

    getButton.addEventListener('click', createNewTask);

    function createNewTask (){
        let listItem = document.createElement('li');
        listItem.className = 'newTask'
        listItem.innerHTML = getInput.value;
        getList.appendChild(listItem);
        getInput.value = ''; // retorna o input para um valor vazio.

    }


    getList.addEventListener ('click', newColor);

    function newColor(color){
       
      let setAttribute = color.target.setAttribute('style', 'background-color: rgb(128, 128, 128)'); // retirado de https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute onde atribuo um novo valor para style background diretamente no meu arquivo html

  }
    


    getList.addEventListener ('click', removeColor);

    function removeColor(event){
   
    let arrayList = document.getElementsByClassName('newTask');
    
        for(let index = 0; index < arrayList.length; index += 1){
            arrayList[index].style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';


  
    }

    getList.addEventListener ('click', selectedItem);

    function selectedItem(event) {
      const selectedItens = getList.children;
      for (let index = 0; index < selectedItens.length; index += 1) {
        if (selectedItens[index].classList.contains('selected')) {
          selectedItens[index].classList.remove('selected');
        }
      }
      event.target.classList.add('selected');
    }


    getList.addEventListener('dblclick', clickCompleted);
     
        function clickCompleted(event){
        if (event.target.classList.contains('completed')) {
          event.target.classList.remove('completed');
        } else {
          event.target.classList.add('completed');
        }
    }

    function clearAll() {
        getClearTasks.addEventListener('click', () => {
          while (getList.firstChild) {
            getList.removeChild(getList.firstChild);
          }
        });
      }
      clearAll();

    

    buttonRemoveTasks.addEventListener('click', removeTasks);

   
   

    function removeTasks(){

      let getTasksCompleted = document.querySelectorAll('.completed');
      
      for(let task of getTasksCompleted){
        task.parentNode.removeChild(task)
      }
      }
      removeTasks();

      let buttonMup = document.getElementById('mover-cima');
      let buttonMdn = document.getElementById('mover-baixo');

      buttonMup.addEventListener('click', function () {
        let selectedItem = document.getElementsByClassName('selected')[0];
        let listNode;

        if (selectedItem) {
          listNode = selectedItem.parentNode;
          if (selectedItem.previousElementSibling) {
            listNode.insertBefore(selectedItem, selectedItem.previousSibling); // retirado de https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore onde posso inserir um nó antes do nó de referência.
          }
        }
      });

      buttonMdn.addEventListener('click', function () {
        let selectedItem = document.getElementsByClassName('selected')[0];
        let listNode;

        if (selectedItem) {
          listNode = selectedItem.parentNode;
          if (selectedItem.nextElementSibling) {
            listNode.insertBefore(selectedItem.nextElementSibling, selectedItem);
          }
        }
      });

let saveButton = document.getElementById('salvar-tarefas');
const selectedItens = getList.children;

saveButton.addEventListener('click', saveList);

function saveList (){
  
  let arrayTasks = [];
  localStorage.clear();

  if (selectedItens.length > 0){
    for (item of selectedItens){
      let tasksCompleted;
        if (item.classList.contains('completed')){
          tasksCompleted = true;
        } else {
          tasksCompleted = false;
        }
        arrayTasks.push ({ task: item.innerText, completed: tasksCompleted});
    }
    localStorage.setItem('tasks', JSON.stringify(arrayTasks));
  }
}

function getLocalStorage() {
  let tasksStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksStorage !== null) {
    for (let task of tasksStorage) {
      let selectedItem = document.createElement('li');
      selectedItem.innerText = task.task;
      getList.appendChild(selectedItem);
      if (task.completed == true) {
        console.log(selectedItem);
        getList.lastChild.classList.add('completed');
        getList.lastChild.style.textDecoration =
          'line-through solid rgb(0, 0, 0)';
      }
    }
  }
}

buttonRemoveSelected.addEventListener('click', function () {
  let selectedItem = document.getElementsByClassName('selected')[0];
  if (selectedItem) {
    getList.removeChild(selectedItem);
  } 
 
});
      
 




  





