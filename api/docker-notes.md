# Docker notes

| Docker command                            | Description                         |
|-------------------------------------------|-------------------------------------|
| docker build -t {image-name}:{version} ./ | crear imagen                        |
| docker run {image-name}                   | crea un container desde una imagen  |
| docker rm {container-name}                | borra container                     |
| docker rmi {id}                           | remove image                        |
| docker start {container-name}             | arranca para un container ya creado |
| docker stop {container-name}              | parar un container ya creado        |
| docker logs {container-name}              | logs                                |
| docker logs -f {container-name}           | following logs                      |

| Docker command options | Description |
|------------------------|-------------|
| -f                     | borra container que esta en ejecucion  |
| -t                     | con terminal  |
| -i                     | interacciones con consola (normalmente usado con -t)  |
| --name                 | dar nombre al container  |
| -P                     | map all ports (incluidos en Dockerfile "EXPOSE 80")  |
| -d                     | detach, "cierra" la consola de docker  |
| --rm                   | borra el container cuando termina  |
| -p {local-port} : {container-port} | mapea el puerto de mi local con el puerto del container  |
| -v {local-folder}:{docker-folder} | set volume folder outside container  |

# Examples:

```bash
docker run --name my-node-server -p 8080:3000 node-image:1.10  
docker exec -it test /bin/sh  
docker run -it --rm redis redis-cli -h 172.25.32.1  
docker run --name my-redis-db -v ./redis-db:/data -p 6379:6379 -d redis:6.2.6 redis-server --save 10 1  
```

