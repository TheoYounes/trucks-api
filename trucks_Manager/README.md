# serveur de trucks-api


# contenu
* [avant de commencer](#avant-de-commencer)
* [lancement de la partie cliente](#lancement-front)
* [lancement du server](#lancement-serveur)
* [partie docker](#docker)
* [l'authentification](#authentification)
* [les micro-services](#micro-services)


# avant-de-commencer
installer mongoDB sur [ici](https://docs.mongodb.com/manual/administration/install-community/): 

si vous avez des problèmes de dbPath :
```
mkdir ~/data/db
```
installer ember : 
```
npm install -g ember-cli
npm install -g bower
```

# lancement-front
si vous voulez lancer l'application en mode production allez directement à l'étape docker.
Cependant en mode dev il faut : 
```
cd trucks-api
cd front-trucks
npm install
bower install 
ember server
```

# lancement-serveur
si vous voulez lancer l'application en mode production allez directement à l'étape docker.
Cependant en mode dev il faut : 

tout d'abord lancer la mongo: 
```
mongod
```
lancement des micros services: 
```
cd trucks-api
cd <micro-service>
npm install
node index.js
```
pour lancer le serveur principale : 
```
cd trucks-api
cd trucks-api-server
npm install
node server.js
```
# docker:

installation du projet 
------------------
installer docker : - sur mac [ici](https://docs.docker.com/docker-for-mac/install/)
                   - sur ubuntu [ici](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
                   - sur windows [ici](https://docs.docker.com/docker-for-windows/install/)
si vous avez pas installer docker compose : [ici](https://docs.docker.com/compose/install/)

pour lancer l'application en une ligne:
```
cd <project-name>
docker-compose up
```
ca va lancer 5 conteneurs: 
    - micro service de yahoo-finance
    - micro service de l'IA
    - le serveur principale
    - la base de donnée
    - le front
    
adresse de la mongoDB, le nom de la DB est trucks: 
```
localhost:27027
```

# micro-services

## micro-service-IA

initie la table des villes grace à un fichier JSON contenant une quizaine de villes francaise
initie la table des distances directement après.
lorsque l'utilisateur effectuera un départ de camion, l'algo génétique se mettra en route.
il prendra les villes et les distances stockées precedemment et crée un nombre de chromosome parent aléatoirement, qui
prendra en compte les noms des villes associés à leurs ressources et la distance totale du trajet ainsi que la somme de 
toutes les ressources récupérées
Les chromosomes enfant subissent une mutation de 30% de leurs gênes.
Après les chromosomes enfants auront la meme architecture mais subieront une mutation aléatoire de 30% avec les parents: cross-over.
C'est à dire que le gene d'un chromosome enfant a 30% de chances d'etre muté par un gêne parent.
une fois cela fait on établit une sélection, on compare chaque chromosomes parents et on garde 60% des meilleurs 
(paramètre qui peut varier). Et on prendra 40% des meilleurs chromosomes enfants.
On réitère ces opérations jusqu'à trouver une suite des meilleurs parents qui ont les meilleurs résultats.
C'est à dire que nous avons trouvé un chemin optimisé.

installation mongo 
------------------

add our user to a group docker (sudo), you need to restart your computer.

```
sudo usermod -a -G docker $USER
```
The first step is to pull the image from Docker Hub :
```
docker pull mongo:latest
```
Then need to specify to docker, a locale path /opt/mongodb/db to bind  /data/db (default stockage path for mongodb)
```
sudo mkdir -p /opt/mongodb/db 
```
Second step is to run the images, to create a container : 

```
docker run -p 27017:27017 -v /opt/mongodb/db:/data/db --name my-mongo-dev -d mongo mongod --auth
```
create user admin
------------------


If you want to create any user : 

The docker exec command runs a new command in a running container, permit us to launch client mongo in the container.

```
docker exec -it my-mongo-dev mongo
```
create a super-admin which permit to create/manage other user (writer/reader) 
------------------

```
use admin

db.createUser({user: "camelot", pwd: "0205", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})

```
add user for our db(w+r) :
------------------

first you need to launch mongo client with the super-admin :
```
mongo <ip_server> -u siteUserAdmin -p unPasswordQuiVaBien --authenticationDatabase admin
```
Then we switch to our db, which we want to use here truck-api

```
use truck-api

db.createUser({user: "camelot", pwd: "0205", roles: ["dbOwner"]})

```
commands
------------------



In order to delete all images, use the given command
```
docker rmi $(docker images -q)
```

In order to delete all containers, use the given command
```
docker rm $(docker ps -a -q)
```

# authentification:

This tuto help us a lot for the authentification : 
[ici](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)



