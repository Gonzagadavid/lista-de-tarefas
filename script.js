const content = document.getElementById('content');
const title = document.createElement('h1');
title.innerHTML = 'Minha Lista de Tarefas';

const header = document.createElement('header');
header.className = 'header-content';

header.appendChild(title);
content.appendChild(header);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';

header.appendChild(paragraph);

const insertTask = document.createElement('div');
insertTask.className = 'insert-task';

const taskText = document.createElement('input');
taskText.spellcheck = false
taskText.id = 'texto-tarefa';

insertTask.appendChild(taskText);
content.appendChild(insertTask);

const tasksListContainer = document.createElement('div');
tasksListContainer.className = 'tasks-list-container';

const tasksList = document.createElement('ol');
tasksList.id = 'lista-tarefas';

tasksListContainer.appendChild(tasksList);
content.appendChild(tasksListContainer);

function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.id = id;
  btn.className = 'btn';
  btn.innerHTML = text;
  return btn;
}

const addTaskBtn = createBtn('criar-tarefa', 'Adiconar');

function liCreate(text) {
  const li = document.createElement('li');
  li.innerHTML = text;
  return li;
}

let color = '';

function switchColor(event) {
  const beforeSelected = document.querySelector('.selected');
  if (beforeSelected) {
    // beforeSelected.style.backgroundColor = color;
    beforeSelected.style.color = color;
    beforeSelected.classList.remove('selected');
  }
  // color = event.target.style.backgroundColor;
  color = event.target.style.color;
  event.target.classList.add('selected');
  const selected = document.querySelector('.selected');
  // selected.style.backgroundColor = 'rgb(225, 68, 0)';
  selected.style.color = 'red';
}

function switchClass(event) {
  const arrayClass = [...event.target.classList];
  if (arrayClass.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addTask(task, completed = false) {
  if (task === '') {
    return console.log('insira o texto');
  }
  const li = liCreate(task);
  li.className = 'task';
  if (completed) {
    li.classList.add('completed');
  }
  li.style.backgroundColor = 'transparent';
  li.addEventListener('click', switchColor);
  li.addEventListener('dblclick', switchClass);
  tasksList.appendChild(li);
  taskText.value = '';
}

addTaskBtn.addEventListener('click', (_) => addTask(taskText.value));

insertTask.appendChild(addTaskBtn);

const btnContainer = document.createElement('div');
btnContainer.className = 'btn-container';

content.appendChild(btnContainer);

const btnClearAll = createBtn('apaga-tudo', 'Apagar Tarefas');

function cleanTaskList() {
  tasksList.innerHTML = '';
}

btnClearAll.addEventListener('click', cleanTaskList);

btnContainer.appendChild(btnClearAll);

const btnFinished = createBtn('remover-finalizados', 'Apagar Concluídas');

function cleanFiniShedTasks() {
  const completedList = document.querySelectorAll('.completed');
  for (let index = 0; index < completedList.length; index += 1) {
    completedList[index].remove();
  }
}

btnFinished.addEventListener('click', cleanFiniShedTasks);

btnContainer.appendChild(btnFinished);

const btnSave = createBtn('salvar-tarefas', 'salvar');

function saveInLocalStorage() {
  const tasks = document.getElementsByClassName('task');
  const arraySave = [];

  for (let index = 0; index < tasks.length; index += 1) {
    const objTask = {
      text: tasks[index].innerHTML,
      finished: [...tasks[index].classList].includes('completed'),
    };
    arraySave.push(objTask);
  }

  const arrayJson = JSON.stringify(arraySave);
  localStorage.setItem('Todo-List', arrayJson);
}

btnSave.addEventListener('click', saveInLocalStorage);

btnContainer.appendChild(btnSave);

function renderTasks() {
  const arrayJson = localStorage.getItem('Todo-List');
  if (!arrayJson) {
    return console.log('não há itens salvos');
  }
  const arraySave = JSON.parse(arrayJson);

  for (let index = 0; index < arraySave.length; index += 1) {
    addTask(arraySave[index].text, arraySave[index].finished);
  }
}

const btnMoveUp = createBtn('mover-cima', '↑');

function upMoveElement() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return console.log('nenhum elemento selecionado');
  }
  if (selected === tasksList.firstChild) {
    return console.log('O item selecionado está na posição limite');
  }
  const beforeElement = selected.previousElementSibling;
  beforeElement.insertAdjacentElement('beforebegin', selected);
}

btnMoveUp.addEventListener('click', upMoveElement);

btnContainer.appendChild(btnMoveUp);

const btnMoveDown = createBtn('mover-baixo', '↓');

function downMoveElement() {
  const selected = document.querySelector('.selected');
  if (!selected) {
    return console.log('nenhum elemento selecionado');
  }
  if (selected === tasksList.lastChild) {
    return console.log('O item selecionado está na posição limite');
  }
  const nextElement = selected.nextElementSibling;
  nextElement.insertAdjacentElement('afterend', selected);
}

btnMoveDown.addEventListener('click', downMoveElement);

btnContainer.appendChild(btnMoveDown);

const btnRemove = createBtn('remover-selecionado', 'Remover');

function removeTask() {
  const task = document.querySelector('.selected');
  task.parentElement.removeChild(task);
}

btnRemove.addEventListener('click', removeTask);

btnContainer.appendChild(btnRemove);

renderTasks();
