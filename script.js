function createButton(textInButton) {
  let paiButton = document.querySelector('#buttonInput')
  let button = document.createElement('button')
  let idButton = 'criar-tarefa'
  button.innerHTML = textInButton
  button.id = idButton
  paiButton.appendChild(button)
}
createButton('Tarefa')

let valorInput
let input = document.querySelector("#texto-tarefa")
let buttonInput = document.querySelector('#criar-tarefa')

function inputText(event) {
valorInput = event.target.value
}

input.addEventListener('input', inputText)

function createLiTarefa(event) {
  let paiLi = document.querySelector("#lista-tarefas")
  let li = document.createElement('li')
  li.classList.add('lista')
  li.innerHTML = valorInput
  paiLi.appendChild(li)
  input.value =''
}

buttonInput.addEventListener('click',createLiTarefa)

function selectSelectFundo(event){
  let lista = document.querySelectorAll('li')
  for (index of lista) {
    if (index.classList.contains('selectFundo') ==true) {
      index.classList.remove('selectFundo')
    }
  }
  event.target.classList.add('selectFundo')
}

let ol = document.querySelector('#lista-tarefas')
ol.addEventListener('click', selectSelectFundo)

function mudarCorLis(){
  let colorSelectFundo = document.querySelectorAll('.selectFundo')
  let lista = document.querySelectorAll('li')
  for (index of lista) {
    if ( index.classList.contains('selectFundo') ==true){
      index.style.backgroundColor ='#808080'
    } else {
    index.style.backgroundColor = '#aaaaaa'
    }
  }
}


ol.addEventListener('click', mudarCorLis)

function riscarTarefa (event) {
  event.target.classList.toggle('completed')
}
ol.addEventListener('dblclick', riscarTarefa)

function clearButton(textButton){
  let buttonPai =document.querySelector('#clearButton')
  let clearButton = document.createElement('button')
  let idButton = 'apaga-tudo'
  clearButton.id = idButton
  clearButton.innerHTML = textButton
  buttonPai.appendChild(clearButton)
}

clearButton("Apagar Lista")


function apagaLista () {
  ol.innerHTML=''
}

let buttonApagar = document.querySelector('#apaga-tudo')
buttonApagar.addEventListener('click', apagaLista)


function apagaCompletedButton(textButton){
  let buttonPai =document.querySelector('#clearButton')
  let apagaCompletedButton = document.createElement('button')
  let idButton = 'remover-finalizados'
  apagaCompletedButton.id = idButton
  apagaCompletedButton.innerHTML = textButton
  buttonPai.appendChild(apagaCompletedButton)
}

apagaCompletedButton('Remover finalizados')


function apagaCompteted(){
  let completed = document.querySelectorAll('.completed')
  for (index of completed){
    index.parentNode.removeChild(index)
  }
}

let removerFinalizados = document.querySelector('#remover-finalizados')
removerFinalizados.addEventListener('click', apagaCompteted)

function buttonMoverCima(textButton){
  let buttonPai =document.querySelector('#moverCimaBaixo')
  let moverCima = document.createElement('button')
  let idButton = "mover-cima"
  moverCima.id = idButton
  moverCima.innerHTML = textButton
  buttonPai.appendChild(moverCima)
}

buttonMoverCima('para cima')




function moverParaCima(){
  let lis= document.querySelectorAll('li')
  let temporario
  let contador = 0
  for(let index = 1; index <lis.length; index +=1){
    if (lis[index].classList.contains('selectFundo')== true && lis[index].classList.contains('completed') == true){
      if (lis[index-1].classList.contains('completed')) {
        contador += 1
      }
      temporario = lis[index].innerHTML
      lis[index].innerText = lis[index-1].innerText
      lis[index].style.backgroundColor = '#aaaaaa'
      lis[index-1].innerHTML = temporario
      lis[index-1].style.backgroundColor = '#808080'
      lis[index-1].classList.add('selectFundo')
      lis[index].classList.remove('selectFundo')
      if (contador != 0) {
        lis[index-1].classList.add('completed')
      } else {
      lis[index].classList.remove('completed')
      lis[index-1].classList.add('completed')
      }
    }
    if (lis[index].classList.contains('selectFundo')== true) {
      if (lis[index-1].classList.contains('completed')) {
        contador += 1
      }
      temporario = lis[index].innerHTML
      lis[index].innerText = lis[index-1].innerText
      lis[index].style.backgroundColor = '#aaaaaa'
      lis[index-1].innerHTML = temporario
      lis[index-1].style.backgroundColor = '#808080'
      lis[index].classList.remove('selectFundo')
      lis[index-1].classList.add('selectFundo')
      if (contador != 0) {
        lis[index-1].classList.add('completed')
      }
    }
  }
}

