import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";

const sampleImageUrl =
  "https://thumbs.dreamstime.com/z/dog-logo-design-vector-template-icon-153847249.jpg";

const UploadImage = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  return (
    <div>
      <h3>Upload Image</h3>
      <img
        src={file ? URL.createObjectURL(file) : sampleImageUrl}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
        alt="dog"
      />
      <input
        type="file"
        name="dog image"
        id="file"
        onChange={(e) => setFile(e.target.files[0])}
        placeholder="choose doggo image"
      />
    </div>
  );
};

export default UploadImage;
