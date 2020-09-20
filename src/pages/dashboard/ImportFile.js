import React from 'react';

const ImportFile = (props) => {
  var fileReader

  const handleFileRead = (e) => {
    const content = fileReader.result
    console.log(content)
  }

  const handleFileChosen = (file) => {
    console.log(file)
    fileReader = new FileReader()
    fileReader.onloadend = handleFileRead
    fileReader.readAsText(file)
  }

  return (
    <div>
      <input type='file' onChange={e=>handleFileChosen(e.target.files[0])}/>
    </div>
  )

}

export default ImportFile