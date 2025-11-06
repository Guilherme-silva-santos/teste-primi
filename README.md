# 🎬 Movie App – Docker Setup

Este projeto é composto por três serviços principais:

- **Frontend** (porta `80`)
- **Backend (Node + Prisma)** (porta `3000`)
- **Banco de Dados PostgreSQL** (porta `5433` externa / `5432` interna)

---

## 🚀 Pré-requisitos

Antes de rodar o projeto, garanta que você possui instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

Verifique:
```bash
docker -v
docker compose version
```

---

## 🧱 Estrutura do Projeto

```
.
├── docker-compose.yml
├── back-end/
│   ├── Dockerfile
│   └── ...
└── front-end-primi/
    ├── Dockerfile
    └── ...
```

---

## ⚙️ Configuração via Docker Compose (Recomendado)

O Docker Compose sobe todos os serviços (backend, frontend e banco) de uma só vez.

### 🔧 Build e subir os containers
```bash
docker compose up --build
```

### 🧩 Rodar em segundo plano
```bash
docker compose up -d
```

### 🧹 Parar os containers
```bash
docker compose down
```

---

## 🐘 Serviço de Banco de Dados

- Host interno: `db`
- Porta interna: `5432`
- Porta externa: `5433`
- Database: `movie_db`
- Usuário: `postgres`
- Senha: `postgres`

String de conexão (usada no backend):
```
postgresql://postgres:postgres@db:5432/movie_db?schema=public
```

---

## 🔥 Backend (Build e Execução Manual)

> Pasta: `back-end/`

### 🏗️ Build da imagem
```bash
docker build -f Dockerfile -t backend:latest .
```

### ▶️ Rodar container
```bash
docker run -it -p 3000:3000 backend:latest
```

A API estará disponível em:
```
http://localhost:3000
```

---

## 🌐 Frontend (Build e Execução Manual)

> Pasta: `front-end-primi/`

### 🏗️ Build da imagem
```bash
docker build -f Dockerfile -t frontend:latest .
```

### ▶️ Rodar container
```bash
docker run -it -p 80:80 frontend:latest
```

O site estará disponível em:
```
http://localhost
```

---

## 🧰 Comandos úteis

| Ação | Comando |
|------|----------|
| Ver containers ativos | `docker ps` |
| Ver logs do Compose | `docker compose logs -f` |
| Acessar container do backend | `docker exec -it backend_app sh` |
| Acessar container do banco | `docker exec -it backend_postgres psql -U postgres -d movie_db` |

---

## 🧠 Observações

- O backend usa **Prisma** para gerenciar o banco de dados.  
  O schema é sincronizado automaticamente ao subir o container.
- O frontend é servido via **Nginx** na porta 80.
- Certifique-se de que nenhuma dessas portas (80, 3000, 5433) esteja sendo usada por outro processo local.

---

Feito com ❤️ usando **Node.js**, **React** e **PostgreSQL**.
