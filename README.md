# Manager de camions


# contenu
* [avant de commencer](#avant-de-commencer)
* [lancement de la partie cliente](#lancement-front)
* [lancement du server](#lancement-serveur)
* [partie docker](#docker)
* [l'authentification](#authentification)
* [les micro-services](#micro-services)
* [le front-end](#front-end)


# avant-de-commencer
installer mongoDB sur [ici](https://docs.mongodb.com/manual/administration/install-community/): 

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

Avant de passer au fonctionnement de notre micro-service, voici une introduction aux algo genetiques.
[introduction](https://www.doc.ic.ac.uk/~nd/surprise_96/journal/vol1/hmw/article1.html): 

Elle est conseillé afin de bien appréhender les concepts de populations parents, enfants, de chromosomes et de gênes.


Le micro-service initie la table des villes grace à un fichier JSON contenant une quizaine de villes francaises
puis initie la table des distances, contenant le distances entre les différentes villes,  directement après.
Lorsque l'utilisateur effectuera un départ de camion, l'algo génétique se mettra en route.
Il prendra les villes et les distances stockées precedemment et crée 10 chromosomes parent aléatoirement,
ces chromosomes prendront auront pour gênes,  les noms des villes associés à leurs ressources, la distance totale du trajet ainsi qu'à la somme de toutes les ressources récupérées(le gênes est l'association de tout ces paramètres).
Une population de chromosomes enfant sera créer à partir des gênes parents.
Les chromosomes enfant ont 30% de chance de subir une mutation de leurs gênes , c'est à dire un changement spontané de la ville du gêne.
Après ces éventuelles mutations, les chromosomes enfants auront la même architectureque l population parent mais subieront une mutation aléatoire de 30% avec les parents: cross-over(échange de gênes entre les parents et les enfants).
Une fois cela fait on établit une sélection, on compare chaque chromosomes parents et on garde 60% des meilleurs(paramètre qui peut varier), c'est à dire le chromosome dont la somme de toutes les ressources récupérés est la plus élevée. Et on prendra 40% des meilleurs chromosomes enfants.
On créer une nouvelle population parent avec ces deux sous-populations puis on recommence ces opérations jusqu'à trouver une suite des meilleurs parents qui ont les meilleurs résultats, c'est à dire, un chemin optimisé.

# authentification:

Nous avons utilisé ce tutoriel pour l'authentification 
[ici](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens)

# front-end

Pour notre partie client, nous avons utilisé le framework Ember.
Ce framework est un peu long à prendre en main mais permet de passer très vite sur les questions de configuration.
Après avoir lancé l'algo génetique en cliquant sur le bouton de lancement, nous affichons sur la map les différents trajets du camion(trajets étant des sous parties du chemin optimisé de l'algo)
Pour le style géneral de l'application nous avons utilisé Semantic-ui dont les styles sont sobres.
