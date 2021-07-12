let tarefaBotao = document.getElementById('criar-tarefa');
let caixaTexto = document.getElementById('texto-tarefa');
let lista = document.getElementById('lista-tarefas');
let limparTudoBotao = document.getElementById('apaga-tudo');

tarefaBotao.addEventListener('click', function() {
    let item = document.createElement('li')
    item.innerText = caixaTexto.value;
    lista.appendChild(item);
    caixaTexto.value = "";
});


limparTudoBotao.addEventListener('click', function() {
    lista.innerHTML = '';

})

