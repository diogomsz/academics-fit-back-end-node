const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const btnLogarAluno = document.querySelector('#btnLogarAluno');

btnLogarAluno.addEventListener('click', logarAluno);

async function logarAluno(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    const res = await axios.post('/loginAluno', reqBody);

    if(res.status == 403) {
        alert('Usuário ou senha incorretos!');
    } else {
        window.location.href = '/solicitarFicha';
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
