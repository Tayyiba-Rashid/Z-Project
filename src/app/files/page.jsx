// 'use client';
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Import the slick-carousel base CSS
// import "slick-carousel/slick/slick-theme.css"; // Import the slick-carousel theme CSS

// function AutoPlay() {
//   const settings = {
//     // dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 2000,
//     cssEase: "linear"
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default AutoPlay;
'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Required base CSS
import "slick-carousel/slick/slick-theme.css"; // Required theme CSS

const Images = [
    "/menu/Group 6424.png",
    "/menu/Group 6425.png",
    "/menu/Group 6426.png",
    "/menu/Group 6427.png",
    "/menu/Group 6428.png",
    "/menu/Group 6429.png",
    "/menu/Group 6430.png",

];

function VerticalAutoPlay() {
    const verticalSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        arrows: false,
    };

    const horizontalSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

    const hScrollSettings = {
        infinite: true,
        slidesToShow: 4, // Adjust to show more or fewer items
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true, // Hide arrows
    };


    return (
        <div className="relative w-full h-[700px] p-4 bg-black">
            {/* Vertical Auto Play Slider */}
            <div className="w-full h-[500px] overflow-hidden mb-8">
                <Slider {...verticalSettings}>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            1
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            2
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            3
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            4
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            5
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            6
                        </h3>
                    </div>
                </Slider>
            </div>

            {/* Horizontal Auto Play Slider */}
            <div className="w-full h-[200px] overflow-hidden">
                <Slider {...horizontalSettings}>
                    {Images.map((image)=> (
                        <div>
                        <img className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold"
                        src={image}
                        />
                            
                       
                    </div>
                    ))}
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            A
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            B
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            C
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            D
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            E
                        </h3>
                    </div>
                    <div>
                        <h3 className="bg-gray-300 p-6 text-center rounded-lg shadow-md text-xl font-semibold">
                            F
                        </h3>
                    </div>
                </Slider>
            </div>

            <div className="flex h-[300px] justify-between items-center w-full bg-red-500">
                {/* <Slider {...hScrollSettings}> */}
                    {Images.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center items-center px-2 bg-green-300"
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-green-400"
                            />
                        </div>
                    ))}
                {/* </Slider> */}
            </div>
        </div>
    );
}

export default VerticalAutoPlay;

// const [startIndex, setStartIndex] = useState(0);
// const [startIndexVert, setStartIndexVert] = useState(0);
// const visibleImages = 4;
// const visibleImagesVer = 3;

// const handleNext = () => {
//     if (startIndex + visibleImages < Images.length) {
//         setStartIndex((prev) => prev + 1);
//     }
// };

// const handlePrev = () => {
//     if (startIndex > 0) {
//         setStartIndex((prev) => prev - 1);
//     }
// };

// const handleNextVert = () => {
//     if (startIndexVert + visibleImagesVer < VerticalImages.length) {
//         setStartIndexVert((prev) => prev + 1);
//     }
// };

// const handlePrevVert = () => {
//     if (startIndexVert > 0) {
//         setStartIndexVert((prev) => prev - 1);
//     }
// };
// CAROUSEL
{/* <div
                            className="flex flex-col transition-transform duration-300 h-[41.5em] overflow-auto" // Add overflow-hidden
                            style={{
                                transform: `translateY(-${(startIndexVert * 100) / visibleImagesVer}%)`,
                            }}
                        >
                            {VerticalImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 h-1/3 flex justify-center items-center"
                                >
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}

                        </div> */}



{/* </div> */}
                {/* CAROUSEL */}
                {/* <div className="flex-1 flex justify-center items-center overflow-hidden relative ">

                    <div
                        className="flex transition-transform duration-300"
                        style={{
                            transform: `translateX(-${(startIndex * 100) / visibleImages}%)`,
                        }}>
                        {Images.map((image, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-1/4  flex justify-center items-center"
                            >
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                    width={200} // Customize based on your design
                                    height={200} // Customize based on your design
                                />
                            </div>
                        ))}
                    </div>
                </div> */}