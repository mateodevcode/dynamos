"use client";
/*
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ productos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1008) {
        setItemsPerSlide(2);
      } else if (window.innerWidth < 1350) {
        setItemsPerSlide(3);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardWidth = () => {
    switch (itemsPerSlide) {
      case 1:
        return 'w-full';
      case 2:
        return 'w-1/2';
      case 3:
        return 'w-1/3';
      case 4:
        return 'w-1/4';
      default:
        return 'w-1/4';
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= productos.length
        ? 0
        : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, productos.length - itemsPerSlide)
        : prevIndex - itemsPerSlide
    );
  };

  return (
    <div className="relative w-full max-w-7xl" ref={carouselRef}>
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
          }}
        >
          {productos.map((producto, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${getCardWidth()}`}
            >
              <ProductCard {...producto} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-colors"
        >
          <IoIosArrowBack className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-200 transition-colors"
        >
          <IoIosArrowForward className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel; */


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "./ProductCard";

export default function CarruselProductos({ productos }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        dragFree: 'free'
      }}
      className="w-full"
    >
      <CarouselContent className="w-full">
        {productos.map((producto, index) => (
          <CarouselItem key={index} className="custom:basis-1/4 sm:basis-1/3 lg:basis-1/5 xl:basis-1/7 box-border">
            <div className="p-1">
              <Card>
                <ProductCard {...producto}>
                </ProductCard>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:flex sm:hidden"/>
      <CarouselNext  className="lg:flex sm:hidden"/>
    </Carousel>
  )
}
