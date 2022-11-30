const { Router } = require('express');
const { Aluno } = require('../models/aluno');
const route = Router();

route.post('/login', (req, res) => {
    const { email, senha } = req.body;
    Aluno.findOne({ where: { email: email, senha: senha } }).then(() => {
        res.status(200).json({ message: 'login realizado com sucesso' });
    }).catch(() => {
        res.status(400).json({ message: 'Email não encontrado' });
    });
});
