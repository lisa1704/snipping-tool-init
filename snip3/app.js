//imports
const express = require('express');// for creating routes
const app = express(); //initialize express

const fs = require("fs"); //read/create files
const multer = require('multer'); //for uploading files to our server

const { createWorker } = require('tesseract.js'); //for reading images
const worker =  createWorker({
    logger: progress => {
        this.progressStatus = progress.status;
        this.progress = progress.progress;
        this.progressBar.set(progress.progress * 100);
        this.changeDetectionRef.markForCheck();
      }
});


//storage
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

//save

const upload = multer({storage:storage}).single("avatar");

app.set("view engine","ejs")

app.get('/upload', (req,res)=>{
    console.log('heyyy')
})

//routes
app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/upload',(req,res)=>{
    upload(req,res,err=>{
        fs.readFile(`./uploads/${req.file.originalname}`,(data)=>{
            //if(err) return console.log('Errror',err);

            worker
            .recognize(data)
            .progress((progress)=>{
                console.log(progress);
            })
           .catch((error)=>{
               console.log(error);
           })
            .then(result =>{
                res.send(result.text)
            })
            .finally(()=> worker.terminate());
        })
    })
})

//start our server
const PORT =  5000 || process.env.PORT;
app.listen(PORT,()=>console.log(`Hey I'm running on port ${PORT}`));