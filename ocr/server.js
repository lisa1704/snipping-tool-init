const express = require('express');
const multer = require('multer');
const app = express();
const fs = require('fs');
const { createWorker } = require('tesseract.js')

const worker = createWorker({
    logger: m => console.log(m),
  });

  
//middlewares
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const PORT = process.env.PORT | 5000;

var Storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + '/images');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: Storage
}).single('image');
//route
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/upload', (req, res) => {
  console.log(req.file);
  upload(req, res, err => {
    if (err) {
      console.log(err);
      return res.send('Something went wrong');
    }

    var image = fs.readFileSync(
      __dirname + '/images/' + req.file.originalname,
      {
        encoding: null
      }
    );
    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize(image).catch((error)=>{
            console.log(error);
        })
        console.log(text);
        await worker.terminate();
      })();
    
  });
});

//app.get('/showdata', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});