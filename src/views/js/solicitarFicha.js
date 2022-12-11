const cpf = document.querySelector('#cpf');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const objetivos = document.querySelector('#objetivos');
const desc_objetivos = document.querySelector('textarea');
const btnSolicitar = document.querySelector('#btnSolicitar');

btnSolicitar.addEventListener('click', solicitarMontagem);

async function solicitarMontagem(e) {
    e.preventDefault();
    
    const reqBodyFicha = reqBodyFicha();
    
    await fetch('/solicitarFicha', {
        method: 'POST',
        body: JSON.stringify(reqBodyFicha),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const reqBodyAluno = reqBodyAtualizarAluno();
    
    await fetch(`/alunos/${cpf.value}`, {
        method: 'PUT',
        body: JSON.stringify(reqBodyAluno),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    window.location.href = '/perfilAluno';
    localStorage.clear();

}

function reqBodyFicha() {
    return {
        aluno_cpf_fk: cpf.value,
        altura: Number(altura.value),
        peso: Number(peso.value),
        objetivo: objetivos.value,
        descricao_objetivo: desc_objetivos.value
    }
}

function reqBodyAtualizarAluno() {
    return {
        cpf: cpf.value,
        altura: Number(altura.value),
        peso: Number(peso.value),
        imc: getImc(),
        usuario_email_fk: email.value
    }
}


function getImc() {
    const altura = Number(altura.value);
    const peso = Number(peso.value);

    return peso / (altura * altura);
}
