import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT);


var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'unimundial.edu.mx',
   user: 'wwunim_sci',
   password: 'Cy4?K6,L0kZu',
   database: 'wwunim_sci',
   port: 3306
});

connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
connection.end();