let moveCima = document.querySelector("#mover-cima")
moveCima.addEventListener('click', moverParaCima)

function buttonMoverBaixo(textButton){
  let buttonPai =document.querySelector('#moverCimaBaixo')
  let moverBaixo = document.createElement('button')
  let idButton = "mover-baixo"
  moverBaixo.id = idButton
  moverBaixo.innerHTML = textButton
  buttonPai.appendChild(moverBaixo)
}

buttonMoverBaixo('para baixo')

function moverParaBaixo() {
  let lis = document.querySelectorAll('li');
  for (let index = lis.length-2; index>=0; index--) {
    let temporario
    let contador = 0
    if (lis[index].classList.contains('selectFundo')== true && lis[index].classList.contains('completed') == true){
      if (lis[index+1].classList.contains('completed') == true) {
        contador += 1
      }
      temporario = lis[index].innerHTML
      lis[index].innerText = lis[index+1].innerText
      lis[index].style.backgroundColor = '#aaaaaa'
      lis[index+1].innerHTML = temporario
      lis[index+1].style.backgroundColor = '#808080'
      lis[index].classList.remove('selectFundo')
      lis[index+1].classList.add('selectFundo')
      if (contador != 0) {
        lis[index+1].classList.add('completed')
      } else {
      lis[index].classList.remove('completed')
      lis[index+1].classList.add('completed')
      }
    }
    if (lis[index].classList.contains('selectFundo')== true) {
      if (lis[index+1].classList.contains('completed') == true) {
        contador += 1
      }
      temporario = lis[index].innerHTML
      lis[index].innerText = lis[index+1].innerText
      lis[index].style.backgroundColor = '#aaaaaa'
      lis[index+1].innerHTML = temporario
      lis[index+1].style.backgroundColor = '#808080'
      lis[index].classList.remove('selectFundo')
      lis[index+1].classList.add('selectFundo')
      if (contador != 0) {
        lis[index+1].classList.add('completed')
      }
    }
  }
}


let b =document.querySelector('#mover-baixo')
b.addEventListener('click', moverParaBaixo)

function buttonClearSelected(textButton){
  let buttonPai =document.querySelector('#clearButton')
  let apagarSelecionado = document.createElement('button')
  let idButton = "remover-selecionado"
  apagarSelecionado.id = idButton
  apagarSelecionado.innerHTML = textButton
  buttonPai.appendChild(apagarSelecionado)
}

buttonClearSelected('Apagar Selecionado')

function clearSelected() {
  let select = document.querySelector('.selectFundo')
  select.parentNode.removeChild(index)
  ol.style.backgroundColor = '#aaaaaa'
}
let buttonSelectClear =document.querySelector('#remover-selecionado')
buttonSelectClear.addEventListener('click', clearSelected)

function buttonSalvarTarefas(textButton){
  let buttonPai =document.querySelector('#clearButton')
  let salvarTarefas = document.createElement('button')
  let idButton = "salvar-tarefas"
  salvarTarefas.id = idButton
  salvarTarefas.innerHTML = textButton
  buttonPai.appendChild(salvarTarefas)
}

buttonSalvarTarefas('Salvar Tarefas')
let salvarTarefas = document.querySelector('#salvar-tarefas')

function saveList(event){
  localStorage.setItem('ol', ol.innerHTML);
}

salvarTarefas.addEventListener('click', saveList);
window.onload = 
ol.innerHTML = localStorage.getItem('ol');