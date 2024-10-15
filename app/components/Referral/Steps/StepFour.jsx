import React from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

const StepFour = ({ uploadedFiles, setUploadedFiles }) => {
  const onDrop = (acceptedFiles) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = (fileIndex) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <p className="text-sm font-normal">Attach Files</p>
      <div
        {...getRootProps()}
        className="flex flex-col w-full items-center justify-center mt-1.5 px-3 py-5 cursor-pointer"
      >
        <input {...getInputProps()} />
        <Image
          src={"/images/cloud-icon.svg"}
          width={60}
          height={60}
          alt="cloud icon"
        />
        <p className="font-normal">Browse Files to upload</p>
      </div>

      {/* Display the list of uploaded files */}
      {uploadedFiles?.length > 0 && (
        <div className="mt-5 w-full">
          <ul className="">
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-1">
                    <Image
                      src={"/images/file-icon.svg"}
                      width={16}
                      height={16}
                      alt="file icon"
                    />
                    <p className="text-sm font-normal">{file.name}</p>
                  </div>
                  <Image
                    src={"/images/delete-icon.svg"}
                    width={20}
                    height={20}
                    alt="delete icon"
                    className="cursor-pointer hover:scale-105"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StepFour;
