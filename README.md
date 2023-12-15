# Twitter Clone
A twitter cloning poc using Elasticsearch, Java Spring, and React Typescript. Everything is in one repo.

## Installation
### Docker Compose

- Run `docker` compose infrastructure
```zsh
docker compose -f ./twitter/compose/infrastructure.yml up -d
```

- Run `docker` compose services
```zsh
docker compose -f ./twitter/compose/services.yml up -d
```

- Stop `docker` compose services
```zsh
docker compose -f ./twitter/compose/services.yml down
```
- Stop `docker` compose infrastructure
```zsh
docker compose -f ./twitter/compose/infrastructure.yml down
```
- Delete `docker` network
```zsh
docker network prune
```