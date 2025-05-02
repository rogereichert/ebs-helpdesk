// controllers/grupoController.js

const GrupoModel = require('../models/grupoModel')

/**
 * GrupoController
 * Lida com a lógica de negócios e responde as requisições relacionadas a grupos.
 */
const GrupoController = {
    // POST /api/grupos
    async criar(req, res) {
        try {
            const { nome, descricao } = req.body

            // Validação simples
            if (!nome) {
                return res.status(400).json({ erro: 'O nome do grupo é obrigatório'})
            }

            // Chama o model para inserir no banco
            await GrupoModel.criarGrupo({ nome, descricao })

            return res.status(201).json({ mensagem: 'Grupo Criado com Sucesso!'})
        }catch( error ){
            console.error('Erro ao criar grupo!', error)
            return res.status(500).json( { erro: 'Erro ao criar o grupo '})
        }
    },

    // GET api/grupos
    async listar(req, res) {
        try{
            const [grupos] = await GrupoModel.listaGrupos()
            return res.status(200).json(grupos)
        }catch(error) {
            console.log('Erro ao listar grupos', error)
            return res.status(500).json({ erro: 'Erro ao listar grupos '})        
        }
    }
}

module.exports = GrupoController