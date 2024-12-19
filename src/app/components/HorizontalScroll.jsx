import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, src: "/1mension.jpg" },
  { id: 2, src: "/1mension.jpg" },
  { id: 3, src: "/1mension.jpg" },
  { id: 4, src: "/1mension.jpg" },
  { id: 5, src: "/1mension.jpg" },
  { id: 6, src: "/1mension.jpg" },
  { id: 7, src: "/1mension.jpg" },
];

export default function HorizontalScroll() {
  const zimoRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(0);
  const scrollPauseTimeout = useRef(null);

  useEffect(() => {
    const container = zimoRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => container.scrollWidth - window.innerWidth,
        markers: true,
      },
    });

    tl.to(".panel", {
      x: () => -(container.scrollWidth - window.innerWidth),
    }, 0);

    gsap.to(".text1", {
      x: -500,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "20% top",
        scrub: 1,
      },
    });

    gsap.to(".text2", {
      x: -200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "5% top",
        scrub: 1,
      },
    });

    gsap.to(".text3", {
      x: -200,
      opacity: 0,
      duration: 10,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "10% top",
        scrub: 1,
      },
    });

    // IntersectionObserver setup
    const images = gsap.utils.toArray(container.querySelectorAll("img"));
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            scale: 1.1,
            duration: 0.1,
            ease: "power1.out",
          });
        } else {
          gsap.to(entry.target, {
            scale: 1,
            duration: 0.1,
            ease: "power1.in",
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5,
    });
    images.forEach((img) => {
      observer.observe(img);
    });

    const handleScroll = (event) => {
      const currentScrollY = window.pageYOffset;
      const currentTimestamp = Date.now();

      if (lastTimestamp.current) {
        const timeDiff = currentTimestamp - lastTimestamp.current;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);
        const speed = scrollDiff / timeDiff;

        // Update scroll 
        setScrollSpeed(speed);
      }

      lastScrollY.current = currentScrollY;
      lastTimestamp.current = currentTimestamp;

      if (scrollPauseTimeout.current) clearTimeout(scrollPauseTimeout.current);
      scrollPauseTimeout.current = setTimeout(() => {
        setScrollSpeed(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
      if (scrollPauseTimeout.current) clearTimeout(scrollPauseTimeout.current);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const images = document.querySelectorAll(".panel_img");

    images.forEach((img) => {
      const blurAmount = scrollSpeed > 5 ? Math.min(scrollSpeed * 10, 10) : 0;
      gsap.to(
        img, {
        filter: `blur(${blurAmount}px)`
      }
      )
    });
  }, [scrollSpeed]);

  return (
    <section
      ref={zimoRef}
      className="zimo relative flex h-screen w-screen overflow-hidden"
    >
      <div className="panel flex h-full flex-[0_0_50%] items-center justify-center bg-transparent px-10">
        <div className="panel_item grid row-span-4 h-full w-full mx-auto items-center  ">
          <div className="row-span-2 font-bold text-6xl h-full flex items-center">
            <span className="text1 text-white ">Lorem, ipsum.</span>
          </div>
          <div className="row-span-2 grid grid-cols-2  h-full">
            <div className="text2 text-white">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sapiente exercitationem fuga aut est et perspiciatis, qui quis ipsam molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt explicabo ratione molestias ut corporis, voluptatem, neque hic esse laboriosam atque! Vitae corrupti reiciendis delectus voluptas repellat quos, molestias nam ut dolorem sed a alias libero velit, doloremque eos tenetur? Vel provident voluptates, modi quae quas incidunt veritatis saepe quam.
              </p>
              <button className="text-white mt-8 bg-purple-700 py-4 px-12 rounded-full">Click</button>
            </div>
            <div className="text3 flex flex-col items-center ">
              <div className="flex flex-col text-center pb-8">
                <p className="font-bold text-purple-700 text-xl">COLUMN1</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
              </div>
              <div className="flex flex-col text-center">
                <p className="font-bold text-purple-700 text-xl">COLUMN1</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
                <p className="text-white">lorem lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {images.map((image) => (
        <div
          key={image.id}
          className="panel flex h-full flex-[0_0_50%] items-center justify-center p-0 bg-transparent"
        >
          <div
            className="panel_item h-full w-full mx-auto scale-[0.8] flex items-center justify-center"
          >
            <img
              className="panel_img firstAn w-full h-[400] mx-auto scale-[0.9]"
              src={image.src}
              width={300}
              alt={`zimo Image ${image.id}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
}