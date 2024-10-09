const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123eder123',
  database: 'alunonode'
});

// Conexão ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');

  // Criar tabela 'usuarios' se não existir
  const criarUsuario = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      senha VARCHAR(100) NOT NULL
    );
  `;
  
  connection.query(criarUsuario, (err, result) => {
    if (err) {
      console.error('Erro ao criar tabela:', err);
      return;
    }
    console.log('Tabela "usuarios" criada com sucesso!');
  });
});

// Exportar a conexão para ser utilizada em outros módulos
module.exports = connection;
