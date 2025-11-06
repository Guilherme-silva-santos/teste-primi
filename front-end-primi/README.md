
## Build docker
docker build -f 'DockerFile' -t 'frontend:latest' '.'
## Rodar Docker 
docker run -it -p 80:80/tcp frontend:latest