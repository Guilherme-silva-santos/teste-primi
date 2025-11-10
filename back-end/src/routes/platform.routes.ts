import { Router } from "express";
import { listPlatforms } from "../controllers/platform.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Platforms
 *   description: Consulta das plataformas de streaming disponíveis
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Platform:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "b7a8d2c1-1f3e-4a1d-9c0d-3b2a9ef59b9f"
 *         name:
 *           type: string
 *           example: "Netflix"
 *         kind:
 *           type: string
 *           example: "streaming"
 *         iconUrl:
 *           type: string
 *           example: "https://cdn-icons-png.flaticon.com/512/870/870910.png"
 */

/**
 * @swagger
 * /platforms:
 *   get:
 *     summary: Lista todas as plataformas de streaming disponíveis
 *     tags: [Platforms]
 *     responses:
 *       200:
 *         description: Lista de plataformas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Platform'
 *       500:
 *         description: Erro ao buscar as plataformas
 */
router.get("/", listPlatforms);

export default router;
