# Snip and Capture from YouTube module

## Features
- Play the YouTube player
- Pause anywhere to get the **Timestamp**
- Take a snapshot of the player
- Pass the snapshot to cropper
- Crop the image
- Upload to the database backend of firebase
- Get the displayed image uploaded to backend 

## Installing dependencies
```
npm install
yarn add firebase
yarn add html2canvas
npm install express
```
## Run
```
npm start
```
**OR**
```
node server.js
```
It should be running on any browser with the specified host http://localhost:8000

## YouTube player

In the ***public/js/youtube.js*** file you can add any youtube video id 


## Firebase Backend

- Add a project of any name 

- I've added firebase configuration in ***public/js/firebase.js*** file 

- I've set up the upload to backend feature in ***public/js/upload.js*** file

### **Here is the firebase storage console** 
https://console.firebase.google.com/u/3/project/snip-module/storage/snip-module.appspot.com/files

## Quick Start in Docker

Build image
```
docker build -t module_snip ./
```
Run a container based on the image
```
docker run  module_snip
```



