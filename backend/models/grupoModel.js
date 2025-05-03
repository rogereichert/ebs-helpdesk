// models/grupoModel.js

const db = require('../config/db')

/**
 * GrupoModel
 * Responsável por executar queries relacionadas à tabela `grupos`.
 */
const GrupoModel = {
  /**
 * Cria um novo grupo
 * @param {Object} grupo - Objeto com nome e descrição
 * @returns Promise
 */
  criarGrupo: (grupo) => {
    const { nome, descricao } = grupo
    const sql = 'INSERT INTO grupos (nome, descricao) VALUES (?, ?)'
    return db.promise().execute(sql, [nome, descricao])
  },

  /**
  * Lista todos os grupos cadastrados
  * @returns Promise
  */
  listaGrupos: () => {
    const sql = 'SELECT * FROM grupos ORDER BY nome ASC'
    return db.promise().query(sql)
  },

  /**
     * Atualiza um grupo específico com base no ID.
     * @param {number} id - ID do grupo a ser atualizado.
     * @param {Object} grupo - Objeto com os novos dados (nome, descricao).
     */
  atualizarGrupo: (id, { nome, descricao }) => {
    const sql = 'UPDATE grupos SET nome = ?, descricao = ? WHERE id = ?';
    return db.promise().execute(sql, [nome, descricao, id]);
  },

  /**
   * Exclui um grupo específico com base no ID.
   * @param {number} id - ID do grupo a ser excluído.
   */
  excluirGrupo: (id) => {
    const sql = 'DELETE FROM grupos WHERE id = ?';
    return db.promise().execute(sql, [id]);
  }
}

module.exports = GrupoModel