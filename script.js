window.onload = function (){

    let getButton = document.querySelector('#criar-tarefa');
    let getList = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');
    let newTask = document.querySelector('.newTask');
    let getClearTasks = document.querySelector('#apaga-tudo');

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
       let setAttribute = color.target.setAttribute('style', 'background-color: rgb(128, 128, 128)'); // retirado de https://developer.mozilla.org/pt-BR/docs/Web/API/Element/setAttribute onde atribuo um novo valor para style background diretamente no meu arquivo html.
    }


    getList.addEventListener ('click', removeColor);

    function removeColor(event){
   
    let arrayList = document.getElementsByClassName('newTask');
        for(let index = 0; index < arrayList.length; index += 1){
            arrayList[index].style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
     
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
    
}





