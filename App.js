import React from "react";
import Navbar from "./components/Navbar";
import FileList from "./components/FileList";
import UploadButton from "./components/UploadButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <UploadButton />
        <FileList />
      </div>
    </div>
  );
}

export default App;
