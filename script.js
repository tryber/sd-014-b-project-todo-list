function alertaaa(){
    alert("Photografh!");
}

function adicionarItem(){
    
    const listadetarefas = document.getElementById('lista-tarefas'); //lista ol <li>
    const textoinput = document.getElementById('texto-tarefa').value; //caixa de input
    
    let aderenceli = document.createElement('li');
    aderenceli.innerText = textoinput;
    if(aderenceli !== ''){

    listadetarefas.appendChild(aderenceli);
    }
   document.querySelector('#texto-tarefa').value = '';

   
   
}

   

/*function load(){
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.setItem('save', salvarLista);//localStorage.save;
    //localStorage.setItem('save', lis);
  }
}
    const salvarLista = document.getElementById('salvar-tarefas');
    salvarLista.addEventListener('click', load());*/

 




   //Limpar Lista
   function apagatudo(){
    const list = document.getElementById('lista-tarefas');
    let qq = document.querySelectorAll("li");
    list.remove('li'); 
    location.reload();
    //método encontrado na internet para recarregar a página
    //após o método. Senao nao haveria como add um item novamente
}


    //REMOVENDO UMA TAREFA
    function rmv(){  
    let qq = document.querySelector("li");
    qq.remove('li');
    }


    function rmvfinalizados() {
      const selecionado = document.querySelectorAll('ol');
      for (let key = 0; key < selecionado.length; key += 1) {
        selecionado[key].remove();
      }

    }

  const limpar = document.querySelector('#remover-finalizados');
  limpar.addEventListener('select', rmvfinalizados);
  



  /*const limpar = document.querySelector('#remover-finalizados');
  limpar.addEventListener('click', () => {
  const selecionado = document.querySelectorAll('ol');
  for (let key = 0; key < selecionado.length; key += 1) {
    selecionado[key].remove();
  }
});*/










    

    //TROCANDO O BACKGROUND DE UMA TAREFA
    function trocarCor(e) {    
      //e.target.style.backgroundColor = 'rgb(128,128,128)';
      let qq = document.querySelectorAll("li");
      for (let index = 0; index < qq.length; index++) {
        qq[index].style.backgroundColor = 'white';
      }        

      e.target.style.backgroundColor = 'rgb(128,128,128)';
    }

    //const nomeCinza = document.querySelector('ol');
    const nomeCinza = document.getElementById('lista-tarefas');
    nomeCinza.addEventListener('click', trocarCor);
           
    
    //RISCANDO UMA TAREFA
    function riscar(r){
      if(r.target.style != "text-decoration: line-through solid rgb(0, 0, 0)"){
    r.target.style = "text-decoration: line-through solid rgb(0, 0, 0)";
      } else if(r.target.style === "text-decoration: line-through solid rgb(0, 0, 0)"){
        r.target.style = "text-decoration: none";

      }
    }
    const nomeRiscado = document.querySelector('ol');
    nomeRiscado.addEventListener('dblclick', riscar);