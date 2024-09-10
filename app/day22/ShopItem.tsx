import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ShopItemProps {
  image: string;
  name: string;
  price: string;
}

export default function ShopItem({ image, name, price }: ShopItemProps) {
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
        <Button className="rounded-sm mt-auto text-xs py-1 px-1 h-8">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
