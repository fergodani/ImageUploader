const express = require("express");
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    storageBucker: 'gs://image-uploader-2b103.appspot.com'
};

const expressApp = express();
const app = initializeApp(firebaseConfig);
const port = 5000;

expressApp.use(bp.json({limit: '50mb'}));
expressApp.use(bp.urlencoded({ extended: true, limit: '50mb'}));

const storage = getStorage(app);
const storageRef = ref(storage, 'images');

expressApp.use("/api/upload", async (req, res) => {
    const image = req.body;
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
});

app.listen(port, () => {
    console.log('Restapi listening on ' + port);
  }).on("error", (error) => {
    console.error('Error occured: ' + error.message);
  });
  
  //so the program will not close instantly
  process.stdin.resume();