let inputAdicionarMetas = document.querySelector('#inputAdicionarMateria');
let inputData = document.querySelector('#inputData');
let buttonAddMetas = document.querySelector('#buttonAddMateria');
let lista = document.querySelector('#lista');
let arrayMetas = []

//
$.ajax("metas.json", {success: function(data){   
    arrayMetas = data
    adicionarAuto()}})

function adicionarAuto(){
    for(var i = 0; i < arrayMetas.length; i++) {
        adicionarMeta(arrayMetas[i])
        console.log(arrayMetas[i])
      }
}

inputAdicionarMeta.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let meta = {
            nome: inputAdicionarMeta.value,
            id: gerarId(),
        }
        adicionarMeta(meta)
        arrayMetas.push(meta);
    }
});

buttonAddMeta.addEventListener('click', (e) =>{
        let meta = {
            "id": ""+gerarId()+"",
            "nome": ""+inputAdicionarMeta.value+"",
        }
        adicionarMeta(meta);
        arrayMetas.push(meta);
});


function gerarId() {
    return Math.floor(Math.random() *3000);
}

function adicionarMeta(meta){
    let li = criarTagLI(meta);
    lista.appendChild(li);
    inputAdicionarMeta.value = '';
}

function criarTagLI(meta){

    let li = document.createElement('li');
    li.id = meta.id;

    let span = document.createElement('span');
    span.classList.add('texto');
    span.innerHTML = meta.nome;   

    
    let div = document.createElement('div');

   // let buttoneditar = document.createElement('button');
   // buttoneditar.classList.add('buttonAcao');
   // buttoneditar.innerHTML = '<i class="fa fa-pencil"></i>';
   // buttoneditar.setAttribute('onclick', 'editar('+materia.id+')')
   let buttonOk = document.createElement('button');
   buttonOk.classList.add('buttonAcao');
   buttonOk.innerHTML = '<i class="fa fa-check"></i>';
   buttonOk.setAttribute('onclick', 'metaOk('+meta.id+')')


    let buttonexcluir = document.createElement('button');
    buttonexcluir.classList.add('buttonAcao');
    buttonexcluir.innerHTML = '<i class="fa fa-trash"></i>';
    buttonexcluir.setAttribute('onclick', 'excluir('+meta.id+')')

    // div.appendChild(buttoneditar);
    div.appendChild(buttonOk);
    div.appendChild(buttonexcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li
}

function metaOk(id) {
    let confirmacao = window.confirm('Confirme a conclusão');
    if(confirmacao) {
        let li = document.getElementById(''+id+'')
        if (li) {
            li.style.background = "green";

        }
}}

function excluir(id) {
    let confirmacao = window.confirm('Confirme a exclusão');
    if(confirmacao) {
        let li = document.getElementById(''+id+'')
        if (li) {
            arrayMetas.splice(arrayMetas.indexOf('id'), id);
            lista.removeChild(li);
        }
    } 
}
