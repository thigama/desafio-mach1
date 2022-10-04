

function cadastrar(){

    const aluno = {
        nome: document.getElementById("txtNome").value,
        email: document.getElementById("txtEmail").value,
        CPF: document.getElementById("numCPF").value,
    };

    localStorage.aluno = JSON.stringify(aluno)
  
}

let alunoCadastrado = localStorage.aluno;

function apagar(){

}