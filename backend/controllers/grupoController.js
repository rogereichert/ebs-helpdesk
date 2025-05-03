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
                return res.status(400).json({ erro: 'O nome do grupo é obrigatório' })
            }

            // Chama o model para inserir no banco
            await GrupoModel.criarGrupo({ nome, descricao })

            return res.status(201).json({ mensagem: 'Grupo Criado com Sucesso!' })
        } catch (error) {
            console.error('Erro ao criar grupo!', error)
            return res.status(500).json({ erro: 'Erro ao criar o grupo ' })
        }
    },

    // GET api/grupos
    async listar(req, res) {
        try {
            const [grupos] = await GrupoModel.listaGrupos()
            return res.status(200).json(grupos)
        } catch (error) {
            console.log('Erro ao listar grupos', error)
            return res.status(500).json({ erro: 'Erro ao listar grupos ' })
        }
    },

    // PUT /api/grupos/:id
    async atualizar(req, res) {
        console.log('Rota PUT /api/grupos/:id foi chamada'); // <-- Adicione isso
        try {
            const { id } = req.params;
            const { nome, descricao } = req.body;

            if (!nome) {
                return res.status(400).json({ erro: 'O nome do grupo é obrigatório' });
            }

            const [resultado] = await GrupoModel.atualizarGrupo(id, { nome, descricao });

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ erro: 'Grupo não encontrado' });
            }

            return res.status(200).json({ mensagem: 'Grupo atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar grupo:', error);
            return res.status(500).json({ erro: 'Erro ao atualizar grupo' });
        }
    },

    // DELETE /api/grupos/:id
    async excluir(req, res) {
        try {
            const { id } = req.params;

            const [resultado] = await GrupoModel.excluirGrupo(id);

            if (resultado.affectedRows === 0) {
                return res.status(404).json({ erro: 'Grupo não encontrado' });
            }

            return res.status(200).json({ mensagem: 'Grupo excluído com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir grupo:', error);
            return res.status(500).json({ erro: 'Erro ao excluir grupo' });
        }
    }

}

module.exports = GrupoController