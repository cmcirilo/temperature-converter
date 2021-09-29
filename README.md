# Temperature Converter

Developed with JS and using Node, Docker tecnologies

## Getting Started

### Repository

- Clone the repository:

```sh
git clone https://github.com/cmcirilo/temperature-converter.git
```

### Docker commands

- Container Commands:

| Description                          | Command                                                                                                                                                             | Obs                                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **run container**                    | `docker container run -d -p 8080:8080 temperature-converter` <br /> `docker container run hello-world` <br /> `docker container run --name myContainer hello-world` | -d to indicate daemon<br /> -p to expose port <br /> if the container does not exist, it will be created, that is, the registry image will be downloaded and the container will be executed. <br /> --name to name container |
| **run container with interactivity** | `docker container run -it ubuntu /bin/bash`                                                                                                                         | -i to indicate interactivity<br /> -t to enable tty (terminal) <br /> ubuntu is ubuntu's image <br /> /bin/bash to use bash                                                                                                  |
| **list running containers**          | `docker container ls`                                                                                                                                               |                                                                                                                                                                                                                              |
| **list all containers**              | `docker container ls -a`                                                                                                                                            | -a to list all, that is, pending, running etc                                                                                                                                                                                |
| **remove container**                 | `docker container rm -f id_container`                                                                                                                               | rm to remove<br /> -f to force <br /> id_container is id or name container                                                                                                                                                   |

- Image Commands:

| Description      | Command                                         | Obs                                                                                     |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| **create image** | `docker image build -t temperature-converter .` | -t to name image <br /> . that is context or directory to send to daemon to build image |
| **list images**  | `docker image ls`                               |                                                                                         |

## Help

cmcirilo@gmail.com

## License
