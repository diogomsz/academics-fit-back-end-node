const database = require('../models');


class AlunoController {
    static async pegaTodosOsAlunos(req, res) {
        try {
            const todosOsAlunos = await database.Alunos.findAll();
            return res.status(200).json(todosOsAlunos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmAluno(req, res) {
        const { id } = req.params;
        try {
            const umAluno = await database.Alunos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umAluno);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };

    static async criaSolicitacaoFicha(req, res) {
        const novaSolicitacao = req.body;
        try {
            const novaSolicitacaoCriada = await database.SolicitacoesFicha.create(novaSolicitacao);
            return res.status(200).json(novaSolicitacaoCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async atualizaAluno(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Alunos.update(novasInfos, {
                where: {
                    id: Number(id)
                }
            });
            const alunoAtualizado = await database.Alunos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(alunoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaAluno(req, res) {
        const { id } = req.params;
        try {
            await database.Alunos.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = AlunoController;
