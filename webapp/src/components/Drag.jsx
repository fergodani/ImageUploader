import React, { useState, useEffect, useContext, useRef } from "react";
import { useDropzone } from 'react-dropzone';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { ImageContext } from "../context/imageContext";
import Loader from "./Loader";

export default function Drag() {
  const { state,setState, setPercent } = useContext(ImageContext);
  const inputRef = useRef(null);
  const loadingState = {
      existsImage: false,
      isLoading: true
  }

  const [files, setFiles] = useState([]);
  const app = initializeApp({
    apiKey: "AIzaSyANm69zqjND_acxnlBSi4fEXSDABOiu8aU",
    authDomain: "image-uploader-2b103.firebaseapp.com",
    projectId: "image-uploader-2b103",
    storageBucket: "image-uploader-2b103.appspot.com",
    messagingSenderId: "144114971950",
    appId: "1:144114971950:web:906d318d72755e267f36bf"
  })
  const storage = getStorage(app);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  useEffect(() => {
    uploadImage();
  }, [files]);

  async function uploadImage() {
    if (files.length != 0) {
      setState(loadingState);
      const storageRef = ref(storage, `/images/${files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            let state = {
              url,
              isLoading: false,
              existsImage:true
            }
            setState(state);
          })
        }
      )

    }
  }

  const handleClick = () => {
    inputRef.current.click();
  }

  function handleChange(event) {
    //setState(loadingState);
    setFiles(event.target.files);
  }

  return (
    <div className="drag_card">
    { state.isLoading ? <Loader/> :
    <div className="drag_card">
          <h2>Upload your image</h2>
          <h4>File should be Jpeg, Png...</h4>
          <div id="drag" {...getRootProps({ className: 'dropzone' })}>
            <img src="/image.svg" alt="logo" />
            <h4>Drag & Drop your image here</h4>
          </div>
          <h4>Or</h4>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleChange} />
          <button onClick={handleClick}>Choose a file</button>
    </div>
    }
    </div>
  );
}