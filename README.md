## Deploy en Dockers aplicando Github Actions
Para realizar esta práctica, se creo un repositorio nuevo en github y en dockerhub. En github se creó un backend el cual es un servicio de tipo REST
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/304196f9-c466-4c38-bd28-cfe452034f87)
 
Se creó un Token en Docker para utilizarlo en GitHub.
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/662d3103-5bc8-4807-9696-59acba8167b1)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/91af3c68-7b43-47bb-943c-4a24039b4e4c)

Luego se procedió a crear los Secrets Docker_User y Docker_Password en la Plataforma GITHUB. (En la descripción del Docker_Password se ubicó el token genrado en dockerhub)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/2cc19517-35ba-4f5a-9111-d684bf8d593a)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/0b6342a7-a2ab-42ff-994f-3b6af0484abf)

Se creó un Action tipo Docker Image para que se genere el Workflow
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/51ca21c9-6f12-4949-af58-8650e3f37399)

Se Dockerizó nuestra aplicación
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/8a5ec12d-d216-408a-89a3-1b214a44ca6f)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/9279682d-722b-4367-a35a-76e72f3357c7)

Se aplicó los siguientes pasos en el archivo docker-image.yml para que genere los contenedores y sistematice las versiones.
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/40571e20-d44a-45db-a4c4-caa4d7fdd7ca)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/bcb9bb51-dce9-4ca1-9b61-ab3c6109cb50)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/61431b94-636e-4b20-b07a-345ac8368554)

Verificación de funcionamiento una vez hecho un commit en gitgub, en donde se observa exitosamente la copilación de la imagen
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/457165f7-d42f-47d3-8885-89595b9e477f)
 ![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/6f34eb2b-16b5-47b4-bbf1-f507451676bb)

Verificamos la repositorio en dockerhub y vemos que la automatización funciona de manera correcta:
![image](https://github.com/pablo-saltos/2Ptaller5/assets/56652880/409519fe-16e5-4f8a-998d-9d63b1b12f3f)
