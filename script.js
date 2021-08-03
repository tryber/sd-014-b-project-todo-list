const listadetarefas = document.getElementById('lista-tarefas'); //lista ol <li>
const textoinput = document.getElementById('texto-tarefa').value; //caixa de input

//***** LIMPAR O SAVE
const lmpsave = document.getElementById('limpar-save');
lmpsave.addEventListener('click', LimpSave);

function LimpSave(){
  const lmp = document.querySelector('ol').innerHTML;
  localStorage.clear();
  location.reload();
}
//***** FIM DO LIMPAR O SAVE


//***** SALVAR LISTA
const svTarefas = document.getElementById('salvar-tarefas'); //o botao salvar lista
svTarefas.addEventListener('click', SalvarTarefas);

window.load = CarregarSave(); //carregamento da pagina chamando uma funcao


function SalvarTarefas(){
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
}

function CarregarSave(){
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.save;
  }
}
//***** FIM DO SALVAR LISTA

const itens = document.getElementById('lista-tarefas');
const rmvfinalizados = document.getElementById('remover-finalizados');
rmvfinalizados.addEventListener('click', rmvEnd);

function rmvEnd(){
  const list = itens.childNodes;
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].style === 'text-decoration: line-through') {
      list[i].remove();
    }
  }

}

//r.target.style = "text-decoration: line-through";


 



//FUNÇÃO DE TESTE
function alertaaa(){
    alert("Photografh!");
}
//FIM DA FUNÇÃO DE TESTE


//***** ADICIONANDO UM ITEM
function adicionarItem(){
    const info = document.getElementById('texto-tarefa').value
    const list = document.getElementById('lista-tarefas');
    const liElement = document.createElement('li');
    liElement.innerHTML = info;
    if (liElement !== '') {
      list.appendChild(liElement);
    }
    document.querySelector('#texto-tarefa').value = '';

    /*
    let aderenceli = document.createElement('li');
    aderenceli.innerText = textoinput;

    listadetarefas.appendChild(aderenceli);
   document.querySelector('texto-tarefa').valeu = '';*/
}
//***** FIM DE ADICIONANDO UM ITEM




function apagatudo(){
    const list = document.getElementById('lista-tarefas');
    let qq = document.querySelectorAll("li");
    list.remove('li'); 
    location.reload(); //método encontrado na internet para recarregar a página
                        //após o método. Senao nao haveria como add um item novamente
    }

    
    //REMOVENDO UMA TAREFA
    function rmv(e){  
    let qq = document.querySelector("li"); 
    qq.remove('li');
  } 
    const selecionado = document.querySelector('#remover-finalizados');
    selecionado.addEventListener('click', rmv);


    //TROCANDO O BACKGROUND DE UMA TAREFA
    function trocarCor(e) {    
      e.target.style.backgroundColor = 'rgb(128,128,128)';            
    }
    //const nomeCinza = document.querySelector('ol');
    const nomeCinza = document.getElementById('lista-tarefas');
    nomeCinza.addEventListener('click', trocarCor);
        
    
    //RISCANDO UMA TAREFA
    function riscar(r){
    r.target.style = "text-decoration: line-through";
    }
    const nomeRiscado = document.querySelector('ol');
    nomeRiscado.addEventListener('dblclick', riscar);