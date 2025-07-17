# Portes95

Portes95 est une traduction et adaptation en français du jeu Doors95 : [Doors95](https://doors95.de)

Doors95 est un navigateur interactif conçu pour enseigner aux utilisateurs les dangers qu'ils peuvent rencontrer tout en effectuant des tâches (quotidiennes) sur un ordinateur.

Vous êtes placé sur un bureau d'ordinateur simulé inspiré de Windows 95 et vous êtes guidé à travers les différentes missions par l'assistant Skippy. L'objectif principal est de terminer la tâche à accomplir sans être infecté par des virus.

Le projet n'est pas encore hébergé.

## Captures d'écran
![Screenshot 2025-05-24 at 08-27-13 ](https://github.com/user-attachments/assets/f1b8bb8b-3878-46a7-b411-9c7a7afc6195)
![Screenshot 2025-05-24 at 08-28-09 ](https://github.com/user-attachments/assets/8483a627-f560-4f04-a7d0-9579294a9480)

## Impact
Doors95 sensibilise à la cybersécurité en simulant les menaces du monde réel dans un environnement amusant et interactif. Les utilisateurs apprennent à repérer et à éviter les risques comme le phishing et les téléchargements dangereux, ce qui le rend accessible à toutes et tous, peu importe le niveau d'expérience.

De plus, le jeu sensibilise à l'importance de ne pas faire confiance à tout sur Internet et de développer sa pensée critique lors de l'interaction avec du contenu numérique.

### Cas d'utilisation
- **Établissements de formation :**  
    Les écoles et les universités peuvent utiliser Portes95 comme outil d'enseignement dans les cours d'informatique ou de cybersécurité, offrant aux étudiant·e·s une expérience pratique dans un environnement sûr.
- **Formation en entreprise :**
    Les entreprises peuvent intégrer Portes95 dans leurs programmes de formation des employé·e·s pour sensibiliser les menaces de cybersécurité et les meilleures pratiques.
- **Campagnes de sensibilisation :**
    Les organisations à but non lucratif et les agences gouvernementales peuvent utiliser le jeu pour éduquer en ligne le public sur la cybersécurité.
- **Apprentissage individuel :**
    Toute personne intéressée à améliorer ses connaissances en cybersécurité peut jouer avec Portes95 pour en savoir plus sur les menaces et comment se protéger en ligne.

## Architecture

Doors95 est structurée autour d'une architecture modulaire axée sur l'événementiel :

- **Gestion d'événements :**  
    Le gestionnaire d'événements de base écoute les actions des utilisateurs (clics, glisser, lancements d'applications, téléchargements de fichiers, etc.) et les achemine vers la logique appropriée. Chaque événement peut déclencher des tâches, des charges utiles (telles que des logiciels malveillants simulés) ou des mises à jour d'interface utilisateur. Cela permet des scripts de mission flexibles et une extension facile avec de nouveaux types d'événements.

- **Tâches & Charges utiles :**  
    Les missions sont définies comme une série de tâches, chacune avec des objectifs spécifiques et des pièges potentiels. Les charges utiles (par exemple, les virus, les popups de phishing) sont déclenchés par certaines actions des utilisateurs ou par le fait de ne pas suivre les pratiques sûres. Le système suit les progrès des utilisateurs et les conséquences en temps réel.

- **Apps disponibles :**  
    Le bureau simulé comprend plusieurs applications interactives :
    - **Messagerie électronique :** Recevoir et interagir avec les e-mails, dont certains peuvent être des tentatives de phishing.
    - **Navigateur Web :** Parcourir les sites Web simulés, télécharger des fichiers et rencontrer des menaces potentielles.
    - **Bloc-notes :** Vous permet de prendre des notes ou de noter des informations importantes.
    - **Antivirus :** Un outil pour analyser les fichiers et les e-mails pour les menaces potentielles. Les utilisateurs peuvent apprendre à utiliser efficacement les logiciels antivirus pour détecter et supprimer les menaces.
    - **Assistant virtuel (Skippy) :**  
      Un assistant virtuel fournit des conseils tout au long des missions. Skippy peut aider les utilisateurs à comprendre les menaces et comment les éviter.

Toutes les applications sont dans des bacs à sable dans l'environnement de jeu, permettant ainsi une expérimentation et un apprentissage sûr.

## Pile technologique

Le projet a été principalement construit à l'aide de technologies Web, par exemple :
- Nuxt 3 (Vue)
- TypeScript
- TailwindCSS
- Pinia

Le déploiement se fait à l'aide de NetLify, synchronisant directement avec l'état actuel du référentiel GitHub.

## Comment fabriquer/déployer

Pour exécuter Portes95 localement, vous devez avoir la dernière version Node.js LTS et le gestionnaire de packages PNPM installé.  
Après avoir cloné le référentiel, les dépendances d'installation d'abord en utilisant `pnpm i`.

- Pour le serveur de développement local, vous pouvez exécuter `pnpm run dev`
- Pour la version en production, exécutez `pnpm generate`

## Potentiels futurs

- **Plus de sujets :**
    Doors95 pourrait couvrir davantage de domaines de cybersécurité - comme la vie privée, la citoyenneté numérique et les menaces avancées - qui se trouvent pour tous les âges et tous les niveaux de compétence.

- **Nouvelles missions :**  
    Grâce à sa configuration modulaire, il est facile d'ajouter de nouveaux scénarios, tels que l'ingénierie sociale, les ransomwares ou les achats en ligne sûrs.

- **Minijeux :**  
    Idées supplémentaires :
    - Repérer les fausses extensions du navigateur
    - Création de mots de passe forts pour bloquer les attaques brutales
    - Trier les e-mails de phishing
    - Décider que faire avec les lecteurs USB mystères
    - Course pour installer des mises à jour logicielles avant que les menaces ne frappent

- **Contenu communautaire :**  
    À l'avenir, les utilisateurs pourraient créer et partager leurs propres missions ou applications, en gardant les choses fraîches et pertinentes.

- **Intégration dans la formation :**
    Doors95 pourrait être utilisée dans des programmes de formation réels, avec un suivi des progrès et des certificats pour les écoles ou les entreprises.

Toutes ces idées visent à rendre Doors95 encore plus utiles et amusantes pour en savoir plus sur la cybersécurité.

## Crédits

Beavers Testing in Production team @ Hackaburg 2025: Lev, Darius, Marinus, Matej, Jonathan

Adaptation et traduction française : EllipseBack

