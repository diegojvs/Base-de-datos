//conexion con la base de datos

const mysql=require('mysql');


// retorna un objeto que se guarda en mysqlConecction
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'asesfalsos18',
    database:'clinica',
    port: 3306
});

mysqlConnection.connect(function(err){

    if(err){
        console.log(err);
        return;
    }else{
        console.log('DB is connected!');
    }
});

module.exports=mysqlConnection;// para poder exportar y trabajar con a conexion de la base de datos
