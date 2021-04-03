const canIRun  = navigator.mediaDevices.getDisplayMedia 

const takeScreenShot = async () => {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: 'screen' },
      })

      const track = stream.getVideoTracks()[0]

      const imageCapture = new ImageCapture(track)

      const bitmap = await imageCapture.grabFrame()

      track.stop()

      const canvas = document.getElementById('snapcanvas') 

      canvas.width = bitmap.width
      canvas.height = bitmap.height
      const context = canvas.getContext('2d')
      context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height)
      const image = canvas.toDataURL()

      //save image
      //var w = window.open('about:blank','image from canvas');
      //w.document.write("<img src='"+image+"'alt='from canvas'/>")

      const res = await fetch(image)
      const buff = await res.arrayBuffer()

      const file = [
        new File([buff], `photo_${new Date()}.jpg`, {
          type: 'image/jpeg',
        }),
      ]
      return file 

      
}     

const button = document.getElementById('snapvideo').onclick = () => canIRun ? takeScreenShot() : {}

