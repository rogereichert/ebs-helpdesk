// routes/grupoRoutes.js

const express = require('express')
const router = express.Router()
const GrupoController = require('../controllers/grupoController')

/**
 * Rotas para gerenciamento de grupos.
 * POST: Cria um novo grupo.
 * GET: Lista todos os grupos existentes.
 */

router.post('/grupos', GrupoController.criar) // POST /api/grupos
router.get('/grupos', GrupoController.listar) // POST /api/grupos

module.exports = router;