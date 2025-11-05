# 🎬 Movie API — Catálogo Interativo de Filmes

Aplicação backend desenvolvida em **Node.js**, **Express**, **TypeScript** e **Prisma ORM**, que fornece um catálogo interativo de filmes com informações, locais de filmagem (exibíveis em mapa) e plataformas onde estão disponíveis.

---

## 🚀 Tecnologias Utilizadas
- **Node.js + Express** — Servidor HTTP e rotas RESTful  
- **TypeScript** — Tipagem estática e segurança em tempo de desenvolvimento  
- **Prisma ORM** — Acesso ao banco de dados PostgreSQL  
- **Zod** — Validação de dados e schemas tipados  
- **Swagger** — Documentação interativa da API  
- **PostgreSQL** — Banco de dados relacional  
- **Docker (opcional)** — Para containerização e fácil deploy  

---

## ⚙️ Configuração do Projeto

### 🧩 Pré-requisitos
- Node.js 18+  
- PostgreSQL rodando localmente (ou via Docker)

---

## 📦 Instalação
```bash
# Clonar o repositório
git clone https://github.com/guilherme-silva-santos/teste-primi.git
cd movie-api

# Instalar dependências
npm install
```

---

## 🧱 Configuração do Banco de Dados
Edite o arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://postgres:senha@localhost:5432/movie_api"
```

## 🧩 Executar Migrações e Seeds
```bash
# Criar as tabelas
npx prisma migrate dev --name init

# Gerar client Prisma
npx prisma generate

# Popular banco com dados iniciais
npm run seed
```

---

## ▶️ Rodar a aplicação
```bash
npm run dev
```

Servidor disponível em:  
👉 **http://localhost:3000**

Swagger Docs disponível em:  
👉 **http://localhost:3000/docs**

---

## 🧠 Endpoints Principais

| Método | Rota | Descrição |
|--------|------|------------|
| **GET** | `/movies` | Lista todos os filmes com filtros e paginação |
| **GET** | `/movies/:id` | Retorna detalhes de um filme (inclui locais e plataformas) |
| **POST** | `/movies` | Cria um novo filme com locais de filmagem |
| **PUT** | `/movies/:id` | Atualiza um filme existente |
| **DELETE** | `/movies/:id` | Remove um filme (com cascade nos relacionamentos) |

---

## 📦 Exemplo de Criação de Filme
```json
{
  "title": "Interestelar",
  "description": "Exploração espacial em busca de um novo lar.",
  "releaseYear": 2014,
  "rating": 9.2,
  "imageUrl": "https://image.tmdb.org/t/p/w500/interestelar.jpg",
  "locations": [
    {
      "name": "Islândia - Cenas do planeta gelado",
      "address": "Svínafellsjökull, Islândia",
      "lat": 64.0164,
      "lng": -16.8138,
      "notes": "Cenas do planeta de gelo"
    }
  ]
}
```

---

## 🗺️ Recursos
- CRUD completo com validações (`Zod`);
- Filtros e paginação (`title`, `genre`, `year`);
- Relacionamentos:
  - Locais de filmagem (`lat/lng`)
  - Plataformas (`Netflix`, `HBO`, etc.)
  - Gêneros;
- Exclusão em cascata;
- Documentação Swagger.

---

## 🧰 Scripts Disponíveis

| Script | Descrição |
|--------|------------|
| `npm run dev` | Inicia o servidor em modo desenvolvimento |
| `npm start` | Inicia o servidor compilado |
| `npm run seed` | Popula o banco com dados iniciais |
| `npx prisma studio` | Abre o painel visual do Prisma |

---

## 💾 Estrutura de Pastas
```
src/
 ┣ config/          # Configuração do Prisma
 ┣ controllers/     # Lógica de controle das rotas
 ┣ service/         # Regras de negócio e acesso ao banco
 ┣ routes/          # Definição das rotas
 ┣ middleware/      # Middlewares (validação e erros)
 ┣ validations/     # Schemas Zod
 ┣ types/           # Tipagens globais
 ┗ server.ts        # Ponto de entrada da aplicação
```
