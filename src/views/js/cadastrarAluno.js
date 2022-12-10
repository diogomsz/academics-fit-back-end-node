const nome = document.querySelector('#usuario');
const cpf = document.querySelector('#cpf');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

const btnCadastrarAluno = document.querySelector('#btnCadastrarAluno');

btnCadastrarAluno.addEventListener('click', cadastrarAluno);

async function cadastrarAluno(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    const res = await fetch('/cadastrarAluno', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200) {
        alert('Aluno cadastrado com sucesso!');
        
    } else {
        alert('Erro ao cadastrar aluno!');
    }

    clearCampos();
}

function getReqBody() {
    return {
        nome: nome.value,
        cpf: cpf.value,
        email: email.value,
        senha: senha.value
    }
}

function clearCampos() {
    nome.value = '';
    cpf.value = '';
    email.value = '';
    senha.value = '';
}
