

aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 986267899441.dkr.ecr.eu-west-1.amazonaws.com
docker build -f frontend/dely/dockerfiles/Dockerfile.prod -t 986267899441.dkr.ecr.eu-west-1.amazonaws.com/docker ./frontend/dely
docker push 986267899441.dkr.ecr.eu-west-1.amazonaws.com/docker