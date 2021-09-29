# Temperature Converter

Developed with JS using Node, Docker tecnologies

## Getting Started

### Repository

- Clone the repository:

```sh
git clone https://github.com/cmcirilo/temperature-converter.git
```

### Docker commands

- Container Commands:

| Description                                            | Command                                                                                                                                                           | Obs                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **run container**                                      | `docker container run -d -p 8080:80 temperature-converter` <br /> `docker container run hello-world` <br /> `docker container run --name myContainer hello-world` | -d to indicate daemon that is container will be running in background <br /> -p to expose port <br /> 8080:80 is the local port and container's port<br /> if the container does not exist, it will be created, that is, the registry image will be downloaded and the container will be executed. <br /> --name to name container |
| **run container with interactivity**                   | `docker container run -it ubuntu /bin/bash`                                                                                                                       | -i to indicate interactivity<br /> -t to enable tty (terminal) <br /> ubuntu is ubuntu's image <br /> /bin/bash to use bash                                                                                                                                                                                                        |
| **run container continuously**                         | `docker container run -d -p 8080:80 nginx`                                                                                                                        |                                                                                                                                                                                                                                                                                                                                    |
| **run container with enviroment variables**            | `docker container run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongouser -e MONGO_INITDB_ROOT_PASSWORD=mongopwd mongo`                                     |                                                                                                                                                                                                                                                                                                                                    |
| **list running containers**                            | `docker container ls`                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                    |
| **list all containers**                                | `docker container ls -a`                                                                                                                                          | -a to list all, that is, pending, running etc                                                                                                                                                                                                                                                                                      |
| **delete container**                                   | `docker container rm -f id_container`                                                                                                                             | rm to remove<br /> -f to force <br /> id_container is id or name container                                                                                                                                                                                                                                                         |
| **inspect container**                                  | `docker container inspect id_container`                                                                                                                           | id_container is id container                                                                                                                                                                                                                                                                                                       |
| **execute commands when container is already running** | `docker container exec -it id_container /bin/bash`                                                                                                                | id_container is id container <br /> -i to indicate interactivity<br /> -t to enable tty (terminal) <br/> /bin/bash to use bash                                                                                                                                                                                                     |
| **start container**                                    | `docker container start id_container`                                                                                                                             | id_container is id container                                                                                                                                                                                                                                                                                                       |
| **stop container**                                     | `docker container stop id_container`                                                                                                                              | id_container is id container                                                                                                                                                                                                                                                                                                       |
| **view container's logs**                              | `docker container logs -t -n 5 id_container`                                                                                                                      | id_container is id container <br/> -n to indicate the number of last lines <br/> -t to show date time in logs                                                                                                                                                                                                                      |
| **view container's logs in real time**                 | `docker container logs -f id_container`                                                                                                                           | id_container is id container <br/> -f to indicate follow that is real time                                                                                                                                                                                                                                                         |

- Image Commands:

| Description      | Command                                         | Obs                                                                                     |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| **create image** | `docker image build -t temperature-converter .` | -t to name image <br /> . that is context or directory to send to daemon to build image |
| **list images**  | `docker image ls`                               |                                                                                         |

## Help

cmcirilo@gmail.com

## License
