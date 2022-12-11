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
        const { cpf } = req.params;
        try {
        const umAluno = await database.Alunos.findOne({ where: { cpf: cpf } });
        return res.status(200).json(umAluno);
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }
    
    static async checaSolicitacao(req, res) {
        const { cpf } = req.body;
        try {
            const umAluno = await database.Alunos.findOne({ where: { cpf: cpf } });
            return res.status(200).json(umAluno);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async criaSolicitacaoFicha(req, res) {
        const novoAluno = req.body;
        try {
        const novoAlunoCriado = await database.Alunos.create(novoAluno);
        return res.status(200).json(novoAlunoCriado);
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }
    
    static async atualizaAluno(req, res) {
        const { cpf } = req.params;
        const novasInfos = req.body;
        try {
        await database.Alunos.update(novasInfos, { where: { cpf: cpf } });
        const alunoAtualizado = await database.Alunos.findOne({ where: { cpf: cpf } });
        return res.status(200).json(alunoAtualizado);
        } catch (error) {
        return res.status(500).json(error.message);
        }
    }
}

module.exports = AlunoController;
