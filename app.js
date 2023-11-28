const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, './files');
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido con éxito');
});

app.listen(port, () => {
  console.log(`Servidor iniciado`);
});




//multer.diskStorage = Se configura el almacenamiento para Multer utilizando
//destination = Especifica la carpeta de destino donde se guardarán los archivos subidos
//filname = Determina cómo se nombrará el archivo cuando se almacene
//file.originalname = Determina cómo se nombrará el archivo cuando se almacene
//upload.single('file') = indica que se espera un solo archivo con el nombre de campo 'file'