// create a form that takes an image as an input field
import React, { useState } from "react";
import FileUploader from "./formUpload";
import { Button, ButtonGroup } from '@chakra-ui/react'
const axios = require('axios').default;



const ScannerForm = ()=>{
    const [name,setName]=useState("");
    const {selectedFile,setSelectedFile} = useState(null)

    const submitForm = () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", selectedFile);
      
        axios.post("UPLOAD_URL", formData)
          .then((res) => {
            alert("File Upload success");
          })
          .catch((err) => alert("File Upload Error"));
      };

    return(
        <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        <Button onClick={submitForm}>Submit</Button>
      </form>
    
  );
};

export default ScannerForm

