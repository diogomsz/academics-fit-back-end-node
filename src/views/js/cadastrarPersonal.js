const nomePersonal = document.getElementById('NomePersonal');
const emailPersonal = document.getElementById('EmailPersonal');
const senhaPersonal = document.getElementById('SenhaPersonal');
const especialidadePersonal = document.getElementById('EspecialidadePersonal');
const botaoCadastroPersonal = document.getElementById('cadastrarPersonal');

botaoCadastroPersonal.addEventListener('click', async (e) => {
    e.preventDefault();

    const dados = getReqBody();

    const res = await fetch('/cadastrarPersonal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    const result = await res.json();
    console.log(result);

    window.location.href = "/loginPersonal";
});

function getReqBody() {
    return {
        nome: nomePersonal.value,
        email: emailPersonal.value,
        senha: senhaPersonal.value,
        especialidade: especialidadePersonal.value
    }
}
