"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Day10() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.scrollTo(selectedImage - 1);
  }, [selectedImage]);

  return (
    <div className="h-[100vh] flex flex-col justify-between p-2 items-center space-b bg-black">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-[80%] p-12"
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={`p-1 flex items-center justify-center`}>
                <Image
                  className="h-[50vh] w-[90vw] object-cover"
                  src={`/nature${(index + 1).toString()}.jpg`}
                  alt={`nature${index}`}
                  width={250}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="text-white bg-black border-none"
          onClick={() => {
            setSelectedImage((prev) => prev - 1);
          }}
        />
        <CarouselNext
          className="text-white bg-black border-none"
          onClick={() => {
            setSelectedImage((prev) => prev + 1);
          }}
        />
      </Carousel>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              onClick={() => setSelectedImage(index + 1)}
              key={index}
              className="basis-1/6 pl-1 cursor-pointer"
            >
              <div className="p-1">
                <Image
                  className={`h-[25vh] w-[25vw] object-cover ${
                    selectedImage === index + 1 && "border-2 border-white"
                  }`}
                  src={`/nature${(index + 1).toString()}.jpg`}
                  alt={`nature${index}`}
                  width={250}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
