let inputAdicionarLink = document.querySelector('#inputAdicionarLink');
let inputAdicionarTitulo = document.querySelector('#inputAdicionarTitulo');
let buttonAddLink = document.querySelector('#buttonAddLink');
let lista = document.querySelector('#lista');
let arrayLink = []

//
$.ajax("Link.json", {success: function(data){   
    arrayLink = data
    adicionarAuto()}})

function adicionarAuto(){
    for(var i = 0; i < arrayLink.length; i++) {
        adicionarLink(arrayLink[i])
        console.log(arrayLink[i])
      }
}

inputAdicionarTitulo.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        let link = {
            nome: inputAdicionarTitulo.value,
            link: inputAdicionarLink.value,
            id: gerarId(),
        }
        adicionarLink(link)
        arrayLink.push(link);
    }
});

buttonAddLink.addEventListener('click', (e) =>{
        let link = {
            "id": ""+gerarId()+"",
            "nome": ""+inputAdicionarTitulo.value+"",
            "link": ""+inputAdicionarLink.value+"",
        }
        adicionarLink(link);
        arrayLink.push(link);
});


function gerarId() {
    return Math.floor(Math.random() *3000);
}

function adicionarLink(link){
    let li = criarTagLI(link);
    lista.appendChild(li);
    inputAdicionarTitulo.value = '';
    inputAdicionarLink.value = '';
}

function criarTagLI(link){

    let li = document.createElement('li');
    li.id = link.id;

    let span = document.createElement('span');
    span.classList.add('texto');
    span.innerHTML = link.nome;   

    var temp = "<a href="+ link.link+">"+link.nome+" </a>"

    span.innerHTML = temp


    
    let div = document.createElement('div');

   // let buttoneditar = document.createElement('button');
   // buttoneditar.classList.add('buttonAcao');
   // buttoneditar.innerHTML = '<i class="fa fa-pencil"></i>';
   // buttoneditar.setAttribute('onclick', 'editar('+materia.id+')')
    let buttonexcluir = document.createElement('button');
    buttonexcluir.classList.add('buttonAcao');
    buttonexcluir.innerHTML = '<i class="fa fa-trash"></i>';
    buttonexcluir.setAttribute('onclick', 'excluir('+link.id+')')

    // div.appendChild(buttoneditar);
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
            arrayLink.splice(arrayLink.indexOf('id'), id);
            lista.removeChild(li);
        }
    } 
}
