const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/userControllers');

const ControleAdmin = require('./../controllers/adminControllers');

const ControleLogin = require('./../controllers/loginControllers');


router.get('/', Controle.MostraHome);

router.get('/detalhes/:id', Controle.Detalhar);

router.get('/login', ControleLogin.MostrarLogin);
router.post('/login', ControleLogin.FazerLogin);
router.get('/deslogar', ControleLogin.Deslogar);

router.get('/add-noticia', Controle.MostrarAddNoticia);
router.post('/add-noticia', Controle.AddNoticia);

router.get('/excluirNoticia/:id', Controle.RemoverNoticia);
router.post('/excluirNoticia/:id', Controle.RemoverNoticia);

/*







*/


module.exports = router;