"use client";

import useCartStore from "@/lib/store";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ShopItemProps {
  image: string;
  name: string;
  price: string;
}

export default function ShopItem({ image, name, price }: ShopItemProps) {
  const { cart, setCart } = useCartStore();

  const addToCart = () => {
    const updatedCart = cart.some((cartItem) => cartItem.name === name)
      ? cart // Return the existing cart if item is already present
      : [...cart, { image, name, price }]; // Add new item if not present

    // Set the updated cart
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="flex p-2 gap-2">
      <Image
        className="rounded-lg"
        src={image}
        alt={name}
        width={70}
        height={70}
      />
      <div className="flex flex-col justify-center items-center text-xs">
        <h1 className="font-bold">{name}</h1>
        <h1 className="font-bold">{`${price}$`}</h1>
        <Button
          onClick={addToCart}
          className="rounded-sm mt-auto text-xs py-1 px-1 h-8"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
