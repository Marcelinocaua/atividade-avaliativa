function registrarUsuario (event) {
    event.preventDefault()

    var nome = document.getElementById('nome').value
    var quantidade = document.getElementById('quantidade').value
    var codigo = document.getElementById('codigo').value
    var marca = document.getElementById('marca').value
   

    console.log(nome,quantidade, codigo, marca)

    var mysql2 = require('mysql2');
    var connection = mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "atividade",
    })

    connection.connect(function(error) {

        if (error) {
            console.log(error.code);
            console.log(error.fatal);
        }
    })

    var query = `insert into produtos (nome, quantidade, codigo, marca) VALUES ("${nome}", "${quantidade}", "${codigo}", "${marca}")`;

    connection.query(query, function(error){
        if(error){
            console.log(error)
            console.log("Ocorreu um erro ao inserir no banco de dados");
        } else {
            alert("Produto cadastrado com sucesso!!!");
        }
    }) 
}


//add evento de submit no formulario
var cadastro = document.getElementById('cadastro')
cadastro.addEventListener('submit', registrarUsuario)