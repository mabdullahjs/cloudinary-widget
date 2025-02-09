import React from 'react'

const App = () => {

  let myWidget = cloudinary.createUploadWidget({
    cloudName: 'your_cloudname',
    uploadPreset: 'your_uploadpreset'
  }, (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
    }
  })
  return (
    <>
      <button onClick={()=> myWidget.open()}>Upload image</button>
      <div>App</div>
    </>
  )
}

export default App



// https://cloudinary.com/documentation/upload_widget