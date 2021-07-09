// variavéis com os elementos que será utilizado no código, capturados pela manipulação do DOM
const listaOrdenada = document.getElementById('lista-tarefas');
const inputTarefa = document.getElementById('texto-tarefa');
const buttonCriar = document.getElementById('criar-tarefa');

// lista de tarefas que serão adicionadas
// armazenar o texto captrado como tarefa numa variavel
let list;

function capturarTarefa(event) {
  // capturar e guardar, na variavel, o value (texto) digitado
  const tarefa = inputTarefa.value;
  list = tarefa;
  inputTarefa.value = null; // atribuindo o valor null para limpar o campo de digitação  
  const liTarefa = document.createElement('li');
  liTarefa.className = 'atividade-adicionada';
  liTarefa.innerText = list;
  console.log(liTarefa)
  listaOrdenada.appendChild(liTarefa); 
}
// evento no botão que ao receber um click ele execulta a função addTarefas
buttonCriar.addEventListener('click', capturarTarefa);
buttonCriar.addEventListener('keypress', capturarTarefa);
