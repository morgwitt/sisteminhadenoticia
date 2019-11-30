const Usuarios = require('../models/Usuarios');


exports.MostrarLogin = (req, res) => {
	res.render('login', {
		user : req.session.user,
		isAdmin: req.session.isAdmin
	});
}

exports.FazerLogin = (req, res) => {
	const user = req.body.user;
    const pass = req.body.pass;

    Usuarios.findOne().where('user', 'pass').equals(user, pass).then(result => {
    	console.log(result);
    	if (result){
    		req.session.user = result;
    		req.session.loggedIn = true;
    		console.log(req.session.user);
    		console.log("loggedIn true");
    		if(result.isAdmin == 1){
    			req.session.isAdmin = true;
    			res.redirect('/admin/add-noticia');
    		}else{
    			res.redirect('/');
    		}
    	}else{
    		 res.redirect('/login');
    	}
    }).catch(erro => {
    	console.log(erro);
        
    	res.end();
    });
}

exports.Deslogar = (req, res) => {
	req.session.destroy();
	res.redirect('/');
}