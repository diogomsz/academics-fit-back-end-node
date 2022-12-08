const emailLoginPersonal = document.getElementById('emailLoginPersonal');
const senhaLoginPersonal = document.getElementById('senhaLoginPersonal');
const botaoLoginPersonal = document.getElementById('btnLoginPersonal');

botaoLoginPersonal.addEventListener('click', async (e) => {
    e.preventDefault();

    const dados = getReqBody();

    const res = await fetch('/loginPersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    if(res.status === 403) {
        alert("Email ou senha incorretos");
        return;
    }

    window.location.href = "/";
});

function getReqBody() {
    return {
        email: emailLoginPersonal.value,
        senha: senhaLoginPersonal.value
    }
}
