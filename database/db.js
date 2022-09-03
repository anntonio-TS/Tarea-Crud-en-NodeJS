const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hola',
    databse: 'crud_nodejs_db'
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('CONECTADO a la BD de Mysql');
})

module.exports = conexion;