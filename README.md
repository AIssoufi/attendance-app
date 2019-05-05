# Attendance App

![Demo Animation](https://gitlab.com/issoufi/attendance-app/raw/assets/Attendance%20App%20-%20connexion%20screen.png?inline=false)
![Demo Animation](https://gitlab.com/issoufi/attendance-app/raw/assets/Attendance%20App%20-%20register%20screen.png?inline=false)

## Description
Conception et réalisation d'une application mobile de contrôle de présence dans
le cadre d’un projet universitaire en master 2. Le pointage des présences est
réalisé à l’aide de la technologie NFC. 

### Réalisations
- Rédaction du cahier de charge
- Conception (maquettes des écrans, architecture, etc.)
- Réalisation de l’application mobile
- Réalisation de l’API RESTful
- Dockerisation de l’application

### Environnement Technique
- Langage : HTML 5, CSS 3, JavaScript (ES6 et 7)
- OS :  macOS
- Framwork : React Native
- Library : ReduxJS, Styled Component, Express, MomentJS, Fort Awesome
- Outil : Docker, Xcode, Android Studio, Postman, Git, SourceTree, GitLab, Trello, Visual Studio Code

## Lancer le projet

### I. Pré-requis
- NodeJS installé
- Yarn installé

### II. Service RESTfull
#### Installation les dépendances
```bash
cd attendance-restfull-api
npm install
```

#### Lancement
```bash
npm run start:dev
```

### III. Application Android et iOS
#### Installtion 
```bash
cd attendance-mobile-app
yarn install
```

#### Lancement sur Android (device ou simulateur)
```bash
yarn run android
```
#### Lancement sur ios (simulateur)
```bash
yarn run ios
```

@author: Issoufi A. <issoufi.adam1 at gmail dot com>