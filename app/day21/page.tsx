import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Day21() {
  return (
    <div className="relative h-[100vh] flex flex-col pt-10 px-20 gap-4">
      <Image
        className="object-cover blur-lg z-0"
        src="/carrots.jpg"
        alt="carrots"
        fill={true}
      />
      <div className="z-10 bg-white flex flex-col p-4 rounded-xl shadow-xl w-fit">
        <h1 className="text-lg font-bold">Shop</h1>
        <div className="flex gap-4 items-center">
          <div className="flex p-2 gap-2">
            <Image
              className="rounded-lg"
              src="/face-cream.jpg"
              alt="face-cream"
              width={70}
              height={70}
            />
            <div className="flex flex-col justify-center items-center text-xs">
              <h1 className="font-bold">Face Cream</h1>
              <h1 className="font-bold">24.00$</h1>
              <Button className="rounded-sm mt-auto text-xs py-1 px-1 h-8">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="flex p-2 gap-2">
            <Image
              className="rounded-lg"
              src="/face-serum.jpg"
              alt="face-serum"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold">Face Serum</h1>
              <h1 className="font-bold">22.00$</h1>
              <Button className="rounded-sm mt-auto">Add to Cart</Button>
            </div>
          </div>
          <div className="flex p-2 gap-2">
            <Image
              className="rounded-lg"
              src="/face-oil.jpg"
              alt="face-oil"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold">Face Oil</h1>
              <h1 className="font-bold">19.00$</h1>
              <Button className="rounded-sm mt-auto">Add to Cart</Button>
            </div>
          </div>
          <div className="flex p-2 gap-2">
            <Image
              className="rounded-lg"
              src="/face-mask.jpg"
              alt="face-mask"
              width={100}
              height={100}
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold">Face Mask</h1>
              <h1 className="font-bold">14.00$</h1>
              <Button className="rounded-sm mt-auto">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white z-10 rounded-xl w-1/2 shadow-xl flex flex-col gap-8 p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <p className="text-2xl">3 items</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <Image
                className="rounded-lg"
                src="/face-cream.jpg"
                alt="face-cream"
                width={100}
                height={100}
              />
              <div className="flex flex-col w-full h-full p-2 py-4 justify-between">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">Illuminating face cream</h1>
                  <FontAwesomeIcon
                    className="text-slate-400"
                    icon={faX}
                    width={15}
                    height={15}
                  ></FontAwesomeIcon>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <FontAwesomeIcon
                      className="bg-slate-300 p-0.5 rounded-sm"
                      icon={faMinus}
                      width={20}
                      height={20}
                    />
                    <p>1</p>
                    <FontAwesomeIcon
                      className="bg-slate-300 p-0.5 rounded-sm"
                      icon={faPlus}
                      width={20}
                      height={20}
                    />
                  </div>
                  <h1 className="font-bold ">12.99$</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                className="rounded-lg"
                src="/face-cream.jpg"
                alt="face-cream"
                width={100}
                height={100}
              />
              <div className="flex flex-col w-full h-full p-2 py-4 justify-between">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold">Illuminating face cream</h1>
                  <FontAwesomeIcon
                    className="text-slate-400"
                    icon={faX}
                    width={15}
                    height={15}
                  ></FontAwesomeIcon>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex justify-center items-center gap-2">
                    <FontAwesomeIcon
                      className="bg-slate-300 p-0.5 rounded-sm"
                      icon={faMinus}
                      width={20}
                      height={20}
                    />
                    <p>1</p>
                    <FontAwesomeIcon
                      className="bg-slate-300 p-0.5 rounded-sm"
                      icon={faPlus}
                      width={20}
                      height={20}
                    />
                  </div>
                  <h1 className="font-bold ">12.99$</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
