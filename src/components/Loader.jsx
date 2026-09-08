import { useEffect, useState } from "react";

import sohoImage from "../assets/sohoImage.webp";
import nyfwImage from "../assets/nyfwImage.webp";
import kidvisionImage from "../assets/kidvisionImage.webp";
import makersImage from "../assets/makersImage.webp";
import anniversaryImage from "../assets/anniversaryImage.webp";
import sohonycImage from "../assets/sohonycImage.webp";
import airforceImage from "../assets/airforceImage.webp";

const Loader = () => {
  const words = ["ENVIRONMENTS", "EXPERIENCES", "CONTENT"];

  const images = [
    sohoImage,
    nyfwImage,
    kidvisionImage,
    makersImage,
    anniversaryImage,
    sohonycImage,
    airforceImage,
  ];

  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Change intro words
    const wordTimer = setInterval(() => {
      setIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }

        return prev;
      });
    }, 800);

    // Preload all images
    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = resolve;
        img.onerror = resolve;

        img.src = src;
      });
    });

    // Wait for BOTH:
    // 1. At least 3 seconds
    // 2. All images loaded
    Promise.all([
      Promise.all(imagePromises),
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]).then(() => {
      setClosing(true);
    });

    return () => {
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 bg-black flex items-center justify-center transition-[clip-path] duration-700 ease-in-out ${
        closing
          ? "[clip-path:inset(0_0_100%_0)]"
          : "[clip-path:inset(0_0_0_0)]"
      }`}
    >
      <h1 className="font-neue text-5xl md:text-8xl font-bold bg-linear-to-r from-[#ffb13b] via-[#ff671b] to-[#ff2d03] bg-clip-text text-transparent">
        {words[index]}
      </h1>
    </div>
  );
};

export default Loader;