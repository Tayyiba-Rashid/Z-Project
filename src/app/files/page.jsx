// 'use client'
// import React, { useRef, useState } from 'react'

// function Index() {
//   const [files, setFiles] = useState([])
//   const fileInput = useRef(null)

//   const handleClick = () => {
//     if (fileInput.current) {
//       fileInput.current.click()
//     }
//   }

//   const formatFileSize = (size) => {
//     if (size < 1024) return `${size} B`
//     else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
//     else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
//     else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`
//   }

//   const getFileExtension = (fileName) => {
//     const parts = fileName.split('.')
//     return parts.length > 1 ? `.${parts.pop()}` : 'Unknown'
//   }

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files).map((file) => ({
//       name: file.name,
//       size: formatFileSize(file.size),
//       type: getFileExtension(file.name),
//     }))
//     setFiles(selectedFiles)
//   }

//   return (
//     <>
//       <button
//         type="button"
//         onClick={handleClick}
//         className="border bg-gray-600 text-white rounded-2xl px-6 py-2"
//       >
//         Upload File
//       </button>

//       <input
//         multiple
//         type="file"
//         className="hidden"
//         ref={fileInput}
//         onChange={handleFileChange}
//       />

//       <div className="flex flex-col mt-4">
//         {files.length > 0 ? (
//           files.map((file, index) => (
//             <div
//               key={index}
//               className="flex items-center gap-4 border-b pb-2 mb-2"
//             >
//               <span>{file.name}</span>
//               <span>{file.size} </span>
//               <span>{file.type}</span>
//             </div>
//           ))
//         ) : (
//           <div className="text-gray-500">No file available</div>
//         )}
//       </div>
//     </>
//   )
// }

// export default Index
'use client'
import { useRef } from "react";

export default function DraggableCard() {
    const cardRef = useRef(null);

    const handleDrag = (e) => {
        const card = cardRef.current;
        const parent = card.parentElement;

        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        let offsetX = e.clientX - cardWidth / 2;
        let offsetY = e.clientY - cardHeight / 2;

        // Constrain within the viewport
        offsetX = Math.max(0, Math.min(offsetX, parentWidth - cardWidth));
        offsetY = Math.max(0, Math.min(offsetY, parentHeight - cardHeight));

        card.style.left = `${offsetX}px`;
        card.style.top = `${offsetY}px`;
    };

    const handleMouseDown = (e) => {
        const card = cardRef.current;
        card.style.position = "absolute";
        card.style.zIndex = 1000;

        const moveCard = (e) => handleDrag(e);
        const stopDragging = () => {
            document.removeEventListener("mousemove", moveCard);
            document.removeEventListener("mouseup", stopDragging);
        };

        document.addEventListener("mousemove", moveCard);
        document.addEventListener("mouseup", stopDragging);
    };

    return (
        <div
            className="relative w-screen h-screen bg-gray-100"
            style={{ width: "100dvw", height: "100dvh" }}
        >
            <div
                ref={cardRef}
                onMouseDown={handleMouseDown}
                className="absolute w-64 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg cursor-move"
                style={{ left: "calc(50% - 8rem)", top: "calc(50% - 4rem)" }} // Center initial position
            >
                Drag Me!
            </div>
        </div>
    );
}
