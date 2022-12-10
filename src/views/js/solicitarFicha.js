const cpf = document.querySelector('#cpf');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const objetivos = document.querySelector('#objetivos');
const desc_objetivos = document.querySelector('textarea');
const btnSolicitar = document.querySelector('#btnSolicitar');

cpf.value = JSON.parse(localStorage.getItem('cpf'));
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
        aluno_cpf_fk: cpf.value = JSON.parse(localStorage.getItem('cpf')),
        altura: altura.value,
        peso: peso.value,
        objetivo: objetivos.value,
        descricao_objetivo: desc_objetivos.value
    }
}
