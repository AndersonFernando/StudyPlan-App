let inputAdicionarLembrete = document.querySelector('#inputAdicionarLembrete');
let inputData = document.querySelector('#inputData');
let buttonAddLembrete = document.querySelector('#buttonAddLembrete');
let lista = document.querySelector('#lista');
let arrayLembretes = []

$.ajax("lembretes.json", {success: function(data){   
    arrayLembretes = data
    adicionarAuto()}})

function adicionarAuto(){
    for(var i = 0; i < arrayLembretes.length; i++) {
        AdicionarLembrete(arrayLembretes[i])
        console.log(arrayLembretes[i])
      }
}
inputAdicionarLembrete.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let Lembrete = {
            nome: inputAdicionarLembrete.value,
            data: inputData.value,
            id: gerarId(),
        }
        AdicionarLembrete(Lembrete)
    }
});

inputData.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let Lembrete = {
            nome: inputAdicionarMateria.value,
            data: inputData.value,
            id: gerarId(),
        }
        AdicionarLembrete(Lembrete);
        arrayLembretes.push(Lembrete);
    }
});


buttonAddLembrete.addEventListener('click', (e) =>{
        let lembrete = {
            nome: inputAdicionarLembrete.value,
            data: inputData.value,
            id: gerarId(),
        }
        AdicionarLembrete(lembrete);
        arrayLembretes.push(lembrete);
});


function gerarId() {
    return Math.floor(Math.random() *3000);
}

function AdicionarLembrete(lembrete){
    let li = criarTagLI(lembrete);
    lista.appendChild(li);
    inputAdicionarLembrete.value = '';
    inputData.value = '';
}

function criarTagLI(lembrete){

    let li = document.createElement('li');
    li.id = lembrete.id;

    let span = document.createElement('span');
    span.classList.add('texto');
    span.innerHTML = lembrete.nome + ' - ' + lembrete.data;   

    
    let div = document.createElement('div');

    //let buttoneditar = document.createElement('button');
    //buttoneditar.classList.add('buttonAcao');
    //buttoneditar.innerHTML = '<i class="fa fa-pencil"></i>';
    //buttoneditar.setAttribute('onclick', 'editar('+lembrete.id+')')

    let buttonexcluir = document.createElement('button');
    buttonexcluir.classList.add('buttonAcao');
    buttonexcluir.innerHTML = '<i class="fa fa-trash"></i>';
    buttonexcluir.setAttribute('onclick', 'excluir('+lembrete.id+')')

    //div.appendChild(buttoneditar);
    div.appendChild(buttonexcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li
}

function editar(id) {
    alert(id);
}

function excluir(id) {
    let confirmacao = window.confirm('Confirme a exclusão');
    if(confirmacao) {
        let li = document.getElementById(''+id+'')
        if (li) {
            arrayLembretes.splice(arrayLembretes.indexOf('id'), id);
            lista.removeChild(li);
        }
    } 
}
