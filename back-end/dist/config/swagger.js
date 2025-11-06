import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "🎬 Movie API",
            version: "1.0.0",
            description: "Catálogo de filmes interativo com locais de filmagem e plataformas.",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor local",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
export function setupSwagger(app) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("📘 Swagger Docs disponível em http://localhost:3000/docs");
}
