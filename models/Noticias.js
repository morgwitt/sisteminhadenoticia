const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noticiaSchema = new Schema ({
	titulo: {
		type: String,
		require: true
	},
	noticia: {
		type: String,
		require: true
	}
}, {collection: 'test'});

const Noticias = mongoose.model("test", noticiaSchema);

module.exports = Noticias;