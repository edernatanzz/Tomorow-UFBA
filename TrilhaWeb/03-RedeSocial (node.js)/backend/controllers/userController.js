const UserModel = require('../models/userModel');
const connection = require('../config/db'); 
const { verify } = require('jsonwebtoken');


exports.getAllUsers = (req, res) => {
  UserModel.getAll((err, users) => {
    if (err) {
      res.status(500).send('Erro ao buscar usuários');
    } else {
      res.status(200).send(users);
    }
  });
};
exports.createUser = async (req, res) => {
    try {
      const { nome, email, senha } = req.body;
      if (!nome || !email || !senha) {
        return res.status(400).send('Todos os campos são obrigatórios');
      }

      const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
      connection.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
          console.error('Erro ao verificar e-mail:', err);
          return res.status(500).send('Erro ao verificar e-mail');
        }
        if (results.length > 0) {
          return res.status(400).send('E-mail já está em uso');
        }
        const insertUserQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        connection.query(insertUserQuery, [nome, email, senha], (err, result) => {
          if (err) {
            console.error('Erro ao criar usuário:', err);
            return res.status(500).send('Erro ao criar usuário');
          }
          res.status(201).json({ message: 'Usuário criado com sucesso!', userId: result.insertId });
        });
      });
  
    } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro ao processar a requisição');
    }
  };

  exports.deleteUser = (req, res) => {
    const userId = req.params.id; 
  
    if (!userId) {
      return res.status(400).send('ID do usuário é obrigatório');
    }
  
    const deleteUserQuery = 'DELETE FROM usuarios WHERE id = ?';
  
    connection.query(deleteUserQuery, [userId], (err, result) => {
      if (err) {
        console.error('Erro ao deletar usuário:', err);
        return res.status(500).send('Erro ao deletar usuário');
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).send('Usuário não encontrado');
      }
  
      res.status(200).send('Usuário deletado com sucesso!');
    });
  };
