import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function FileList() {
  const files = [
    { name: "Document.pdf", size: "1.2 MB" },
    { name: "Image.png", size: "2.5 MB" },
    { name: "Presentation.pptx", size: "4.8 MB" },
  ];

  return (
    <List>
      {files.map((file, index) => (
        <ListItem key={index} divider>
          <ListItemText primary={file.name} secondary={file.size} />
        </ListItem>
      ))}
    </List>
  );
}

export default FileList;
