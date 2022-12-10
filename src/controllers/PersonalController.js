const database = require('../models');

class PersonalController {
    static async getPersonal(req, res) {
        try {
            const personal = await database.Personais.findAll();
            return res.status(200).json(personal);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async getPersonalByCpf(req, res) {
        const { cpf } = req.params;
        try {
            const personal = await database.Personais.findOne({ where: { cpf: cpf } });
            return res.status(200).json(personal);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async updatePersonal(req, res) {
        const { cpf } = req.params;
        const novoPersonal = req.body;
        try {
            await database.Personais.update(novoPersonal, { where: { cpf: cpf } });
            const personalAtualizado = await database.Personais.findOne({ where: { cpf: cpf } });
            return res.status(200).json(personalAtualizado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async deletePersonal(req, res) {
        const { cpf } = req.params;
        try {
            await database.Personais.destroy({ where: { cpf: cpf } });
            return res.status(200).json({ mensagem: `Personal ${cpf} deletado com sucesso` });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}

module.exports = PersonalController;
