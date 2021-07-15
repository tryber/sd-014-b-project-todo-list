const addTask = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const itemol = document.querySelector('ol')


addTask.addEventListener('click',  function createLiItem() {
    let text = textInput.value;

    if (text != '') {
        let createLi = document.createElement('li');
        createLi.innerText = text;
        itemol.appendChild(createLi);
    }
    textInput.value = '';
    const itemli = document.querySelectorAll('li')
    console.log(itemli);
    for (let index = 0; index < itemli.length; index += 1) {
        let activeClass = itemli[index];
        activeClass.addEventListener('click' , function() {
            let disableClass = document.querySelector('.cor-de-fundo')
            if (activeClass.className != 'cor-de-fundo') {
                
                activeClass.classList.add('cor-de-fundo')
                disableClass.classList.remove('cor-de-fundo')
            }
        });

    }
});


