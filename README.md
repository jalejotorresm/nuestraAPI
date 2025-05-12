# nuestraAPI

Repositorio de código para la evidencia GA4-220501096-AA1-EV01. Permite realizar operaciones CRUD completas (Crear, Leer, Actualizar, Eliminar) para usuarios, productos y servicios, además de autenticación de usuarios.

## Requisitos previos

Los siguientes elementos son necesarios para ejecutar esta API:

- **Node.js** (v16 o superior)
- **MongoDB Atlas** o una instancia local de MongoDB
- **npm** (incluido con Node.js)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jalejotorresm/nuestraAPI.git
   cd nuestraAPI
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno:

   ```plaintext
   PORT=3000
   DB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<nombre_base_datos>?retryWrites=true&w=majority
   JWT_SECRET=tu_secreto_aqui
   ```

4. Inicia el servidor en modo de desarrollo:
   ```bash
   npx nodemon src/app.js
   ```

## Endpoints

### Usuarios

| Método | Endpoint              | Descripción                  |
| ------ | --------------------- | ---------------------------- |
| POST   | `/api/usuarios`       | Crear un nuevo usuario       |
| POST   | `/api/usuarios/login` | Autenticar usuario (login)   |
| GET    | `/api/usuarios`       | Obtener todos los usuarios   |
| GET    | `/api/usuarios/:id`   | Obtener un usuario por ID    |
| PUT    | `/api/usuarios/:id`   | Actualizar un usuario por ID |
| DELETE | `/api/usuarios/:id`   | Eliminar un usuario por ID   |

#### Ejemplo de cuerpo para crear usuario:

```json
{
  "nombre": "Juan Pérez",
  "correo": "juanperez@example.com",
  "contraseña": "123456"
}
```

---

### Productos

| Método | Endpoint             | Descripción                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/productos`     | Crear un nuevo producto       |
| GET    | `/api/productos`     | Obtener todos los productos   |
| GET    | `/api/productos/:id` | Obtener un producto por ID    |
| PUT    | `/api/productos/:id` | Actualizar un producto por ID |
| DELETE | `/api/productos/:id` | Eliminar un producto por ID   |

#### Ejemplo de cuerpo para crear producto:

```json
{
  "nombre": "Juguete",
  "descripcion": "Un juguete divertido",
  "precio": 10.99,
  "categoria": "Infantil"
}
```

---

### Servicios

| Método | Endpoint             | Descripción                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/servicios`     | Crear un nuevo servicio       |
| GET    | `/api/servicios`     | Obtener todos los servicios   |
| GET    | `/api/servicios/:id` | Obtener un servicio por ID    |
| PUT    | `/api/servicios/:id` | Actualizar un servicio por ID |
| DELETE | `/api/servicios/:id` | Eliminar un servicio por ID   |

#### Ejemplo de cuerpo para crear servicio:

```json
{
  "nombre": "Masaje",
  "descripcion": "Una experiencia de relajacion",
  "precio": 21.95,
  "categoria": "General"
}
```

---

## Dependencias principales

- **Express**: Framework web para Node.js.
- **Mongoose**: ODM para MongoDB.
- **Morgan**: Middleware para registrar solicitudes HTTP.
- **Dotenv**: Carga de variables de entorno.
- **JSON Web Token (JWT)**: Manejo de autenticación.

## Notas importantes

- Asegúrate de usar un secreto fuerte para el `JWT_SECRET` en producción.
