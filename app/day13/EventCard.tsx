import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
  time: string;
  day: string;
  title: string;
  paragraph: string;
  sold: boolean;
  color: string;
}

export default function EventCard({
  time,
  day,
  title,
  paragraph,
  sold,
  color,
}: EventCardProps) {
  return (
    <div className="kartica max-w-[700px] bg-white rounded-lg px-3 flex items-center justify-center shadow-sm">
      <div
        style={{ backgroundColor: color }}
        className="w-32 p-2 flex flex-col items-center justify-center rounded-lg shadow-sm"
      >
        <p className="text-[10px] whitespace-nowrap font-bold">{day}</p>
        <h1 className="text-xl font-bold">{time}</h1>
      </div>
      <div className="p-3">
        <h1 className="font-extrabold text-lg">{title}</h1>
        <p className="text-xs font-medium">{paragraph}</p>
      </div>
      {sold ? (
        <div className="w-[250px] flex justify-center">
          <p className="whitespace-nowrap font-bold">Sold out!</p>
        </div>
      ) : (
        <div className="w-[250px] flex justify-center">
          <Button className="flex gap-1 rounded-md shadow-sm">
            <FontAwesomeIcon className="" icon={faTicket} width={10} />
            Buy a Ticket
          </Button>
        </div>
      )}
    </div>
  );
}
