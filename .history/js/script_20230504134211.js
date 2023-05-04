let input = document.querySelector('input[name=tarefa]');
let btn = document.querySelector('#botao');
let lista = document.querySelector('#lista');
let card = document.querySelector('.card');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
