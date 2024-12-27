'use client'
import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

function Index() {
  const [files, setFiles] = useState([])
  const fileTypes = ["JPG", "PNG", "GIF", "PDF", "DOCX", "TXT"]

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

  const handleFileChange = (fileList) => {
    const selectedFiles = Array.from(fileList).map((file) => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: getFileExtension(file.name),
    }))
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles])
  }

  return (
    <div className="flex flex-col items-center p-4">
      <FileUploader
        multiple
        handleChange={handleFileChange}
        name="files"
        // types={fileTypes}
      >
        <div className="w-full max-w-md p-4 border-2 rounded-lg border-gray-400 hover:border-blue-600 hover:bg-blue-100">
          <p className="text-center text-gray-500">
            Drag and drop your files here, or{' '}
            <span className="text-blue-600 cursor-pointer">
              click to upload
            </span>
          </p>
        </div>
      </FileUploader>

      <div className="flex flex-col mt-4 w-full max-w-md">
        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={index} className="flex items-center gap-4 border-b pb-2 mb-2">
              <span>{file.name}</span>
              <span>{file.size} </span>
              <span>{file.type}</span>
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">No files available</div>
        )}
      </div>
    </div>
  )
}

export default Index


// 'use client'
// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const FileInputDND = () => {
//   const [files, setFiles] = useState([]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
//     if (!destination) return; 
    
//     const reorderedFiles = Array.from(files);
//     const [movedFile] = reorderedFiles.splice(source.index, 1);
//     reorderedFiles.splice(destination.index, 0, movedFile);
//     setFiles(reorderedFiles);
//   };

//   const handleFileInput = (event) => {
//     const uploadedFiles = Array.from(event.target.files);
//     setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     const droppedFiles = Array.from(event.dataTransfer.files);
//     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//   };

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={(e) => e.preventDefault()}
//       className="p-4 border-dashed border-2 rounded-md"
//     >
//       <input
//         type="file"
//         multiple
//         onChange={handleFileInput}
//         className="hidden"
//         id="file-upload"
//       />
//       <label
//         htmlFor="file-upload"
//         className="cursor-pointer text-center block"
//       >
//         Drag files here or click to upload
//       </label>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="file-list">
//           {(provided) => (
//             <ul
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               className="mt-4"
//             >
//               {files.map((file, index) => (
//                 <Draggable
//                   key={file.name}
//                   draggableId={file.name}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       className="p-2 border rounded-md mb-2"
//                     >
//                       {file.name}
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default FileInputDND;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     const [isDragging, setisDragging] = useState(false)
//     const [isOpen, setIsOpen] = useState(true)
//     const [files, setFiles] = useState([])
//     const fileInput = useRef(null)

//     const handleClick = () => {
//         if (fileInput.current) {
//             fileInput.current.click()
//         }
//     }

//     const formatFileSize = (size) => {
//         if (size < 1024) return `${size} B`
//         else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
//         else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
//         else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`
//     }

//     const getFileExtension = (fileName) => {
//         const parts = fileName.split('.')
//         return parts.length > 1 ? `${parts.pop()}` : 'Unknown'
//     }

//     const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       size: formatFileSize(file.size).toUpperCase(),
//       type: getFileExtension(file.name).toUpperCase(),
//     }));
//     setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//   };

//     const ref = useClickAway(() => {
//         setIsOpen(true);
//     });
//     const handleToggle = () => {
//         setIsOpen((prev) => (!prev))

//     }
//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const droppedFiles = Array.from(e.dataTransbbfer.files).map((file) => ({
//       name: file.name,
//       size: formatFileSize(file.size).toUpperCase(),
//       type: getFileExtension(file.name).toUpperCase(),
//     }));
//     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//   };