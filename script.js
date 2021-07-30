const listadetarefas = document.getElementById('lista-tarefas'); //lista ol <li>
const textoinput = document.getElementById('texto-tarefa').value; //caixa de input



function alertaaa(){
    alert("Photografh!");
}

function adicionarItem(){
    

    const info = document.getElementById('texto-tarefa').value
    const list = document.getElementById('lista-tarefas');
    const toDo = document.createElement('li');
    toDo.innerHTML = info;
    if (toDo !== '') {
      list.appendChild(toDo);
    }
    document.querySelector('#texto-tarefa').value = '';

   
    
    /*
    let aderenceli = document.createElement('li');
    aderenceli.innerText = textoinput;

    listadetarefas.appendChild(aderenceli);
   document.querySelector('texto-tarefa').valeu = '';*/
   
   
}

    //Limpar Lista
    function apagatudo(){
    const list = document.getElementById('lista-tarefas');
    let qq = document.querySelectorAll("li");
    list.remove('li'); 
    location.reload();
    //método encontrado na internet para recarregar a página
    //após o método. Senao nao haveria como add um item novamente
  
}

function load(){
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.save;
  }
}

/*function storeList() {
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
}

const saveList = document.getElementById('salvar-tarefas');
saveList.addEventListener('click', storeList)*/



    //REMOVENDO UMA TAREFA
    function rmv(){  
    /*let qq = document.querySelector("li");
    qq.remove('li');  */ 
    let qq = document.querySelectorAll("li");
    for (let index = 0; index < qq.length; index++) {
      const element = qq[index];
      
    }
    qq.remove(element);  
    }
    

    //TROCANDO O BACKGROUND DE UMA TAREFA
    function trocarCor(e) {    
      //e.target.style.backgroundColor = 'rgb(128,128,128)';
      let qq = document.querySelectorAll("li");
      for (let index = 0; index < qq.length; index++) {
        const element = qq[index];  
        qq[index].style.backgroundColor = 'white';
      }        

      e.target.style.backgroundColor = 'rgb(128,128,128)';
    }

    //const nomeCinza = document.querySelector('ol');
    const nomeCinza = document.getElementById('lista-tarefas');
    nomeCinza.addEventListener('click', trocarCor);
           
    
    //RISCANDO UMA TAREFA
    function riscar(r){
    r.target.style = "text-decoration: line-through solid rgb(0, 0, 0)";
    }
    const nomeRiscado = document.querySelector('ol');
    nomeRiscado.addEventListener('dblclick', riscar);