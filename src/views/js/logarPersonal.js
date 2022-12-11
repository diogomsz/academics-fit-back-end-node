const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnLogarPersonal = document.getElementById('btnLogarPersonal');

btnLogarPersonal.addEventListener('click', logarPersonal);

async function logarPersonal(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    const res = await axios.post('/loginPersonal', reqBody);

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
