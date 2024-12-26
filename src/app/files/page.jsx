'use client'
import React, { useRef, useState } from 'react'

function Index() {
  const [files, setFiles] = useState([])
  const fileInput = useRef(null)

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`
    else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
    else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
    else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`
  }

  const getFileExtension = (fileName) => {
    const parts = fileName.split('.')
    return parts.length > 1 ? `.${parts.pop()}` : 'Unknown'
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: getFileExtension(file.name),
    }))
    setFiles(selectedFiles)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="border bg-gray-600 text-white rounded-2xl px-6 py-2"
      >
        Upload File
      </button>

      <input
        multiple
        type="file"
        className="hidden"
        ref={fileInput}
        onChange={handleFileChange}
      />

      <div className="flex flex-col mt-4">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-2 mb-2"
            >
              <span>{file.name}</span>
              <span>{file.size} </span>
              <span>{file.type}</span>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No file available</div>
        )}
      </div>
    </>
  )
}

export default Index

// document.getElementById("fileInput").addEventListener("change", (event) => {
//   const files = event.target.files; // Get selected files
//   const fileList = [];

//   for (let file of files) {
//     const fileSize = formatFileSize(file.size); // Format file size
//     const fileType = file.type || "Unknown"; // Handle undefined types
//     fileList.push({
//       name: file.name,
//       type: fileType,
//       size: fileSize
//     });
//   }

//   console.log(fileList); // View the mapped file details
//   displayFileList(fileList); // Display the file details in the UI
// });

// function formatFileSize(size) {
//   if (size < 1024) return `${size} bytes`;
//   else if (size < 1048576) return `${(size / 1024).toFixed(2)} KB`;
//   else if (size < 1073741824) return `${(size / 1048576).toFixed(2)} MB`;
//   else return `${(size / 1073741824).toFixed(2)} GB`;
// }

// function displayFileList(fileList) {
//   const fileListContainer = document.getElementById("fileList");
//   fileListContainer.innerHTML = ""; // Clear existing list

//   fileList.forEach(file => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${file.name} - ${file.size} - ${file.type}`;
//     fileListContainer.appendChild(listItem);
//   });
// }
