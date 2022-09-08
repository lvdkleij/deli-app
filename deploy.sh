docker build -f frontend/dely/dockerfiles/Dockerfile.dev -t lakleij/dely-app ./frontend/dely
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
docker push lakleij/dely-app