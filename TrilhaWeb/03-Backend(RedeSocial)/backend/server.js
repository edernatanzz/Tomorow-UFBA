const express = require('express');
const mysql = require('mysql2');
const userRoutes = require('./routes/userRoutes');

const dotenv = require('dotenv')

const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);


const PORT = 1080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
