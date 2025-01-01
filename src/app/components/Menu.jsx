import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Images = [
    "/menu/Group 6424.png",
    "/menu/Group 6425.png",
    "/menu/Group 6426.png",
    "/menu/Group 6427.png",
    "/menu/Group 6428.png",
    "/menu/Group 6429.png",
    "/menu/Group 6430.png",

];
const VerticalImages = [
    "/menu/Group 6430.png",
    "/menu/Group 6429.png",
    "/menu/Group 6428.png",
    "/menu/Group 6427.png",
    "/menu/Group 6426.png",
    "/menu/Group 6425.png",
    "/menu/Group 6424.png",
];

function Menu({ handleMenu }) {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 7,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        pauseOnHover: true,
        rtl: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
        ]
    };

    const hScrollSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 7,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5.6,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 7,
                    speed: 20000,
                    infinite: true,
                }
            },
        ]
    };

    return (
        <>
            <section className='h-full w-full flex flex-col overflow-hidden '>
                <header className=' flex justify-between'>

                    {/* left */}
                    <div className='w-full h-full flex '>
                        <span className='h-full flex justify-start items-start cursor-pointer'>
                            <svg
                                className='2xl:w-[20px] xl:w-[18px] lg:w-[15px] md:w-[15px] sm:w-[12px] w-[12px]'
                                onClick={handleMenu}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    id="Path_27323"
                                    data-name="Path 27323"
                                    d="M169.577,282.55l-1.571-1.571-8.429,8.429-8.429-8.429-1.571,1.571,8.429,8.429-8.429,8.429,1.571,1.571,8.429-8.429,8.429,8.429,1.571-1.571-8.429-8.429Z"
                                    transform="translate(-149.577 -280.979)"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                        <p className='h-full flex justify-start items-start text-white  2xl:text-[14px] xl:text-[13px] lg:text-[11px] md:text-[12px] sm:text-[10px] text-[8px] tracking-widest 3xl:ml-[40px] 2xl:ml-[30px] xl:ml-[20px] lg:ml-[15px] md:ml-[15px] sm:ml-[8px] ml-[8px] cursor-pointer'>
                            MENU
                        </p>
                    </div>
                    {/* middle */}
                    <div className=' flex items-end justify-center w-full cursor-pointer'>
                        <svg
                            className='2xl:w-[253px] xl:w-[200px] md:w-[150px] sm:w-[120px] w-[120px]'
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="253.446"
                            height={25}
                            viewBox="0 0 253.446 25"
                        >
                            <defs>
                                <clipPath id="clip-path">
                                    <rect
                                        id="Rectangle_2310"
                                        data-name="Rectangle 2310"
                                        width="253.446"
                                        height={25}
                                        fill="#fff"
                                    />
                                </clipPath>
                            </defs>
                            <g
                                id="Group_6113"
                                data-name="Group 6113"
                                transform="translate(-506.395 -255)"
                            >
                                <path
                                    id="Path_33433"
                                    data-name="Path 33433"
                                    d="M39.8,0V1.538h8.834V25h1.8V1.538h8.78V0Z"
                                    transform="translate(513.678 255)"
                                    fill="#fff"
                                />
                                <g
                                    id="Group_6111"
                                    data-name="Group 6111"
                                    transform="translate(506.395 255)"
                                >
                                    <g id="Group_6110" data-name="Group 6110" clipPath="url(#clip-path)">
                                        <path
                                            id="Path_33434"
                                            data-name="Path 33434"
                                            d="M207.992,14.187a2.869,2.869,0,0,0-.761-.706,9.948,9.948,0,0,0,2.952-.751,7.562,7.562,0,0,0,2.235-1.467,6.136,6.136,0,0,0,1.422-2.075,6.714,6.714,0,0,0,.494-2.616,5.842,5.842,0,0,0-2.138-4.9Q210.058,0,205.73,0h-4.394V1.43h4.394a8.488,8.488,0,0,1,5.088,1.291,4.593,4.593,0,0,1,1.75,3.957,5.578,5.578,0,0,1-.477,2.349,4.927,4.927,0,0,1-1.388,1.785,6.413,6.413,0,0,1-2.226,1.139,10.283,10.283,0,0,1-2.977.4h-4.164v1.343h3.087a2.706,2.706,0,0,1,1.068.159,1.782,1.782,0,0,1,.646.548l8,10.142a1.267,1.267,0,0,0,.4.353,1.032,1.032,0,0,0,.486.106H216.6Z"
                                            transform="translate(36.851 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33435"
                                            data-name="Path 33435"
                                            d="M69.75,13.853a1.779,1.779,0,0,1,.645.548l8,10.143a1.283,1.283,0,0,0,.4.353,1.026,1.026,0,0,0,.452.1l.893-.893-7.892-9.917a2.894,2.894,0,0,0-.761-.707,9.921,9.921,0,0,0,2.952-.751,7.567,7.567,0,0,0,2.235-1.466A6.138,6.138,0,0,0,78.1,9.189a6.735,6.735,0,0,0,.495-2.616,5.845,5.845,0,0,0-2.139-4.9Q74.317,0,69.989,0H65.594V1.43h4.395a8.494,8.494,0,0,1,5.089,1.291,4.6,4.6,0,0,1,1.749,3.958,5.577,5.577,0,0,1-.477,2.349,4.917,4.917,0,0,1-1.388,1.785,6.413,6.413,0,0,1-2.226,1.139,10.289,10.289,0,0,1-2.977.4H65.594v1.343h3.087a2.683,2.683,0,0,1,1.069.16"
                                            transform="translate(12.006 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33436"
                                            data-name="Path 33436"
                                            d="M93.494,2.061c.043.14.084.286.127.419q.121.382.244.683l5.052,12.7L87.831,15.8l-.554,1.344,12.163.066,2.92,7.3a.884.884,0,0,0,.246.348.621.621,0,0,0,.408.135l1.4.008L94.343,0Z"
                                            transform="translate(15.974 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33437"
                                            data-name="Path 33437"
                                            d="M150.8,3.247a.487.487,0,0,1-.45.295.99.99,0,0,1-.58-.321,7.491,7.491,0,0,0-2.48-1.424,7.627,7.627,0,0,0-4.593.051A4.915,4.915,0,0,0,141,2.885a4.4,4.4,0,0,0-1.04,1.52,4.706,4.706,0,0,0-.355,1.814,3.709,3.709,0,0,0,.526,2.056,4.746,4.746,0,0,0,1.394,1.382,8.97,8.97,0,0,0,1.964.959q1.1.389,2.257.769t2.258.838a8.175,8.175,0,0,1,1.964,1.149,5.278,5.278,0,0,1,1.392,1.7,5.384,5.384,0,0,1,.528,2.514,7.914,7.914,0,0,1-.526,2.894,6.744,6.744,0,0,1-1.53,2.358,7.2,7.2,0,0,1-2.452,1.582,8.908,8.908,0,0,1-3.317.579,9.37,9.37,0,0,1-4.164-.855,9.793,9.793,0,0,1-3.058-2.341l.484-.76a.606.606,0,0,1,.484-.26.694.694,0,0,1,.4.208c.162.138.357.308.588.51s.508.42.831.657a6.979,6.979,0,0,0,1.125.657,7.989,7.989,0,0,0,1.471.509,7.794,7.794,0,0,0,1.886.208,7.18,7.18,0,0,0,2.6-.441,5.676,5.676,0,0,0,1.93-1.2,5.094,5.094,0,0,0,1.2-1.805,6,6,0,0,0,.415-2.237,3.946,3.946,0,0,0-.528-2.134,4.558,4.558,0,0,0-1.394-1.4,9.046,9.046,0,0,0-1.964-.942q-1.1-.38-2.257-.743t-2.258-.812a7.8,7.8,0,0,1-1.964-1.149,5.269,5.269,0,0,1-1.392-1.745,5.789,5.789,0,0,1-.528-2.618,6.2,6.2,0,0,1,.467-2.367A5.89,5.89,0,0,1,139.8,1.926a6.713,6.713,0,0,1,2.224-1.4A8.1,8.1,0,0,1,145.042,0a9.14,9.14,0,0,1,3.417.6,8.176,8.176,0,0,1,2.759,1.849Z"
                                            transform="translate(25.046 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33438"
                                            data-name="Path 33438"
                                            d="M112.42.062a.835.835,0,0,1,.3.273L128.9,22a10.233,10.233,0,0,1-.053-1.025V0h1.59V25h-.866a.76.76,0,0,1-.653-.353L112.667,2.95a10.071,10.071,0,0,1,.053,1.007V25h-1.572V0h.883a.991.991,0,0,1,.389.062"
                                            transform="translate(20.343 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33439"
                                            data-name="Path 33439"
                                            d="M18.516,0V.619a1.252,1.252,0,0,1-.247.724L2.4,23.5H18.375V25H0v-.653a1.078,1.078,0,0,1,.212-.636L16.113,1.5H.459V0Z"
                                            transform="translate(0 0)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33440"
                                            data-name="Path 33440"
                                            d="M194.269,0V1.5H181.106V11.608H192.06v1.466H181.106V23.5h13.162V25H179.287V0Z"
                                            transform="translate(32.815 0)"
                                            fill="#fff"
                                        />
                                        <rect
                                            id="Rectangle_2308"
                                            data-name="Rectangle 2308"
                                            width="11.168"
                                            height="1.52"
                                            transform="translate(188.04 12.165)"
                                            fill="#fff"
                                        />
                                        <rect
                                            id="Rectangle_2309"
                                            data-name="Rectangle 2309"
                                            width="12.957"
                                            height="1.521"
                                            transform="translate(188.04 -0.001)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33441"
                                            data-name="Path 33441"
                                            d="M30.312,14.6h-.132a2.133,2.133,0,0,0-.629.132,9.122,9.122,0,0,0-1.077.606c-.677.39-1.46.829-2.141,1.222-.562.323-1.284.625-1.294,1.427-.012.835.725,1.112,1.258,1.416,1.691.962,5.093,2.927,5.093,2.927v-.907s-3.318-1.875-5-2.806c-.214-.119-.5-.355-.5-.629,0-.415.495-.623.834-.81.911-.5,1.782-.982,2.662-1.452.277-.148.64-.447,1.016-.243.245.135.23.4.23.787.006,0,0,3.7,0,3.7h.75V16.606a7.915,7.915,0,0,0-.037-1.112,1.121,1.121,0,0,0-1.04-.9"
                                            transform="translate(4.583 2.672)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33442"
                                            data-name="Path 33442"
                                            d="M26.118,16.944h.132a2.133,2.133,0,0,0,.629-.132,9.122,9.122,0,0,0,1.077-.606c.677-.39,1.46-.829,2.141-1.222.562-.323,1.284-.625,1.294-1.427.012-.835-.725-1.112-1.258-1.416-1.691-.962-5.093-2.927-5.093-2.927v.907s3.318,1.875,5,2.806c.214.119.5.355.5.629,0,.415-.495.623-.834.81-.911.5-1.782.982-2.662,1.452-.277.148-.64.447-1.016.243-.245-.135-.23-.4-.23-.787-.006,0,0-3.7,0-3.7h-.75v3.363a7.915,7.915,0,0,0,.037,1.112,1.121,1.121,0,0,0,1.04.9"
                                            transform="translate(4.583 1.686)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33443"
                                            data-name="Path 33443"
                                            d="M30.312,5.383h-.132a2.133,2.133,0,0,0-.629.133,9.121,9.121,0,0,0-1.077.606c-.677.39-1.46.829-2.141,1.222-.562.323-1.284.625-1.294,1.427-.012.835.725,1.112,1.258,1.416,1.691.962,5.093,2.927,5.093,2.927v-.907s-3.318-1.875-5-2.806c-.214-.119-.5-.355-.5-.629,0-.415.495-.623.834-.81.911-.5,1.782-.982,2.662-1.452.277-.148.64-.447,1.016-.243.245.135.23.4.23.787.006,0,0,3.7,0,3.7h.75V7.391a7.915,7.915,0,0,0-.037-1.112,1.121,1.121,0,0,0-1.04-.9"
                                            transform="translate(4.583 0.985)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_33444"
                                            data-name="Path 33444"
                                            d="M26.118,7.73h.132A2.133,2.133,0,0,0,26.88,7.6a9.122,9.122,0,0,0,1.077-.606c.677-.39,1.46-.829,2.141-1.222.562-.323,1.284-.625,1.294-1.427.012-.835-.725-1.112-1.258-1.416C28.444,1.965,25.042,0,25.042,0V.907s3.318,1.875,5,2.806c.214.119.5.355.5.629,0,.415-.495.623-.834.81-.911.5-1.782.982-2.662,1.452-.277.148-.64.447-1.016.243-.245-.135-.23-.4-.23-.787-.006,0,0-3.7,0-3.7h-.75V5.722a7.915,7.915,0,0,0,.037,1.112,1.121,1.121,0,0,0,1.04.9"
                                            transform="translate(4.583 0)"
                                            fill="#fff"
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>


                    </div>
                    {/* right */}
                    <div className=' w-full h-full flex justify-end items-center'>
                        {/* right-1 */}
                        <div className='xl:px-[31px] px-[16px] fill-white'>
                            <svg
                                className='3xl:w-[21px] 3xl:h-[25px] 2xl:w-[16px] 2xl:h-[20px] xl:w-[13px] xl:h-[16px] lg:w-[10px] lg:h-[13px] md:w-[20px] md:h-[23px] sm:w-[14px] sm:h-[18px] w-[14px] h-[18px] cursor-pointer'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 21.088 25.5"
                            >
                                <g id="Group_2867" data-name="Group 2867" transform="translate(0.25 0.25)">
                                    <g id="Group_2661" data-name="Group 2661" transform="translate(3.676 0)">
                                        <path
                                            id="Path_7580"
                                            data-name="Path 7580"
                                            d="M113.274,88.712a6.618,6.618,0,1,1,6.618-6.618A6.625,6.625,0,0,1,113.274,88.712Zm0-11.765a5.147,5.147,0,1,0,5.147,5.147A5.153,5.153,0,0,0,113.274,76.948Z"
                                            transform="translate(-106.656 -75.477)"
                                            stroke="#000"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                    <g id="Group_2662" data-name="Group 2662" transform="translate(0 13.971)">
                                        <path
                                            id="Path_7581"
                                            data-name="Path 7581"
                                            d="M107.022,160.556a.735.735,0,0,1-.735-.735,8.824,8.824,0,0,0-17.616-.735h14.675a.735.735,0,1,1,0,1.471H87.169v-.735a10.294,10.294,0,0,1,20.588,0A.736.736,0,0,1,107.022,160.556Z"
                                            transform="translate(-87.169 -149.527)"
                                            stroke="#000"
                                            strokeWidth="0.5"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        {/* right-2 */}
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className='3xl:size-[50px] 2xl:size-[40px] xl:size-[33px] lg:size-[26.67px] md:size-[40px] sm:size-[30px] size-[30px] cursor-pointer'
                                viewBox="0 0 50 50"
                            >
                                <g
                                    id="Group_5511"
                                    data-name="Group 5511"
                                    transform="translate(-140.575 -31.907)"
                                >
                                    <path
                                        id="Path_27777"
                                        data-name="Path 27777"
                                        d="M207.306,36.1a12.455,12.455,0,0,0-9.319-4.189h-4.312V45.183Z"
                                        transform="translate(-19.913 0)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27778"
                                        data-name="Path 27778"
                                        d="M159.3,31.907h-4.312a12.454,12.454,0,0,0-9.319,4.19L159.3,45.184Z"
                                        transform="translate(-1.908 0)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27779"
                                        data-name="Path 27779"
                                        d="M218.629,57.512V55.35l-3.244,2.162Z"
                                        transform="translate(-28.054 -8.792)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27780"
                                        data-name="Path 27780"
                                        d="M218.587,87.221V85.012h-3.313Z"
                                        transform="translate(-28.013 -19.915)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27781"
                                        data-name="Path 27781"
                                        d="M140.575,85.012V87.22l3.312-2.208Z"
                                        transform="translate(0 -19.915)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27782"
                                        data-name="Path 27782"
                                        d="M193.675,103.97h4.312a12.454,12.454,0,0,0,9.292-4.16l-13.6-9.067Z"
                                        transform="translate(-19.913 -22.064)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27783"
                                        data-name="Path 27783"
                                        d="M145.707,99.809A12.455,12.455,0,0,0,155,103.97h4.312V90.742Z"
                                        transform="translate(-1.925 -22.064)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27784"
                                        data-name="Path 27784"
                                        d="M140.575,55.351v2.162h3.243Z"
                                        transform="translate(0 -8.792)"
                                        fill="#0d2764"
                                    />
                                    <path
                                        id="Path_27785"
                                        data-name="Path 27785"
                                        d="M160.8,31.907h-3.409V45.184L143.756,36.1a12.46,12.46,0,0,0-2.6,4.541l12.152,8.083h-6.483l-6.25-4.158v2l3.244,2.162h-3.244v3.411H160.8Z"
                                        transform="translate(0 0)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27786"
                                        data-name="Path 27786"
                                        d="M188.215,99.771h3.412V86.544l13.6,9.067a12.466,12.466,0,0,0,2.658-4.67l-12-7.979h6.482L208.44,87V85.171l-3.312-2.209h3.312V79.545H188.215Z"
                                        transform="translate(-17.865 -17.865)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27787"
                                        data-name="Path 27787"
                                        d="M191.627,48.721V47.088l14.633-9.731a12.588,12.588,0,0,0-1-1.262l-13.631,9.087V31.907h-3.412V52.132H208.44V48.721H205.2l3.244-2.162V44.407a12.48,12.48,0,0,0-.59-3.794l-12.189,8.109Z"
                                        transform="translate(-17.865 0)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27788"
                                        data-name="Path 27788"
                                        d="M140.575,79.545v3.417h3.312l-3.312,2.208v2.1a12.5,12.5,0,0,0,.551,3.674l12.007-7.984h4.254v1.476l-14.7,9.779a12.513,12.513,0,0,0,1.1,1.393l13.6-9.067V99.771H160.8V79.545Z"
                                        transform="translate(0 -17.865)"
                                        fill="#fff"
                                    />
                                    <path
                                        id="Path_27789"
                                        data-name="Path 27789"
                                        d="M170.35,31.907H160.8V52.132H140.575V61.68H160.8V81.906h9.553V61.68h20.225V52.132H170.35Z"
                                        transform="translate(0)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27790"
                                        data-name="Path 27790"
                                        d="M200.5,85.012l12,7.979a12.486,12.486,0,0,0,.55-3.67v-.275l-6.067-4.034Z"
                                        transform="translate(-22.471 -19.915)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27791"
                                        data-name="Path 27791"
                                        d="M193.675,50.359v1.633h4.034L209.9,43.883a12.463,12.463,0,0,0-1.589-3.255Z"
                                        transform="translate(-19.913 -3.271)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27792"
                                        data-name="Path 27792"
                                        d="M157.718,85.012h-4.254L141.457,93a12.432,12.432,0,0,0,1.558,3.272l14.7-9.779Z"
                                        transform="translate(-0.331 -19.915)"
                                        fill="#c20320"
                                    />
                                    <path
                                        id="Path_27793"
                                        data-name="Path 27793"
                                        d="M153.308,53.96l-12.152-8.083a12.49,12.49,0,0,0-.581,3.769V49.8l6.25,4.158Z"
                                        transform="translate(0 -5.239)"
                                        fill="#c20320"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </header>
                <main className='w-full  grid grid-cols-8  flex-grow '>
                    {/* VERTICAL IMAGES */}
                    <div className=' col-span-2 flex flex-col justify-between '>
                        <Slider {...settings}>
                            {VerticalImages.map((image, index) => (
                                <div
                                    key={index}
                                    className=" flex-col justify-center items-center py-2 lg:flex hidden"
                                >
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 3xl:size-[200px] 2xl:size-[150px] xl:size-[130px] lg:size-[110px] md:size-[100px] sm:size-[100px] size-[50px]"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* 2nd col IMAGE */}
                    <div className='relative col-span-6 flex  flex-col  xl:justify-evenly'>
                        <div className='absolute 3xl:top-4 2xl:top-8 xl:top-10 lg:top-7  md:top-7 top-5 3xl:left-[40px] 2xl:left-[25px] xl:left-[15px] lg:left-[15px] 3xl:size-[400px] 2xl:size-[300px] xl:size-[250px] lg:size-[180px] md:size-[300px] sm:size-[200px] size-[100px] '>
                            <div className='relative w-full h-full'>
                                <img className='xl:pb-0 pb-4' src="/menu/Group 6449.png" alt="image" />
                                <div className='absolute block xl:hidden 2xl:px-[34px] xl:pl-[15px]'>
                                    <img
                                        className='xl:hidden block z-10 lg:h-[100px] lg:w-[159px] md:h-[140px] md:w-[250px]'
                                        src="/menu/Group 6431.png"
                                        alt="water resistance" />
                                </div>
                            </div>
                        </div>
                        {/* link list */}
                        <div className='  text-end 3xl:space-y-8 2xl:space-y-5 xl:space-y-5 lg:space-y-3 md:space-y-4 sm:space-y-2 space-y-2 3xl:pt-[32px] 3xl:pb-[15px] 2xl:pt-0 xl:pt-[20px] lg:py-[20px] md:py-[24px] sm:py-[20px] py-[20px]'>

                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px] cursor-pointer md:tracking-widest tracking-[0.3em]'>FEATURES</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer md:tracking-widest tracking-[0.3em]'>PRODUCTS</p>
                            <div className='flex justify-end items-center text-white 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   md:tracking-widest tracking-[0.3em] cursor-pointer hover:text-[#BE9F56] group'><p>HOW TO &nbsp; </p>
                                <span className='fill-white group-hover:fill-[#BE9F56]'>
                                    <svg
                                        className='2xl:w-[34px] xl:w-[30px] lg:w-[27px] md:w-[25px] sm:w-[20px] w-[12px]'
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 34.467 11.71"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    id="Rectangle_2276"
                                                    data-name="Rectangle 2276"
                                                    width="34.467"
                                                    height="11.71"
                                                    fill="inherit"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g id="Group_6398" data-name="Group 6398" transform="translate(0 0)">
                                            <g
                                                id="Group_5944"
                                                data-name="Group 5944"
                                                transform="translate(0 0)"
                                                clipPath="url(#clip-path)"
                                            >
                                                <path
                                                    id="Path_28412"
                                                    data-name="Path 28412"
                                                    d="M8.673,0V.29a.586.586,0,0,1-.116.339L1.126,11.007H8.607v.7H0V11.4a.508.508,0,0,1,.1-.3L7.547.7H.215V0Z"
                                                    transform="translate(0 0)"
                                                    fill="inherit"
                                                />
                                                <path
                                                    id="Path_28413"
                                                    data-name="Path 28413"
                                                    d="M47.757,0V.72H43.644V11.71H42.8V.72H38.662V0Z"
                                                    transform="translate(-28.803 0)"
                                                    fill="inherit"
                                                />
                                                <rect
                                                    id="Rectangle_2274"
                                                    data-name="Rectangle 2274"
                                                    width="5.166"
                                                    height="0.703"
                                                    transform="translate(20.14 5.627)"
                                                    fill="inherit"
                                                />
                                                <rect
                                                    id="Rectangle_2275"
                                                    data-name="Rectangle 2275"
                                                    width="5.994"
                                                    height="0.704"
                                                    transform="translate(20.14 0)"
                                                    fill="inherit"
                                                />
                                                <path
                                                    id="Path_28414"
                                                    data-name="Path 28414"
                                                    d="M110.251,6.645a1.343,1.343,0,0,0-.356-.331,4.658,4.658,0,0,0,1.382-.352,3.551,3.551,0,0,0,1.047-.687,2.874,2.874,0,0,0,.666-.972,3.149,3.149,0,0,0,.232-1.225,2.737,2.737,0,0,0-1-2.3A4.879,4.879,0,0,0,109.192,0h-2.058V.67h2.058a3.978,3.978,0,0,1,2.383.6,2.152,2.152,0,0,1,.819,1.854,2.616,2.616,0,0,1-.223,1.1,2.3,2.3,0,0,1-.65.836,3.007,3.007,0,0,1-1.043.534,4.818,4.818,0,0,1-1.394.186h-1.951v.629h1.446a1.259,1.259,0,0,1,.5.075.828.828,0,0,1,.3.257l3.749,4.75a.6.6,0,0,0,.186.165.487.487,0,0,0,.227.049h.737Z"
                                                    transform="translate(-79.815 0)"
                                                    fill="inherit"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </span>

                            </div>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer md:tracking-widest tracking-[0.3em]'>PRICING</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer md:tracking-widest tracking-[0.3em]'>ADVERTISING</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]   cursor-pointer md:tracking-widest tracking-[0.3em]'>CAREER</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer md:tracking-widest tracking-[0.3em]'>MY ACCOUNT</p>
                            <p className='text-white hover:text-[#BE9F56] 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[6px]  cursor-pointer md:tracking-widest tracking-[0.3em]'>NEWSROOM/PRESS</p>
                        </div>
                        <div className='flex 2xl:justify-end xl:justify-between justify-end xl:gap-0  lg:gap-3 md:gap-2 sm:gap-2 gap-2 items-center text-center '>
                            {/* 1 image */}
                            <div className='relative lg:block hidden 2xl:px-[34px] xl:pl-[15px]'>
                                <img
                                    className='xl:block hidden 3xl:w-[334px] 3xl:h-[200px] 2xl:w-[334px] 2xl:h-[150px] xl:w-[200px] xl:h-[130px] lg:w-[159px]'
                                    src="/menu/Group 6431.png"
                                    alt="water resistance" />
                            </div>
                            {/* 2 yelllow */}
                            <div className='3xl:w-[118px] 3xl:h-[150px] 2xl:w-[118px] 2xl:h-[130px] xl:w-[80px] xl:h-[90px] lg:w-[80px] lg:h-[90px] md:w-[80px] md:h-[90px] sm:w-[60px] sm:h-[70px] w-[40px] h-[50px] flex flex-col items-center justify-center sm:rounded-2xl rounded-lg  cursor-pointer hover:bg-opacity-95 bg-[#FFFF00]'>
                                <span>
                                    <svg
                                        className='2xl:w-[52px] xl:w-[42px] lg:w-[25px] md:w-[25px] sm:w-[20px] w-[20px]'
                                        id="Group_5945"
                                        data-name="Group 5945"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        viewBox="0 0 52.717 17.91"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    id="Rectangle_2276"
                                                    data-name="Rectangle 2276"
                                                    width="52.717"
                                                    height="17.91"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Group_5944"
                                            data-name="Group 5944"
                                            transform="translate(0 0)"
                                            clipPath="url(#clip-path)"
                                        >
                                            <path
                                                id="Path_28412"
                                                data-name="Path 28412"
                                                d="M13.265,0V.443a.9.9,0,0,1-.177.519L1.722,16.835H13.164V17.91H0v-.468a.777.777,0,0,1,.152-.456L11.544,1.076H.329V0Z"
                                                transform="translate(0 0)"
                                            />
                                            <path
                                                id="Path_28413"
                                                data-name="Path 28413"
                                                d="M52.573,0V1.1H46.282V17.91H44.99V1.1H38.662V0Z"
                                                transform="translate(-23.583 0)"
                                            />
                                            <rect
                                                id="Rectangle_2274"
                                                data-name="Rectangle 2274"
                                                width="7.902"
                                                height="1.076"
                                                transform="translate(30.804 8.607)"
                                            />
                                            <rect
                                                id="Rectangle_2275"
                                                data-name="Rectangle 2275"
                                                width="9.168"
                                                height="1.076"
                                                transform="translate(30.804 0)"
                                            />
                                            <path
                                                id="Path_28414"
                                                data-name="Path 28414"
                                                d="M111.9,10.164a2.053,2.053,0,0,0-.544-.506,7.125,7.125,0,0,0,2.114-.538,5.432,5.432,0,0,0,1.6-1.051,4.4,4.4,0,0,0,1.019-1.487,4.816,4.816,0,0,0,.354-1.873A4.186,4.186,0,0,0,114.914,1.2,7.463,7.463,0,0,0,110.282,0h-3.148V1.025h3.148a6.085,6.085,0,0,1,3.645.924,3.292,3.292,0,0,1,1.253,2.835,4,4,0,0,1-.342,1.683,3.525,3.525,0,0,1-.994,1.279,4.6,4.6,0,0,1-1.595.816,7.369,7.369,0,0,1-2.133.285h-2.983V9.81h2.211a1.925,1.925,0,0,1,.766.114,1.266,1.266,0,0,1,.462.392l5.734,7.265a.913.913,0,0,0,.285.253.746.746,0,0,0,.348.076h1.127Z"
                                                transform="translate(-65.349 0)"
                                            />
                                        </g>
                                    </svg>

                                </span>
                                <span className='xl:text-[7px] md:text-[6px] sm:text-[5px] text-[3px] sm:pt-[15px] pt-[6px] '>LOG IN</span>
                            </div>
                            {/* 3 white */}
                            <div className='3xl:w-[118px] 3xl:h-[150px] 2xl:w-[118px] 2xl:h-[130px] xl:w-[80px] xl:h-[90px] lg:w-[80px] lg:h-[90px] md:w-[80px] md:h-[90px] sm:w-[60px] sm:h-[70px] w-[40px] h-[50px]  flex flex-col items-center justify-center sm:rounded-2xl rounded-lg bg-white 2xl:ml-[20px] cursor-pointer hover:bg-opacity-90'>
                                <span>
                                    <svg
                                        className='2xl:w-[52px] xl:w-[42px] lg:w-[25px] md:w-[25px]  sm:w-[20px] w-[20px]'
                                        id="Group_5945"
                                        data-name="Group 5945"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"

                                        viewBox="0 0 52.717 17.91"
                                    >
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect
                                                    id="Rectangle_2276"
                                                    data-name="Rectangle 2276"
                                                    width="52.717"
                                                    height="17.91"
                                                />
                                            </clipPath>
                                        </defs>
                                        <g
                                            id="Group_5944"
                                            data-name="Group 5944"
                                            transform="translate(0 0)"
                                            clipPath="url(#clip-path)"
                                        >
                                            <path
                                                id="Path_28412"
                                                data-name="Path 28412"
                                                d="M13.265,0V.443a.9.9,0,0,1-.177.519L1.722,16.835H13.164V17.91H0v-.468a.777.777,0,0,1,.152-.456L11.544,1.076H.329V0Z"
                                                transform="translate(0 0)"
                                            />
                                            <path
                                                id="Path_28413"
                                                data-name="Path 28413"
                                                d="M52.573,0V1.1H46.282V17.91H44.99V1.1H38.662V0Z"
                                                transform="translate(-23.583 0)"
                                            />
                                            <rect
                                                id="Rectangle_2274"
                                                data-name="Rectangle 2274"
                                                width="7.902"
                                                height="1.076"
                                                transform="translate(30.804 8.607)"
                                            />
                                            <rect
                                                id="Rectangle_2275"
                                                data-name="Rectangle 2275"
                                                width="9.168"
                                                height="1.076"
                                                transform="translate(30.804 0)"
                                            />
                                            <path
                                                id="Path_28414"
                                                data-name="Path 28414"
                                                d="M111.9,10.164a2.053,2.053,0,0,0-.544-.506,7.125,7.125,0,0,0,2.114-.538,5.432,5.432,0,0,0,1.6-1.051,4.4,4.4,0,0,0,1.019-1.487,4.816,4.816,0,0,0,.354-1.873A4.186,4.186,0,0,0,114.914,1.2,7.463,7.463,0,0,0,110.282,0h-3.148V1.025h3.148a6.085,6.085,0,0,1,3.645.924,3.292,3.292,0,0,1,1.253,2.835,4,4,0,0,1-.342,1.683,3.525,3.525,0,0,1-.994,1.279,4.6,4.6,0,0,1-1.595.816,7.369,7.369,0,0,1-2.133.285h-2.983V9.81h2.211a1.925,1.925,0,0,1,.766.114,1.266,1.266,0,0,1,.462.392l5.734,7.265a.913.913,0,0,0,.285.253.746.746,0,0,0,.348.076h1.127Z"
                                                transform="translate(-65.349 0)"
                                            />
                                        </g>
                                    </svg>

                                </span>
                                <span className='xl:text-[7px] md:text-[6px] sm:text-[5px] text-[3px] sm:pt-[15px] pt-[6px]'>CREATE USER ID</span>
                            </div>
                        </div>
                    </div>
                </main>
                {/* CROUSEL HORIZONTAL BOTTOM */}
                <div className='2xl:py-6 xl:py-4 lg:py-0 md:pb-6 '>
                    <Slider {...hScrollSettings}>
                        {Images.map((image, index) => (
                            <div key={index}>
                                <img src={image}
                                    alt={`Image ${index + 1}`}
                                    className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 3xl:size-[200px] 2xl:size-[150px] xl:size-[130px] lg:size-[110px] md:size-[100px] sm:size-[100px] size-[50px]"

                                />
                            </div>
                        ))}
                    </Slider>
                </div>


                <footer className='flex justify-between items-end w-full '>

                    <div className='flex justify-end text-white w-2/3 tracking-widest 3xl:text-[16px] 2xl:text-[14px] xl:text-[12px] lg:text-[11px] md:text-[11px] sm:text-[8px] text-[5px] cursor-pointer'>
                        <span className='hover:opacity-[100%] opacity-50'>TERMS &nbsp;</span><span className='opacity-50'>|</span>
                        <span className='hover:opacity-[100%] opacity-50'>&nbsp; PRIVACY</span>

                    </div>
                    <div className='flex justify-end sm:gap-x-4 gap-x-2 w-1/2'>
                        <span className='hover:opacity-[100%] opacity-50 '>
                            <svg
                                className='2xl:w-[25.711px] xl:w-[20px] lg:w-[18px] md:w-[18px] sm:w-[16px] w-[10px]'
                                id="Group_37"
                                data-name="Group 37"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25.711 17.998"
                            >
                                <path
                                    id="Path_1"
                                    data-name="Path 1"
                                    d="M144.72,234.158a3.22,3.22,0,0,0-2.273-2.273c-2.005-.537-10.045-.537-10.045-.537s-8.04,0-10.045.537a3.221,3.221,0,0,0-2.273,2.273,35.917,35.917,0,0,0,0,12.377,3.221,3.221,0,0,0,2.273,2.273c2.005.537,10.045.537,10.045.537s8.04,0,10.045-.537a3.22,3.22,0,0,0,2.273-2.273,35.9,35.9,0,0,0,0-12.377ZM129.83,244.2V236.49l6.68,3.857Z"
                                    transform="translate(-119.546 -231.348)"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                        <span className='hover:opacity-[100%] opacity-50'>
                            <svg
                                className='3xl:w-[20.81px] xl:w-[16px] lg:w-[14px] md:w-[14px] sm:w-[13px] w-[8px]'
                                id="Group_41"
                                data-name="Group 41"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20.81 17.997"
                            >
                                <g id="Group_9" data-name="Group 9" transform="translate(0 0)">
                                    <g id="Group_8" data-name="Group 8">
                                        <path
                                            id="Path_6"
                                            data-name="Path 6"
                                            d="M249.18,235.512q-.139,3.038-4.244,8.319-4.244,5.514-7.181,5.515-1.821,0-3.079-3.359-.84-3.08-1.679-6.159-.934-3.357-2.005-3.359a6.447,6.447,0,0,0-1.633.98l-.978-1.261q1.541-1.353,3.037-2.708a6.885,6.885,0,0,1,3.084-1.868q2.428-.234,2.99,3.32.607,3.835.841,4.769.7,3.182,1.542,3.181.653,0,1.963-2.064a8.127,8.127,0,0,0,1.4-3.142q.187-1.781-1.4-1.782a3.9,3.9,0,0,0-1.541.341q1.535-5.024,5.861-4.883Q249.364,231.446,249.18,235.512Z"
                                            transform="translate(-228.38 -231.348)"
                                            fill="#fff"
                                        />
                                    </g>
                                </g>
                            </svg>


                        </span>
                        <span className='hover:opacity-[100%] opacity-50'>
                            <svg
                                className='3xl:w-[17.63px] xl:w-[15px] lg:w-[13px] md:w-[13px] sm:w-[12px] w-[8px]'
                                xmlns="http://www.w3.org/2000/svg"

                                viewBox="0 0 17.613 18"
                            >
                                <path
                                    id="logo"
                                    d="M10.482,7.622,17.039,0H15.485L9.792,6.618,5.245,0H0L6.876,10.007,0,18H1.554l6.012-6.989L12.368,18h5.245L10.482,7.622ZM8.354,10.1l-.7-1L2.114,1.17H4.5l4.474,6.4.7,1,5.815,8.318H13.1L8.354,10.1Z"
                                    fill="#fff"
                                />
                            </svg>


                        </span>
                        <span className='hover:opacity-[100%] opacity-50'>
                            <svg
                                className='3xl:w-[9.5px] xl:w-[8px] lg:w-[7.5px] md:w-[7.5px] sm:w-[7px] w-[4px]'
                                id="Group_38"
                                data-name="Group 38"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 9.567 17.998"
                            >
                                <path
                                    id="Path_2"
                                    data-name="Path 2"
                                    d="M428.317,241.4l.5-3.233h-3.1v-2.1a1.616,1.616,0,0,1,1.822-1.746h1.41v-2.752a17.2,17.2,0,0,0-2.5-.218c-2.554,0-4.224,1.548-4.224,4.351v2.464h-2.839V241.4h2.839v7.815a11.308,11.308,0,0,0,3.495,0V241.4Z"
                                    transform="translate(-419.377 -231.348)"
                                    fill="#fff"
                                />
                            </svg>


                        </span>
                        <span className='hover:opacity-[100%] opacity-50'>
                            <svg
                                className='3xl:w-[15.728px] xl:w-[13px] lg:w-[12px] md:w-[12px] sm:w-[11px] w-[6px]'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 15.728 17.998"
                            >
                                <path
                                    id="Path_24"
                                    data-name="Path 24"
                                    d="M577.586,235.731c0-.081,0-.084-.087-.083a3.823,3.823,0,0,1-.608-.053c-.731-.11-3.1-1.354-3.5-3.388a6.118,6.118,0,0,1-.1-.759c0-.1,0-.1-.1-.1h-2.849c-.187,0-.161-.023-.161.164q0,6.035,0,12.07a2.494,2.494,0,0,1-.031.447,2.612,2.612,0,0,1-3.107,2.134,3.511,3.511,0,0,1-.611-.2l-.049-.044c-.067-.056-.141-.1-.213-.152a2.567,2.567,0,0,1,.579-4.577,2.3,2.3,0,0,1,.924-.137,2.728,2.728,0,0,1,.6.093c.068.019.105,0,.109-.077,0-.025,0-.051,0-.077,0-.722-.027-2.3-.031-2.3,0-.208,0-.416.005-.624,0-.06-.029-.07-.079-.076a5.863,5.863,0,0,0-1.125-.025,5.694,5.694,0,0,0-4.774,3.34,5.669,5.669,0,0,0-.474,2.838,5.665,5.665,0,0,0,2.165,3.968,1.365,1.365,0,0,0,.3.2h0l.141.125a3,3,0,0,0,.475.29,5.75,5.75,0,0,0,6.959-1.4,5.6,5.6,0,0,0,1.37-3.721c.012-2,0-4.007,0-6.011,0-.048-.028-.116.025-.14s.083.036.121.061a7.375,7.375,0,0,0,2.421,1.043,6.855,6.855,0,0,0,1.54.186c.165,0,.186-.009.187-.171C577.623,237.865,577.585,235.919,577.586,235.731Z"
                                    transform="translate(-561.894 -231.348)"
                                    fill="#fff"
                                />
                            </svg>

                        </span>
                        <span className='hover:opacity-[100%] opacity-50'>
                            <svg
                                className='3xl:w-[17.968px] xl:w-[15px] lg:w-[14px] md::w-[14px] w-[8px]'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 17.968 17.998"
                            >
                                <path
                                    id="Path_23"
                                    data-name="Path 23"
                                    d="M648.272,231.348a8.994,8.994,0,0,0-3.278,17.369,8.653,8.653,0,0,1,.03-2.583c.162-.7,1.051-4.47,1.051-4.47a3.277,3.277,0,0,1-.266-1.332c0-1.251.725-2.183,1.628-2.183a1.13,1.13,0,0,1,1.14,1.265,17.777,17.777,0,0,1-.747,3,1.308,1.308,0,0,0,1.332,1.628c1.6,0,2.827-1.687,2.827-4.115a3.548,3.548,0,0,0-3.759-3.656,3.892,3.892,0,0,0-4.063,3.9,3.511,3.511,0,0,0,.666,2.05.267.267,0,0,1,.059.259c-.067.281-.222.9-.252,1.021-.037.163-.133.2-.3.118a4.028,4.028,0,0,1-1.828-3.486c0-2.834,2.057-5.439,5.942-5.439a5.277,5.277,0,0,1,5.543,5.195c0,3.1-1.954,5.595-4.662,5.595a2.39,2.39,0,0,1-2.058-1.036l-.562,2.139a9.784,9.784,0,0,1-1.117,2.361,9,9,0,1,0,2.679-17.6Z"
                                    transform="translate(-639.281 -231.348)"
                                    fill="#fff"
                                />
                            </svg>

                        </span>


                    </div>
                </footer>
            </section>
        </>
    )
}

export default Menu