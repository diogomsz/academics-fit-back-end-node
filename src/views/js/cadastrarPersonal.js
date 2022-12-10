const cpf = document.querySelector('#cpf');
const email = document.querySelector('#email');
const nome = document.querySelector('#nome');
const senha = document.querySelector('#senha');
const especialidade = document.querySelector('#especialidade');

const btnCadastrarPersonal = document.querySelector('#btnCadastrarPersonal');

btnCadastrarPersonal.addEventListener('click', cadastrarPersonal);

async function cadastrarPersonal(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    const res = await fetch('/cadastrarPersonal', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200) {
        alert('Personal cadastrado com sucesso!');
        
    } else {
        alert('Erro ao cadastrar personal!');
    }

    clearCampos();
}

function getReqBody() {
    return {
        nome: nome.value,
        email: email.value,
        senha: senha.value
    }
}

function clearCampos() {
    nome.value = '';
    email.value = '';
    senha.value = '';
    cpf.value = '';
    especialidade.value = '';
}
