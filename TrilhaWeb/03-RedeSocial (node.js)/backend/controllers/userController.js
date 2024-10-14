const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const connection = require('../config/db');


exports.getAllUsers = (req, res) => {
  UserModel.getAll((err, users) => {
    if (err) {
      res.status(500).send('Erro');
    } else {
      res.status(200).send(users);
    }
  });
};

exports.createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
      return res.status(400).send('Campos obrigatórios');
    }
    const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
    connection.query(checkEmailQuery, [email], async (err, results) => {
      if (err) {
        return res.status(500).send('Erro');
      }
      if (results.length > 0) {
        return res.status(400).send('E-mail em uso');
      }

      const hashedPassword = await bcrypt.hash(senha, 10);

      const insertUserQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
      connection.query(insertUserQuery, [nome, email, hashedPassword], (err, result) => {
        if (err) {
          return res.status(500).send('Erro');
        }
        res.status(201).send('Usuário criado');
      });
    });
  } catch (error) {
    res.status(500).send('Erro');
  }
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).send('ID obrigatório');
  }
  const deleteUserQuery = 'DELETE FROM usuarios WHERE id = ?';
  connection.query(deleteUserQuery, [userId], (err, result) => {
    if (err) {
      return res.status(500).send('Erro');
    }

    if (result.affectedRows === 0) {
      return res.status(404).send('Não encontrado');
    }
    res.status(200).send('Deletado');
  });
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).send('Campos obrigatórios');
    }
    const checkUserQuery = 'SELECT * FROM usuarios WHERE email = ?';
    connection.query(checkUserQuery, [email], async (err, results) => {
      if (err) {
        return res.status(500).send('Erro');
      }
      const user = results[0];
      const isPasswordValid = await bcrypt.compare(senha, user.senha);
      if (!isPasswordValid) {
        return res.status(400).send('senha invalida');
      }
      const token = jwt.sign(
        { id: user.id, email: user.email },'env',{ expiresIn: '1h' } 
      );
      res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
};
