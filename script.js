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




function remover(){
    let aaaa = document.querySelector('.completed')
    aaaa.classList.remove('completed')
}



function colorSelector() {
    const selectedColor = document.querySelector('#lista-tarefas');
    selectedColor.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
    });
    }
    colorSelector();

    function doubleclick(){
        const doubleClicou = document.querySelector('#lista-tarefas');
        doubleClicou.addEventListener( "dblclick" , (event) => {
            document.querySelector('.completed').classList.remove('completed');
                event.target.classList.add('completed')
        })

    }

doubleclick()