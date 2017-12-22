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
initie la table des distances, contenant le distances entre les différentes villes,  directement après.
lorsque l'utilisateur effectuera un départ de camion, l'algo génétique se mettra en route.
il prendra les villes et les distances stockées precedemment et crée un nombre(dans notre cas 10) de chromosome parent aléatoirement, qui
prendra en compte les noms des villes associés à leurs ressources et la distance totale du trajet ainsi que la somme de 
toutes les ressources récupérées
Les chromosomes enfant subissent une mutation de 30% de leurs gênes.
Après les chromosomes enfants auront la meme architecture mais subieront une mutation aléatoire de 30% avec les parents: cross-over.
C'est à dire que le gene d'un chromosome enfant a 30% de chances d'etre muté avec gêne parent.
une fois cela fait on établit une sélection, on compare chaque chromosomes parents et on garde 60% des meilleurs 
(paramètre qui peut varier). Et on prendra 40% des meilleurs chromosomes enfants.
On recommence ces opérations jusqu'à trouver une suite des meilleurs parents qui ont les meilleurs résultats.
C'est à dire que nous avons trouvé un chemin optimisé.

# authentification:

Nous avons utilisé ce tutoriel pour l'authentification 
[ici](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)



