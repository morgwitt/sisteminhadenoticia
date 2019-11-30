
const express = require('express');
const bodyparser = require('body-parser');  

const mongoose = require('mongoose');

const session = require('express-session');

const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(session({
    secret: '12351R1!%!#$!@@!#',
    resave: false,
    saveUninitialized: false
}));


app.use(express.static('public')); 

const mongoURL = "mongodb+srv://morg:<>@cluster0-1zyoo.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoURL).then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
});

const isAdmin = (req, res, next) =>{
    console.log("verificando se o usuário é adm");
    if(req.session.isAdmin){
        next();
    }else{
        res.redirect('/login');
    }
}

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);


const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', isAdmin, adminRoutes);

/*
//TESTE DE INSERÇÃO / GARANTIR QUE A COLLECTION ESTÁ CORRETA.
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {collection: 'names'});

const User = mongoose.model("Name", productSchema);

let newUser = new User({name: "Vinicius"});

newUser.save().then(ok=> {
    console.log(ok);
}).catch(erro => {
    console.log(erro);
})
*/