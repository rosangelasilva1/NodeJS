var Usuario = require("../models/usuario")

var HomeController = {
    indexqualquercoisa: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },
    usuario: function(req,res,next){
        
        var usuario = new Usuario();

        res.send("Olá usuário");
    }
}

module.exports = HomeController;