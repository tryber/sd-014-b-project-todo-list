// variavéis com os elementos que será utilizado no código, capturados pela manipulação do DOM
const listaOrdenada = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const buttonCriar = document.getElementById('criar-tarefa');
// lista de tarefas que serão adicionadas
// armazenar o texto captrado como tarefa numa variavel
let list;
let lists = [];
console.log(lists);
// função para alterar a cor de fundo (selecionar a tarefa)
function listBackground(event) { // seguindo a recomendação do Linter a função tem que ficar aqui em cima antes dela ser invocada na criação das li
  const tarefaCinza = document.getElementsByClassName('cinza');
  for(let item of tarefaCinza) {
    item.classList.remove('cinza');
  }
    event.target.classList.add('cinza');// criando o evendo para adicionar a classe no novo elemento
}


function capturarTarefa() {
  // capturar e guardar, na variavel, o value (texto) digitado
  const tarefa = inputTarefa.value;
  list = tarefa;
  lists.push(tarefa);
  inputTarefa.value = null; // atribuindo o valor null para limpar o campo de digitação
  const liTarefa = document.createElement('li');
  liTarefa.className = 'atividade-adicionada';
  liTarefa.innerText = tarefa;
  liTarefa.addEventListener('click', listBackground);
  listaOrdenada.appendChild(liTarefa);
}
// evento no botão que ao receber um click ele execulta a função addTarefas
buttonCriar.addEventListener('click', capturarTarefa);

// deixar só uma tarefa selecionada.

