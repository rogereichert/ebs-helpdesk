// Carrega as variáveis do ambiente
require('dotenv').config()

// Importa os módulos necessários
const express = require('express')
const cors = require('cors')
const app = express()

// Importa a conexão com o banco de dados
const db = require('./config/db')

// Middlewares globais
app.use(cors()) // Permite requisições de diferentes origens
app.use(express.json()) // Converte o body das requisições para JSON

// Testa a conexão com banco de dados ao iniciar
db.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados')
        process.exit(1) // Encerra
    }
    console.log('Conectado ao banco de dados MySql')
})

// Rotas
app.get('/', (req, res) => {
    res.send('API de chamados iniciada com sucesso')
})

const grupoRoutes = require('./routes/grupoRoutes')

// USAR rotas com prefixo /api
app.use('/api', grupoRoutes)

// Porta inicial do servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})