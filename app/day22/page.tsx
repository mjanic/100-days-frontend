import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import ShopItem from "./ShopItem";
import CartItem from "./CartItem";

export default function Day22() {
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
          <ShopItem image="/face-cream.jpg" name="Face Cream" price="24.00" />
          <ShopItem image="/face-serum.jpg" name="Face Serum" price="22.00" />
          <ShopItem image="/face-oil.jpg" name="Face Oil" price="18.00" />
          <ShopItem image="/face-mask.jpg" name="Face Mask" price="16.00" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white z-10 rounded-xl shadow-xl flex flex-col gap-6 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">Your Cart</h1>
            <p className="">3 items</p>
          </div>
          <div className="flex flex-col gap-4">
            <CartItem image="/face-cream.jpg" name="Face Cream" price="24.00" />
            <CartItem image="/face-serum.jpg" name="Face Serum" price="22.00" />
            <CartItem image="/face-oil.jpg" name="Face Oil" price="18.00" />
            <CartItem image="/face-mask.jpg" name="Face Mask" price="16.00" />
          </div>
        </div>
      </div>
    </div>
  );
}
