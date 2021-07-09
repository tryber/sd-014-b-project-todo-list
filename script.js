document.querySelector('h1').innerText = "Minha Lista de Tarefas";
document.querySelector('#funcionamento').innerText = "Clique duas vezes em um item para marcá-lo como completo";

let tarefaLits = document.querySelector('#lista-tarefas');
for (let i = 0; i < 5; i += 1) {
  let addList = document.createElement('li');
  tarefaLits.appendChild(addList);
}
