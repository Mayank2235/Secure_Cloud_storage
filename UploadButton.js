import React from "react";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";

function UploadButton() {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log("Files uploaded:", acceptedFiles);
    },
  });

  return (
    <div {...getRootProps()} style={{ textAlign: "center", margin: "20px 0" }}>
      <input {...getInputProps()} />
      <Button variant="contained" color="primary">
        Upload Files
      </Button>
    </div>
  );
}

export default UploadButton;
