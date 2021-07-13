const lista = document.getElementById('lista-tarefas')

function clicar() {
    const botao = document.getElementById('criar-tarefa')
        botao.addEventListener('click', () => {
            let stringui = document.getElementById('texto-tarefa').value;
                const tucano = document.createElement('li')
                    tucano.classList= ('pixel')
                    tucano.innerText = stringui
                        lista.appendChild(tucano)
                            document.getElementById('texto-tarefa').value=''
                               
        
        }
        
        
    )

}
clicar()

function remover (){
     const clean = document.getElementById('apaga-tudo')
        let quebra = document.getElementsByClassName('completed')
        let quebra2 = document.getElementsByClassName('selected')
     clean.addEventListener('click', (event)=>{
        const ul = document.querySelector('#lista-tarefas')
        ul.innerHTML = ''
        quebra.classList = ('completed')
        quebra2.classList = ('selected')
        
     })
    }
remover()


function colorSelector() {
    const selectedColor = document.querySelector('#lista-tarefas');
    selectedColor.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    });
    }
colorSelector();


function doubleclick(evento){
        
    if(evento.target.classList.contains('completed') !== true && evento.target !==lista){
        evento.target.classList.add('completed');
    }
        else if (evento.target.classList.contains('completed')){
            evento.target.classList.remove('completed')
        }
    }
                
        
lista.addEventListener('dblclick' , doubleclick)


function cleaner() {
    const selectedColor = document.querySelector('#lista-tarefas');
        selectedColor.addEventListener('click', (event) => {
            document.querySelector('.selected').classList.remove('selected');
                event.target.classList.add('selected');
                 });
            }
colorSelector();

function removeSelect(){
    const buttomRemove = document.querySelector("#remover-finalizados")


}


