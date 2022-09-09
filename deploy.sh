docker build -f frontend/dely/dockerfiles/Dockerfile.prod -t lakleij/dely-app:latest -t lakleij/dely-app:$SHA ./frontend/dely
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
docker push lakleij/dely-app --all-tags