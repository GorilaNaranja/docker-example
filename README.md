# DOCKER-EXAMPLE:  

Api (node) + redis database.  
From wsl linux console

```bash
sudo service docker start
sudo service redis-server start

docker-compose up
```

## Visit

http://localhost:8080/save?name=Felipe  
http://localhost:8080


## Example create single image and container

Build api image  
```bash
docker build -t api-redis .
```

Build api container  
```bash
docker run -d -p 8080:3000 api-redis:2
```
