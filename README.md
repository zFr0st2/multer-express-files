##Multer-Express-Files 📁🚀


#Configuración Inicial 🚀

---

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

---

En esta sección se realiza la importación de las librerías necesarias (Express, Multer y Path) y se inicializa una aplicación Express, además de especificar el puerto en el que se ejecutará el servidor.

#Configuración del Almacenamiento con Multer 🗃️

---

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, '/upload');
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

---

Multer se configura con un objeto storage, definiendo la carpeta de destino y el nombre de archivo para los archivos subidos. En este caso, los archivos se guardarán en la carpeta 'upload', conservando el nombre original del archivo.

#Ruta para Subir Archivos 📁

---

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido con éxito');
});

---

Se establece una ruta POST '/upload' que utiliza el middleware de Multer configurado anteriormente. La ruta espera un solo archivo con el nombre de campo 'file'. Al completarse la carga, se envía una respuesta indicando el éxito de la operación.

#Iniciar el Servidor 🚀

---

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

---

La aplicación Express se inicia y escucha en el puerto especificado. Una vez que el servidor está en marcha, se muestra un mensaje en la consola.

##Entendiendo el Código 🔍
multer.diskStorage: Configura el almacenamiento para Multer, especificando la carpeta de destino y el nombre del archivo.

upload.single('file'): Indica que se espera un solo archivo con el nombre de campo 'file' en la solicitud.

Ruta '/upload': Gestiona las solicitudes POST para subir archivos, utilizando el middleware de Multer.

console.log: Proporciona información sobre el estado del servidor.

Este código facilita la carga de archivos en una aplicación Express, permitiendo una configuración sencilla y personalizable con Multer. ¡Listo para manejar tus archivos de manera eficiente! 🚀
