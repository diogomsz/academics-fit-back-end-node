const database = require('../models');

class SolicitacoesFichaController {
    static async pegaTodasAsSolicitacoes(req, res) {
        try {
            const todasAsSolicitacoes = await database.SolicitacoesFicha.findAll();
            return res.status(200).json(todasAsSolicitacoes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = SolicitacoesFichaController;
