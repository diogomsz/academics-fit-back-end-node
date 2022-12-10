const database = require('../models');

class CadastrarController {
    static async cadastrarAluno(req, res) {
        const novoUsuario = req.body;
        novoUsuario['tipo'] = 'Aluno';

        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async cadastrarPersonal(req, res) {
        const novoUsuario = req.body;
        novoUsuario['tipo'] = 'Personal';

        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}

module.exports = CadastrarController;
