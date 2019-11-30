const Usuarios = require('./../models/Usuarios');


exports.MostrarAddUser = (req, res) => {
	Usuarios.find().then(result => {
		res.render('add-user', {
			user : req.session.user,
			isAdmin: req.session.isAdmin,
			loggedIn: req.session.loggedIn,
			usuarios: result
		})
	})
}

exports.AddUser = (req, res) => {
	const user = req.body.user;
	const pass = req.body.pass;
	const isAdmin = req.body.isAdmin;

	let newUser = new Usuarios ({user: user, pass: pass, isAdmin: isAdmin});

	newUser.save().then(ok => {
		res.redirect('/admin/add-usuario');
	}).catch(erro => {
			console.log(erro);
	});


}

exports.Remover = (req, res) => {
	Usuarios.findByIdAndRemove(req.params.id).then(result => {
		res.redirect('/admin/add-usuario');
	}).catch(erro => {
		console.log(erro);
	});
}
