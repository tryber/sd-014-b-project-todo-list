const btnCriarTarefa = document.querySelector('#criar-tarefa');
const ordenaListaTarefas = document.querySelector('#lista-tarefas');
const inputTextoTarefa = document.querySelector('#texto-tarefa');

btnCriarTarefa.addEventListener('click', () => {
    let criaTarefaLista = document.createElement('li');
    ordenaListaTarefas.appendChild(criaTarefaLista);

    criaTarefaLista.innerText = inputTextoTarefa.value;
    criaTarefaLista.className = 'tarefa-criada';

    inputTextoTarefa.value = null; // obs: undefined quando aplicado fica como conteúdo do input!!
});

ordenaListaTarefas.addEventListener('click', (event) => {

    const selecionarTarefa = document.querySelector('.select');

    if(event.target.className === 'tarefa-criada') {
        event.target.classList.add('select');
    }
    if (selecionarTarefa !== null) {
        selecionarTarefa.target.classList.remove('select');
    }
});

ordenaListaTarefas.addEventListener('dblclick', (event) => {
    if (event.classList.contains('complete')) { // includes não deu certo, depois verificar pq.
        event.classList.remove('complete')
    } else {
        event.classList.add('complete');
    }
})

