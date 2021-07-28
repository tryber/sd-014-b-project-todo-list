// Requesito 1
const title = document.createElement('header');
document.body.appendChild(title);
const h1 = document.createElement('h1');
h1.innerText = 'Minha Lista de Tarefas';
title.appendChild(h1);


// Requesito 2
const h4 = document.createElement('h4');
h4.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
h4.id = 'funcionamento';
document.body.appendChild(h4);


// Requesito 3
const input = document.createElement('input');
input.id = 'texto-tarefa';
document.body.appendChild(input);

// Requesito 4 e 5
// Criar os elementos
const ol = document.createElement('ol');
ol.id = 'lista-tarefas';
document.body.appendChild(ol);
const button = document.createElement('button');
button.id = 'criar-tarefa';
button.innerText = 'Enviar';
document.body.appendChild(button);
// Quando o botão for clicado
const buttonLi = document.querySelector('#criar-tarefa');
button.addEventListener('click', function(){
  const ol = document.querySelector('ol');
  const li = document.createElement('li');
  const input = document.querySelector('input');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
});

// Requesito 7 e 8
//const ol = document.querySelector('ol');
//function colorLi(event){
  //const lis = document.querySelectorAll('li');
  //for(let list of lis){
    //list.style.backgroundColor = 'white';
  //}
  //const click = event.target;
  //click.style.backgroundColor = rgb(128, 128, 128);
//}
//ol.addEventListener('click', colorLi);




// Requesito 9
//function colorCompleted(event){
  //event.target.classList.toggle('completed');
//};
//colorLi.addEventListener('dbclick', colorCompleted);


// Requesito 10
const buttonClear = document.createElement('button');
buttonClear.id = 'apaga-tudo';
buttonClear.innerText = 'Apagar tudo';
document.body.appendChild(buttonClear);

buttonClear.addEventListener('click', function (){
  const ol = document.querySelector('ol');
  ol.innerText = '';
});






