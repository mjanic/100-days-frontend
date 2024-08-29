import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Day10() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-black">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%]"
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex items-center justify-center">
                <Image
                  className="h-[400px] w-[500px]"
                  src={`/nature${(index + 1).toString()}.jpg`}
                  alt={`nature${index}`}
                  width={250}
                  height={300}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1/6">
              <div className="p-1">
                <Image
                  className="h-[150px]"
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
