let tabela;

function saveList() {
  // converte os dados em string e salva no local storage
  localStorage.setItem('aluno', JSON.stringify(tabela));
}

//function showList() {
// mostra a lista de todo
//  if (todoList.length > 0) {
//    const htmlTemp = `<ul>
//      ${todoList.map(todoItem => `<li data-id="${todoItem.id}" data-done="${todoItem.done}">${todoItem.descricao} - ${formatDate(todoItem.date)}</li>` )}
//      </ul><button>Limpar tarefas realizadas</button>`;
//    todoOutput.innerHTML = htmlTemp;
//  } else {
//    todoOutput.innerHTML = 'Nenhuma tarefa cadastrada';
//  }
//}

function cadastrar(){
    const alunoCadastrado = {};

    alunoCadastrado.nome = document.getElementById("txtNome").value;
    alunoCadastrado.email = document.getElementById("txtEmail").value;
    alunoCadastrado.cpf = document.getElementById("numCPF").value;


    tabela.push(alunoCadastrado);
    saveList();
    //showList();
}

function apagar(){

}