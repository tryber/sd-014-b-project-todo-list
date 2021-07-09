// Requisito 2
const instructions = document.createElement('p');
instructions.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('header').appendChild(instructions);

// Requisito 3

const input = document.querySelector('.input-task'); // seleciona o local de append child
const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
input.appendChild(inputTask);

//