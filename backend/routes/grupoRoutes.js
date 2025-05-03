// routes/grupoRoutes.js

const express = require('express')
const router = express.Router()
const GrupoController = require('../controllers/grupoController')

/**
 * Rotas para gerenciamento de grupos.
 * POST: Cria um novo grupo.
 * GET: Lista todos os grupos existentes.
 * PUT: Atualiza um grupo específico.
 * DELETE: Exclui um grupo específico.
 */

router.post('/grupos', GrupoController.criar) // POST /api/grupos
router.get('/grupos', GrupoController.listar) // POST /api/grupos
router.put('/grupos/:id', GrupoController.atualizar) // PUT /api/grupos/:id
router.delete('/grupos/:id', GrupoController.excluir) // DELETE /api/grupos/:id

module.exports = router;