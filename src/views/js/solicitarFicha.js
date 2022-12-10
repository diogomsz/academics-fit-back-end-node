const cpf = document.querySelector('#cpf');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const objetivos = document.querySelector('#objetivos');
const desc_objetivos = document.querySelector('#desc_objetivos');
const btnSolicitar = document.querySelector('#btnSolicitar');

cpf.value = getAluno()[0].cpf;

btnSolicitar.addEventListener('click', solicitarMontagem);

async function solicitarMontagem(e) {
    e.preventDefault();

    const reqBody = getReqBody();

    await fetch('/solicitarFicha', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    await fetch(`/alunos/${cpf.value}`, {
        method: 'PUT',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getReqBody() {
    return {
        cpf: cpf.value,
        altura: altura.value,
        peso: peso.value,
        objetivos: objetivos.value,
        desc_objetivos: desc_objetivos.value
    }
}
