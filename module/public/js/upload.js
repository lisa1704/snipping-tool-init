function uploadImage(){
    const ref = firebase.storage().ref();
    const file = document.querySelector("#uploadimage").files[0]
    const name = new Date()+ '-'+file.name
    const metadata={
        contentType: file.type
    }
    const task = ref.child(name).put(file, metadata)

    task
     .then(snapshot => snapshot.ref.getDownloadURL())
     .then(url =>{
         console.log(url);
         console.log("image upload successful")
         const image = document.querySelector("#myimage")
         image.src =url;
     })
     .catch(console.error);
}   