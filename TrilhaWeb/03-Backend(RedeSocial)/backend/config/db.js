const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123eder123',
  database: 'alunonode'
});
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

