"use client";

import useCartStore from "@/lib/store";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import ShopItem from "./ShopItem";
import CartItem from "./CartItem";

export default function Day23() {
  const { cart, setCart } = useCartStore();

  const subtotal = cart.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  return (
    <div className="relative h-[100vh] flex flex-col py-10 px-20 gap-4">
      <Image
        className="object-cover blur-lg z-0"
        src="/carrots.jpg"
        alt="carrots"
        fill={true}
      />
      <div className="z-10 bg-white flex flex-col p-4 rounded-xl shadow-xl w-fit">
        <h1 className="font-bold">Shop</h1>
        <div className="flex gap-4 items-center">
          <ShopItem image="/face-cream.jpg" name="Face Cream" price="24.00" />
          <ShopItem image="/face-serum.jpg" name="Face Serum" price="22.00" />
          <ShopItem image="/face-oil.jpg" name="Face Oil" price="18.00" />
          <ShopItem image="/face-mask.jpg" name="Face Mask" price="16.00" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="bg-white z-10 rounded-xl shadow-xl flex flex-col gap-6 p-4 h-fit">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Your Cart</h1>
            <p className="">{`${cart.length} items`}</p>
          </div>
          <div className="flex flex-col gap-4">
            {cart.length === 0 && (
              <h1>
                Your Cart is empty.
                <br /> Add items from the shop
              </h1>
            )}
            {cart.map((item, index) => (
              <CartItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="z-10 bg-white rounded-xl shadow-xl flex flex-col gap-6 p-4 w-56 h-fit">
            <h1 className="font-bold">Order Summary</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between w-full">
                <h1 className="font-semibold text-xs">Subtotal</h1>
                <p className="font-bold text-sm">{`${subtotal.toFixed(2)}$`}</p>
              </div>
              <div className="flex justify-between w-full">
                <h1 className="font-semibold text-xs">Tax</h1>
                <p className="font-bold text-sm">5.96$</p>
              </div>
              <div className="flex justify-between w-full">
                <h1 className="font-semibold text-xs">Shipping</h1>
                <p className="font-bold text-sm">0.00$</p>
              </div>
              <Separator className="w-full my-2" />
              <div className="flex justify-between w-full">
                <h1 className="font-bold">Total</h1>
                <p className="font-bold">{`${(subtotal + 5.96).toFixed(
                  2
                )}$`}</p>
              </div>
            </div>
            <Button className="rounded-sm">Pay now</Button>
          </div>
          <div className="z-10 bg-white rounded-xl shadow-xl flex flex-col gap-2 p-4 w-56 h-fit">
            <h1 className="text-lg font-bold">Promo Code</h1>
            <Input
              className="h-7 text-xs"
              type="text"
              id="promo-code"
              placeholder="Enter promo code"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
