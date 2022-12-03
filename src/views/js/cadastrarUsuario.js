const email = document.querySelector('#email');
const nome = document.querySelector('#nome');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#botao');
const confirmarSenha = document.querySelector('#confirmarSenha');
const resultado = document.querySelector('.resultado');

botao.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const usuario = getObjectFromForm();
        console.log(usuario);
        const response = await fetch('http://localhost:3030/cadastrar', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

function getObjectFromForm() {
    return {
        email: email.value,
        nome: nome.value,
        senha: senha.value
    }
}
