const database = require('../models');

class CadastrarController {
    static async cadastrarAluno(req, res) {
        const novoUsuario = req.body;
        novoUsuario['tipo'] = 'Aluno';

        await database.Usuarios.create(novoUsuario);
        
        try {
            novoUsuario['usuario_email_fk'] = novoUsuario.email;

            const novoUsuarioCriado = await database.Alunos.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async cadastrarPersonal(req, res) {
        const novoUsuario = req.body;

        const cpf = novoUsuario.cpf;
        novoUsuario['tipo'] = 'Personal';

        await database.Usuarios.create(novoUsuario);
        
        try {
            novoUsuario['cpf'] = usuario.cpf;

            const novoUsuarioCriado = await database.Personais.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}

module.exports = CadastrarController;
