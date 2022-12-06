const emailLoginAluno = document.getElementById('EmailLoginAluno');
const senhaLoginAluno = document.querySelector('enhaLoginAluno');

const btnLoginAluno = document.querySelector('.btnLogar');

btnLoginAluno.addEventListener('click', async (e) => {
    e.preventDefault();

    const reqBody = getReqBody();
    await fetch('/loginAluno', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });

    window.location.href = '/';
});

function getReqBody() {
    return {
        email: emailLoginAluno.value,
        senha: senhaLoginAluno.value
    }
}
