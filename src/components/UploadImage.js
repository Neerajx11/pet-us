import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase";

const sampleImageUrl =
  "https://img.freepik.com/free-vector/cute-dog-bites-bone-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3743.jpg";

const UploadImage = ({ progress, setProgress, upHandler, className }) => {
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
          setProgress(progress);

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
          upHandler(sampleImageUrl);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            upHandler(downloadURL);
            console.log("File available at", downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file, upHandler, setProgress]);

  return (
    <div className={`${className}`}>
      <p className="mb-12 text-xl font-bold text-bgprimary">
        Hows your doggo look like?
      </p>
      <img
        src={file ? URL.createObjectURL(file) : sampleImageUrl}
        className="object-cover overflow-hidden rounded-sm w-60 h-60"
        alt="dog"
      />
      <input
        type="file"
        name="dog image"
        id="file"
        className="mt-12 file:bg-primary file:text-white file:cursor-pointer file:font-semibold file:text-md file:border-none file:outline-none file:px-4 file:py-1 file:rounded-md"
        onChange={(e) => setFile(e.target.files[0])}
        placeholder="choose doggo image"
        disabled={progress !== 0 && progress < 100}
      />
    </div>
  );
};

export default UploadImage;
