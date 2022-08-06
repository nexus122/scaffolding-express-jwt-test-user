# Scaffolding de servidor jwt para hacer pruebas

Este es un servidor de node, que mediante express permite generar un token y devolverlo.
Es un servidor de pruebas con fines estudiantiles, y podreis encontrar las credenciales necesarias para obtener un token aqui abajo 👇

## 🐋 Docker

El servidor se puede descargar y ejecutar utilizando Docker.
para ello solo hay que ejecutar en uan consola lo siguiente:

```shell
docker run -p 5000:8080 -d jpromeropereira/jwt-test-token
```

- **-p**: Indica los puertos que utilizara el servidor de node.
  - **5000**: Es el puerto al que tendremos que llamar desde nuestro ordenador para hacer las peticiones
  - **8080**: Es el puerto interno que utilizara node.js para funcionar
- **-d**: Indica que no queremos ver los console log de nuestra maquina linux.

## 📚 Librerias

- **body-parser**: `"^1.20.0"`,
- **cors**: `"^2.8.5"`,
- **express**: `"^4.18.1"`,
- **jsonwebtoken**: `"^8.5.1"`

## 🔐 Credenciales

Datos para identificarte y que te devuelva el Token:

- **Usuario**: user@user.com
- **Password**: 1234

## 📜 Version

- **node.js**: `v16.14.2`
