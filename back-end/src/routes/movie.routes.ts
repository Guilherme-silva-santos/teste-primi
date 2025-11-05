import { Router } from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../controllers/movie.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: CRUD completo de filmes e locais de filmagem
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Location:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         lat:
 *           type: number
 *         lng:
 *           type: number
 *         notes:
 *           type: string
 *
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *         - releaseYear
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         releaseYear:
 *           type: integer
 *         rating:
 *           type: number
 *           format: float
 *         imageUrl:
 *           type: string
 *         locations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Location'
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Lista todos os filmes com filtros e paginação
 *     tags: [Movies]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filtro por título
 *       - in: query
 *         name: genre
 *         schema:
 *           type: string
 *         description: Filtro por gênero
 *       - in: query
 *         name: year
 *         schema:
 *           type: integer
 *         description: Filtro por ano de lançamento
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Lista paginada de filmes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Movie'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     total:
 *                       type: integer
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 */
router.get("/", getAll);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Retorna um filme pelo ID (inclui locais de filmagem)
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Filme encontrado com locais de filmagem
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Filme não encontrado
 */
router.get("/:id", getById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Cria um novo filme com locais de filmagem
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - releaseYear
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               releaseYear:
 *                 type: integer
 *               rating:
 *                 type: number
 *               imageUrl:
 *                 type: string
 *               locations:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Location'
 *           example:
 *             title: Inception
 *             description: Um ladrão que invade sonhos deve realizar o impossível.
 *             releaseYear: 2010
 *             rating: 8.8
 *             imageUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg"
 *             locations:
 *               - name: Paris
 *                 address: Pont de Bir-Hakeim, França
 *                 lat: 48.8553
 *                 lng: 2.2881
 *                 notes: Cena dobrando a cidade
 *               - name: Los Angeles
 *                 lat: 34.0522
 *                 lng: -118.2437
 *                 notes: Cena da perseguição de carros
 *     responses:
 *       201:
 *         description: Filme criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Erro ao criar o filme
 */
router.post("/", create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Atualiza um filme existente
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: Filme atualizado com sucesso
 *       404:
 *         description: Filme não encontrado
 */
router.put("/:id", update);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Remove um filme
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Filme removido com sucesso
 *       404:
 *         description: Filme não encontrado
 */
router.delete("/:id", remove);

export default router;
