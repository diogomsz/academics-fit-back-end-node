const emailLoginAluno = document.getElementById('EmailLoginAluno');
const senhaLoginAluno = document.getElementById('SenhaLoginAluno');

const btnLoginAluno = document.querySelector('.btnLogar');

btnLoginAluno.addEventListener('click', async (e) => {
    e.preventDefault();
    const reqBody = getReqBody();

    const res = await fetch('/loginAluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });

    if(res.status === 403) {
        alert('Email ou senha incorretos');
        return;
    }
    
    window.location.href = '/';
});

function getReqBody() {
    return {
        email: emailLoginAluno.value,
        senha: senhaLoginAluno.value
    }
}
