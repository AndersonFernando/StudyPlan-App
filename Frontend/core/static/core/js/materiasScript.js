let inputAdicionarMateria = document.querySelector('#inputAdicionarMateria');
let inputData = document.querySelector('#inputData');
let buttonAddMateria = document.querySelector('#buttonAddMateria');
let lista = document.querySelector('#lista');
let arrayMaterias = []
let file = "base.json"

//
$.ajax("base.json", {success: function(data){   
    arrayMaterias = data
    adicionarAuto()}})

function adicionarAuto(){
    for(var i = 0; i < arrayMaterias.length; i++) {
        adicionarMateria(arrayMaterias[i])
        console.log(arrayMaterias[i])
      }
}

inputAdicionarMateria.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let materia = {
            nome: inputAdicionarMateria.value,
            data: inputData.value,
            id: gerarId(),
        }
        adicionarMateria(materia)
        arrayMaterias.push(materia);
    }
});

inputData.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let materia = {
            "id": ""+gerarId()+"",
            "nome": ""+inputAdicionarMateria.value+"",
            "data": ""+inputData.value+"", 
        }
        adicionarMateria(materia);
        arrayMaterias.push(materia);
    }
});

buttonAddMateria.addEventListener('click', (e) =>{
        let materia = {
            "id": ""+gerarId()+"",
            "nome": ""+inputAdicionarMateria.value+"",
            "data": ""+inputData.value+"", 
        }
        adicionarMateria(materia);
        arrayMaterias.push(materia);
});


function gerarId() {
    return Math.floor(Math.random() *3000);
}

function adicionarMateria(materia){
    let li = criarTagLI(materia);
    lista.appendChild(li);
    inputAdicionarMateria.value = '';
    inputData.value = '';
}

function criarTagLI(materia){

    let li = document.createElement('li');
    li.id = materia.id;

    let span = document.createElement('span');
    span.classList.add('texto');
    span.innerHTML = materia.nome + ' - ' + materia.data;   

    
    let div = document.createElement('div');

   // let buttoneditar = document.createElement('button');
   // buttoneditar.classList.add('buttonAcao');
   // buttoneditar.innerHTML = '<i class="fa fa-pencil"></i>';
   // buttoneditar.setAttribute('onclick', 'editar('+materia.id+')')

    let buttonexcluir = document.createElement('button');
    buttonexcluir.classList.add('buttonAcao');
    buttonexcluir.innerHTML = '<i class="fa fa-trash"></i>';
    buttonexcluir.setAttribute('onclick', 'excluir('+materia.id+')')

    // div.appendChild(buttoneditar);
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
            arrayMaterias.splice(arrayMaterias.indexOf('id'), id);
            lista.removeChild(li);
        }
    } 
}
