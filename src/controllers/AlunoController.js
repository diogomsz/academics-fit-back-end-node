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
        const { cpf } = req.body;
        try {
            const umAluno = await database.Alunos.findOne({ where: { cpf: cpf } });
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
        const novasInfos = req.body;
        const { cpf } = req.body;

        try {
            await database.Alunos.update(novasInfos, {
                where: {
                    cpf: cpf
                }
            });
            const alunoAtualizado = await database.Alunos.findOne({
                where: {
                    cpf: cpf
                }
            });
            return res.status(200).json(alunoAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaAluno(req, res) {
        const { cpf } = req.params;
        try {
            await database.Alunos.destroy({
                where: {
                    cpf: Number(cpf)
                }
            });
            return res.status(200).json({ mensagem: `cpf ${cpf} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = AlunoController;
