# Docker compose file
Docker compose services

> Note: we are making use of the `.env` file for some variables.

## Elastic Search `es` service
We are using the Docker image from Dockerhub in a single node installation mode for simplicity.
After running `docker compose -f services.yml up -d` command Elastic Search instance will be up and listening on port 9200. You can verify the state of the instance by calling `https://localhost:9200` url and using `elastic` as username and `P@ssw0rd` as the password.