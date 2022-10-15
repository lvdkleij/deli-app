docker compose -f docker-compose.dev.yml up --build
docker compose -f docker-compose.dev.yml up
docker compose -f docker-compose.dev.yml down

docker compose -f docker-compose.prod.yml up --build
docker compose -f docker-compose.prod.yml up
docker compose -f docker-compose.prod.yml down

docker compose -f docker-compose.staging.yml up --build
docker compose -f docker-compose.staging.yml up
docker compose -f docker-compose.staging.yml down

apt-get update; apt-get install curl