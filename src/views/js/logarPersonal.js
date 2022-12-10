const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogarPersonal = document.getElementById('btnLogarPersonal');

btnLogarPersonal.addEventListener('click', logarPersonal);

async function logarPersonal(e) {
    e.preventDefault();

    const dados = getReqBody();

    const res = await fetch('/loginPersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    if(res.status === 200) {
        alert('Personal logado com sucesso!');
        window.location.href = '/';
    } else {
        alert('Erro ao logar personal!');
    }
}

function getReqBody() {
    return {
        email: email.value,
        senha: senha.value
    }
}
