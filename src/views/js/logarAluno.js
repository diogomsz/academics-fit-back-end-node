const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogarAluno = document.querySelector('#btnLogarAluno');

btnLogarAluno.addEventListener('click', logarAluno);

async function logarAluno(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    const res = await fetch('/loginAluno', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(res.status === 200) {
        alert('Aluno logado com sucesso!');
        window.location.href = '/solicitarFicha';
    } else {
        alert('Erro ao logar aluno!');
    }

    clearCampos();
}

function getReqBody() {
    return {
        email: email.value,
        senha: senha.value
    }
}

function clearCampos() {
    email.value = '';
    senha.value = '';
}
