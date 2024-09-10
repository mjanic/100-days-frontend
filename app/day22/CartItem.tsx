import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

interface CartItemProps {
  image: string;
  name: string;
  price: string;
}

export default function CartItem({ image, name, price }: CartItemProps) {
  return (
    <div className="flex gap-2">
      <Image
        className="rounded-lg"
        src={image}
        alt={name}
        width={70}
        height={70}
      />
      <div className="flex flex-col w-full h-full p-2 justify-between">
        <div className="flex justify-between space-x-24 items-center">
          <h1 className="font-bold text-xs">{name}</h1>
          <FontAwesomeIcon
            className="text-slate-400"
            icon={faX}
            width={10}
            height={10}
          ></FontAwesomeIcon>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon
              className="bg-slate-300 p-1 rounded-sm"
              icon={faMinus}
              width={15}
              height={15}
            />
            <p className="text-xs">1</p>
            <FontAwesomeIcon
              className="bg-slate-300 p-1 rounded-sm"
              icon={faPlus}
              width={15}
              height={15}
            />
          </div>
          <h1 className="font-bold text-sm">{`${price}$`}</h1>
        </div>
      </div>
    </div>
  );
}
