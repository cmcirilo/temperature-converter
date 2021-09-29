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

| Description          | Command                                                      | Obs                                                                |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ |
| **run container**    | `docker container run -d -p 8080:8080 temperature-converter` | -d to indicate daemon<br /> -p to expose port                      |
| **list containers**  | `docker container ls`                                        |                                                                    |
| **remove container** | `docker container rm -f id_container`                        | rm to remove<br /> -f to force <br /> id_container is id container |

- Image Commands:

| Description      | Command                                         | Obs                                                                                     |
| ---------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| **create image** | `docker image build -t temperature-converter .` | -t to name image <br /> . that is context or directory to send to daemon to build image |
| **list images**  | `docker image ls`                               |                                                                                         |

## Help

cmcirilo@gmail.com

## License
