"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      setMousePosition({ x: mouseX, y: mouseY });

      if (typeof window !== "undefined") {
        const offsetX = (mouseX - window.innerWidth / 2) / 100;
        const offsetY = (mouseY - window.innerHeight / 2) / 100;
        setOffset({ x: offsetX, y: offsetY });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <>
      <div className="w-dvw overflow-hidden bg-black">
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 "
          ref={imageRef}
          style={{
            transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src={"/Group 451.png"}
            width={800}
            height={800}
            alt="bg-image"
            className=" opacity-50"
          />
        </div>
        <HeroSection />
        <HorizontalScroll />
        <Footer />
      </div>
    </>
  );
}
