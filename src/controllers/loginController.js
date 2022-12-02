const database = require('../models');

class LoginController {
    static async login(req, res) {
        const { email, senha } = req.body;
        try {
            const usuario = await database.Usuarios.findOne({ where: { email: email, senha: senha } });
            if (usuario) {
                return res.status(200).json({ mensagem: 'Usuário válido', ...usuario.dataValues });
            } else {
                return res.status(404).json({ mensagem: 'Usuário inválido' });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LoginController;
