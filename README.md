# Taller 3
Para realizar este taller se creó un backend utilizando node, desarrollando un servicio REST con 2 métodos CRUD
para cada entidad del tema asignado.

### Servicio Rest
Creación y listado de estudiante
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/a0578f9a-681d-4ec9-9175-663330901798)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/743f9926-a7dd-4363-9cda-2a1a94ddb9ef)

Creación y listado de evaluación
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/1a1dbb8a-b47e-4714-acf5-c70eb48fda92)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/da451b51-0d62-466b-83dc-c857f949f79b)

Creación y listado de Registro (entidad transaccional)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/4a32e778-afb6-4878-92b1-c7bcdc9fe8d2)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/fba9b058-f797-4fb4-934c-47382a2342f7)

### Prueba unitaria
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/dcb5bf11-63a8-45a5-9fab-8ae4805b95b2)

### TAG PARA dockerizar el servicio REST y su prueba unitaria
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/c362647b-ff74-4133-a841-a878c09e627a)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/e11b6cfe-2476-47bb-95a9-11905bc67c6a)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/ba362a55-e79a-421d-bfc2-cf2421a33346)

### TAG multistage
Dockerfile
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/a0165c5a-98a3-40b8-be6c-7ab987001c7d)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/f058f069-221a-4851-a337-56d4e391c188)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/a6e9e7ac-c3c3-4bdc-98f1-7d4bde3bb4f2)

Por último, se ejecuta el comando:
`$ docker run -p 4000:4000 --name talleer3 --env-file ./.env pablosaltos/practica3:prueba2`
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/1ed7f7b1-1fbe-48c6-a20f-ee331202b996)

Y se verifica que en el repositorio de dockerhub, se haya creado correctamente
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/e15a40e3-cde0-409b-96ee-92126ca2265b)

Prueba local de imagen publicada con anterioridad
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/5337cb73-a392-413a-aaa3-b18f3a7ebfa1)
![image](https://github.com/pablo-saltos/Talleres-practicos/assets/56652880/cab38efe-27fc-48d2-b7f5-c5b51e3a5b90)



