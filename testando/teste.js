let todoList;
let todoOutput;

function formatDate(date) {
  // formata a data para o formato DD/MM/YYYY
  const time = new Date(date);
  return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
}

function showList() {
  // mostra a lista de todo
  if (todoList.length > 0) {
    const htmlTemp = `<ul>
      ${todoList.map(todoItem => `<li data-id="${todoItem.id}" data-done="${todoItem.done}">${todoItem.descricao} - ${formatDate(todoItem.date)}</li>` )}
      </ul><button>Limpar tarefas realizadas</button>`;
    todoOutput.innerHTML = htmlTemp;
  } else {
    todoOutput.innerHTML = 'Nenhuma tarefa cadastrada';
  }
}

function saveList() {
  // converte os dados em string e salva no local storage
  localStorage.setItem('tasks', JSON.stringify(todoList));
}

function clearList() {
  // varre a lista a procura de tarefas realizadas
  for (let i = 0; i < todoList.length; i += 1) {
    if (todoList[i].done === 'true') {
      // remove 1 elemento na posição i;
      todoList.splice(i, 1);
      // voltando o indice no array para validar novamente a lista
      i = 0;
    } else {
      todoList[i].id = i;
    }
  }
  showList();
  saveList();
}

function clickList(e) {
  // somente fazer algo quando clicar em um item li
  if (e.target.localName === 'li') {
    e.target.dataset.done = !e.target.dataset.done === 'true';
    todoList[e.target.dataset.id].done = e.target.dataset.done;
    saveList();
  } else if (e.target.localName === 'button') {
    clearList();
  }
}


function onSubmit(e) {
  const task = {};

  // pego o valor cadastrado no primeiro input do meu form
  task.descricao = e.target[0].value;
  task.date = new Date();
  task.id = todoList.length;
  task.done = 'false';

  // adicionando a task na lista
  todoList.push(task);
  saveList();
  showList();
  // utiliza o preventDefault para evitar do form realizar o reload da página
  e.preventDefault();
}


window.addEventListener('load', () => {
  // guarda em uma variável o elemento tasks-output
  todoOutput = document.getElementById('tasks-output');
  if (localStorage.getItem('tasks')) {
    todoList = JSON.parse(localStorage.getItem('tasks'));
    showList();
  } else {
    todoList = [];
  }

  if (todoList.length === 0) {
    todoOutput.innerHTML = 'Nenhuma tarefa cadastrada';
  }
  // adiciona o listener para o evento submit, utilizei form para usar o required do input HTML
  document.getElementById('form-task').addEventListener('submit', onSubmit);
  todoOutput.addEventListener('click', clickList);
});
