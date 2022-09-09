docker build -f frontend/dely/dockerfiles/Dockerfile.prod -t lakleij/dely-app:latest ./frontend/dely
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
docker push lakleij/dely-app

#-t lakleij/dely-app:$SHA