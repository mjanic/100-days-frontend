import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface CardWithImageProps {
  priority: "HIGH" | "MEDIUM" | "LOW";
  date: string;
  image?: string | undefined;
  title: string;
  paragraph: string;
  peoples: string[];
}

export default function CardWithImage({
  priority,
  date,
  image,
  title,
  paragraph,
  peoples,
}: CardWithImageProps) {
  return (
    <div className=" rounded-lg bg-white shadow-xl flex flex-col gap-3 p-3">
      <div className="flex justify-between items-center">
        <Badge
          className={cn(
            "text-white text-[10px] p-0.5 rounded-md",
            priority === "HIGH"
              ? "bg-pink-500"
              : priority === "MEDIUM"
              ? "bg-blue-400"
              : "bg-green-500"
          )}
          variant="outline"
        >
          {priority}
        </Badge>
        <p className="text-slate-400 text-[10px]">{date}</p>
      </div>
      {image && (
        <div className="h-24 relative rounded-md shadow-xl overflow-hidden">
          <Image
            className="object-cover"
            src={`/${image}`}
            alt={image.split(".")[0]}
            fill={true}
          />
        </div>
      )}

      <h1 className="font-extrabold text-sm">{title}</h1>
      <p className="text-xs">{paragraph}</p>
      <div className="flex ml-3">
        {peoples.map((person, i) => (
          <Avatar className="-ml-3 h-8 w-8 z-20" key={i}>
            <AvatarImage src={`/${person}`} alt={person.split(".")[0]} />
            <AvatarFallback>{`${i}${i}`}</AvatarFallback>
          </Avatar>
        ))}
        <Avatar className="-ml-3 h-8 w-8 z-10">
          <AvatarImage src="/dashcircleplus.png" alt="avatarplus" />
          <AvatarFallback>avatarplus</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
