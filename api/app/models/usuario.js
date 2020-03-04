var Usuario = function(){
    this.id = 0 ;
    this.nome = "";
    this.login = "";
    this.email=""; 

    this.salvar = function(){
        if(this.id==0 || this.id=="" || this.id == undefined){
            //TODO inserir na base de dados

        }else{
            //TODO atualizar a base de dados

        }
    }
}
module.exports = Usuario;

