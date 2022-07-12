<div id="top"></div>


<!-- PROJECT SHIELDS -->

[![made-with-js](https://img.shields.io/badge/Made%20with-JS%20-1f425f.svg?logo=javascript)]()
[![Maintenance](https://img.shields.io/badge/Maintained-yes-green.svg)](https://github.com/sebacipolat/app-score-monitor)
[![GitHub](https://img.shields.io/github/license/emalderson/ThePhish)](https://github.com/emalderson/ThePhish/blob/master/LICENSE)
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Made With Love](https://img.shields.io/badge/Made%20With-Love-orange.svg)](https://github.com/chetanraj/awesome-github-badges)



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://raw.githubusercontent.com/sebacipolat/app-score-monitor/master/images/dog_inspector.jpeg" alt="Logo" width="150" height="150">
  </a>

  <h2 align="center">App Score Monitor</h3>

  <p align="center">
    Divulgar el score de tu app, nunca fue tan facil!
    <br />
    <a href="https://medium.com/@sebastiancipolat/monitor-de-scoring-app-en-slack-319bd5a41516"><strong>Articulo en medium relacionado. »</strong></a>
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Acerca De:
El score de una app es una de las primeras cosas que ven tus futuros usuarios en los stores. Un buen o mal puntaje influira en la decisión sobre la instalación de la app.
Poder divulgarlo dentro de tu organización es una forma genial de aumentar el compromiso de todos los miembros.

Este pequeño script te ayudara a extraer el score de tu app en Google Playstore y compartilo en Slack


### Built With


* [![made-with-js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)]()

* [![nodejs](	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()

<p align="right">(<a href="#top">back to top</a>)</p>


### Instalacion
 
1. Clonar el repo
   ```sh
   git clone https://github.com/sebacipolat/app-score-monitor.git
   ```
3. Instalar NPM packages
   ```sh
   npm install
   ```
4. Definir las siguientes variables de entorno:
   ```
    PACKAGE_ID="com.your.app" //Es el nombre del paquete que identifica a la app
    COUNTRY_ID="ar" //Codigo del pais en 2 digitos, ej ar=Argentina , us=USA
    SLACK_WEBHOOK="URL_SLACK" //URL al webook de Slack
   ```

<!-- USAGE EXAMPLES -->
## Run
 Ejecutar app.js
 
  ```sh
   node app.js
   ```
    Si todo funciona correctamente veras lo siguiente:

   ![image](https://user-images.githubusercontent.com/1523404/178396755-def4ffa6-3d26-4852-a065-c67e4efaefb6.png)

   
<!-- SLAC Messages -->
## Mensajes de Estado

| Estado          | Mensaje | 
|-----------------|---------|
| Score actual    |  <img src="https://user-images.githubusercontent.com/1523404/178397195-622cafa1-c874-45e8-9a5c-d47ab554e603.png" alt="Score actual " width="550" height="350"/>       |
| Score muy bajo  | <img src="https://user-images.githubusercontent.com/1523404/178397408-00233a54-3566-4d5f-a794-c4ec572dfb32.png" alt="Score muy bajo" width="550" height="350"/>         |
| Score en subida |   <img src="https://user-images.githubusercontent.com/1523404/178397767-917b363d-5519-4138-b755-8a4537894ef4.png" width="550" height="350"/>       |
| Score en bajada |   <img src="https://user-images.githubusercontent.com/1523404/178397643-1f782c6f-0f63-4c01-a0bd-d8ee78501f73.png" alt="Score en bajada" width="550" height="350"/>       | 

# Botones:

<b>App</b> te llevara a la ficha de la app en Google Playstore

<b>Score Historial</b> Deberas definir la url de la sección Estadisticas de tu Play Console, 

para poder hacerlo deberas editar los archivos dentro de la carpeta 'slack_blocks'


<!-- CONTACT -->
## Contact

Sebastian Cipolat - [@seba_cipolat]([https://twitter.com/your_username](https://twitter.com/seba_cipolat)) 

Github: [https://github.com/sebacipolat]([https://github.com/sebacipolat](https://github.com/sebacipolat))

<p align="right">(<a href="#top">back to top</a>)</p>


