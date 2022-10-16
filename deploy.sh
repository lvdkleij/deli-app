docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

docker build -f backend/authentication/dockerfiles/Dockerfile.prod -t lakleij/app-shopping-list-backend-user-authentication ./backend/authentication
docker build -f frontend/dely/dockerfiles/Dockerfile.prod -t lakleij/app-shopping-list-frontend-app ./frontend/dely
docker build -f nginx/Dockerfile -t lakleij/app-shopping-list-reverse-proxy ./nginx

docker push lakleij/app-shopping-list-backend-user-authentication:latest
docker push lakleij/app-shopping-list-frontend-app:latest
docker push lakleij/app-shopping-list-reverse-proxy:latest