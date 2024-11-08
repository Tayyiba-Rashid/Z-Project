// import React from 'react'
// import Image from 'next/image'

// function ZimoGroup6() {
//   return (
//     <div className="relative h-screen w-full"> {/* Full viewport height and width */}
//       <Image
//         src="/06_ZimoGroup5-1/lion.png"
//         alt="Lion Background"
//         fill
//         sizes="100vw"
//         style={{
//           objectFit: 'cover', /* Ensures image covers entire container */
//         }}
//         className="absolute inset-0" /* Makes image span the entire div */
//       />
//       <div className="relative z-10 flex items-center justify-center h-full text-white">
//         <h1>Your Content Here</h1>
//       </div>
//     </div>
//   )
// }

// export default ZimoGroup6

import React from "react";
import Image from "next/image";

function ZimoGroup6() {
  return (
    <div
      className="w-full h-dvh relative bg-no-repeat bg-cover overflow-hidden "
      style={{ backgroundImage: "url('/06_ZimoGroup5-1/lion.png')" }}
    >
      <div className="relative top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center flex-col gap-5 px-4">
      
        <Image
          src="/06_ZimoGroup5-1/gamestudio.png"
          width={600}
          height={600}
          alt="Zimo AI"
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default ZimoGroup6;

// return (
//   <div className="relative w-full h-dvh">
//     <div
//       className="w-full h-full bg-cover bg-center relative z-0"
//       style={{ backgroundImage: "url('/06_ZimoGroup5-1/lion.png')" }}
//     >
//       {/* Overlay for opacity effect */}
//       <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//       <div className="relative z-20 flex items-center justify-center h-full">
//         {/* Your content goes here */}
//         <h2 className="text-4xl font-bold text-white">Your Heading</h2>
//       </div>
//     </div>
//   </div>
// );
