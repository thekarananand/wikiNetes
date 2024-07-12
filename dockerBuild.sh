#! /bin/bash

docker_username="thekarananand"
tag="0.0.3"

docker build ./backend \
    -t $docker_username/wikinetes-backend:$tag \
    -t $docker_username/wikinetes-backend:latest

docker build ./frontend \
    -t $docker_username/wikinetes-frontend:$tag \
    -t $docker_username/wikinetes-frontend:latest

docker build ./database \
    -t $docker_username/wikinetes-database-init-container:$tag \
    -t $docker_username/wikinetes-database-init-container:latest

docker build ./nginx/backend-loadbalancer \
    -t $docker_username/wikinetes-backend-loadbalancer:$tag \
    -t $docker_username/wikinetes-backend-loadbalancer:latest

docker build ./nginx/frontend-loadbalancer \
    -t $docker_username/wikinetes-frontend-loadbalancer:$tag \
    -t $docker_username/wikinetes-frontend-loadbalancer:latest

docker build ./nginx/reverse-proxy \
    -t $docker_username/wikinetes-reverse-proxy:$tag \
    -t $docker_username/wikinetes-reverse-proxy:latest

## declare an array variable
declare -a arr=("wikinetes-backend"
                "wikinetes-frontend"
                "wikinetes-backend-loadbalancer"
                "wikinetes-frontend-loadbalancer"
                "wikinetes-reverse-proxy"
                )

## now loop through the above array
for image in "${arr[@]}"
do
   docker push $docker_username/$image
done
