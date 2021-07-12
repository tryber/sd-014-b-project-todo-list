const lista = document.getElementById('lista-tarefas')

function clicar() {
    const botao = document.getElementById('criar-tarefa')
        botao.addEventListener('click', () => {
            let stringui = document.getElementById('texto-tarefa').value;
                const tucano = document.createElement('li')
                    tucano.className= ('listinha')
                    tucano.innerText = stringui
                        lista.appendChild(tucano)
                            document.getElementById('texto-tarefa').value=''
                                tucano.onclick = function(){
                                    tucano.style.backgroundColor = '#808080'
                                }
        
        }
        
        
    )

}
clicar()
