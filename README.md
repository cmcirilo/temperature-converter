# Temperature Converter

Developed with JS and using Node, Docker tecnologies 

## Getting Started

Clone the repository:

```sh
git clone https://github.com/cmcirilo/temperature-converter.git
```

Docker commands

```sh
create image - docker image build -t temperature-converter . (-t to name image, . that is context or directory to send to daemon to build image)

list images - docker image ls

run container - docker container run -d -p 8080:8080 temperature-converter (-d to indicate daemon, -p to expose port)

list containers - docker container ls

remove container - docker container rm -f container_id (rm to remove, -f to force)
```


## Help

cmcirilo@gmail.com

## License
