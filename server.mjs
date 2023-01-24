import { createServer } from 'http';
import {mysql} from 'mysql';




createServer((req, res) => {
  res.write('Hello World!');



  var con = mysql.createConnection({

    host: "unimundial.edu.mx",
    user: "wwunim_sci",
    password : "Cy4?K6,L0kZu",
    database : "wwunim_sci"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });  









  res.end();












}).listen(process.env.PORT);
