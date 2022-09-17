
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

docker build -f frontend/dely/dockerfiles/Dockerfile.prod -t lakleij/dely-app:latest -t 986267899441.dkr.ecr.eu-west-1.amazonaws.com/public.ecr.aws/v1v2g3g9/lakleij:latest ./frontend/dely

docker push lakleij/dely-app:latest
docker push 986267899441.dkr.ecr.eu-west-1.amazonaws.com/public.ecr.aws/v1v2g3g9/lakleij:latest
#-t lakleij/dely-app:$SHA