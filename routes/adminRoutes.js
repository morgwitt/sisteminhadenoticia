const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/adminControllers');

const ControleUser = require('./../controllers/userControllers');

router.get('/add-noticia', ControleUser.MostrarAddNoticia);
router.post('/add-noticia', ControleUser.AddNoticia);

router.get('/add-usuario', Controle.MostrarAddUser);
router.post('/add-usuario', Controle.AddUser);

router.get('/excluir/:id', Controle.Remover);




module.exports = router;




