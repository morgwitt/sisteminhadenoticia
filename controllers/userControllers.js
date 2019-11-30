
const Noticias = require('../models/Noticias');

exports.MostraHome = (req, res) =>{
	Noticias.find().then(result =>{
		res.render('home', {
			user : req.session.user,
			isAdmin: req.session.isAdmin,
			loggedIn: req.session.loggedIn,
			noticias: result
		});
	});
}

exports.Detalhar = (req, res) => {
	Noticias.findById(req.params.id).then(noticia =>{
		res.render('detalhes', {
			user : req.session.user,
			isAdmin: req.session.isAdmin,
			loggedIn: req.session.loggedIn,
			detalhe_noticia: noticia
		});
	});
}


exports.MostrarAddNoticia = (req, res) => {
	if(req.session.loggedIn){
		res.render('add-noticia', {
			user : req.session.user,
			loggedIn: req.session.loggedIn,
			isAdmin: req.session.isAdmin
		});
	}else{
		res.redirect('/login');
		user : req.session.user
	}
}

exports.AddNoticia = (req, res) => {
	if(req.session.loggedIn){
		const titulo = req.body.titulo;
		const noticia = req.body.noticia;

		let newNoticia = new Noticias ({titulo: titulo, noticia: noticia});

		newNoticia.save().then(ok => {
			console.log(ok);
			res.redirect('/');
		}).catch(erro => {
			console.log(erro);
		})
	}else{
		res.render('/');
	}
}

exports.RemoverNoticia = (req, res) =>{
	Noticias.findByIdAndRemove(req.params.id).then(result => {
		res.redirect('/');
	}).catch(erro => {
		console.log(erro);
	});
}
