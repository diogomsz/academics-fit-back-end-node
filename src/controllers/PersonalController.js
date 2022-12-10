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

    static async getPersonalById(req, res) {
        const { id } = req.params;
        try {
            const personal = await database.Personais.findOne({ where: { cpf: id } });
            return res.status(200).json(personal);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async updatePersonal(req, res) {
        const { id } = req.params;
        const novoPersonal = req.body;
        try {
            await database.Personais.update(novoPersonal, { where: { cpf: id } });
            const personalAtualizado = await database.Personais.findOne({ where: { cpf: id } });
            return res.status(200).json(personalAtualizado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    static async deletePersonal(req, res) {
        const { id } = req.params;
        try {
            await database.Personais.destroy({ where: { cpf: id } });
            return res.status(200).json({ mensagem: `Personal ${id} deletado com sucesso` });
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}

module.exports = PersonalController;
