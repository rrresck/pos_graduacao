let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
let card = document.querySelector('.card');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

btn.onclick = function() {
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
        tarefas.push(novaTarefa);
        renderizarTarefas();
        input.value = '';
        removerSpans();
        salvarDadosNoStorage();
    }else{
        removerSpans();
        let span = document.createElement('span');
    }
}