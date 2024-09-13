import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faComment,
  faUser,
  faLink,
  IconDefinition,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NotificationProps {
  avatar: string;
  seen: boolean;
  icon: IconDefinition;
  name: string;
  time: string;
}

export default function Notification({
  avatar,
  seen,
  icon,
  name,
  time,
}: NotificationProps) {
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "flex gap-1 items-center py-1 px-2 -mx-2",
          !seen && "bg-slate-100"
        )}
      >
        <div className="relative self-start mt-1">
          <Avatar className="h-8 w-8 ">
            <AvatarImage src={`/${avatar}`} />
            <AvatarFallback>{avatar.split(".")[0]}</AvatarFallback>
          </Avatar>
          <FontAwesomeIcon
            className={cn(
              "absolute top-0 right-0 h-auto text-white rounded-full p-[2px]",
              icon === faUserGroup
                ? "bg-blue-400"
                : icon === faComment
                ? "bg-yellow-400"
                : icon === faUser
                ? "bg-blue-700"
                : "bg-green-400"
            )}
            icon={icon}
            width={8}
            height={8}
          />
        </div>
        <div className="flex flex-col p-1 gap-1 w-full">
          <p className="text-[10px]">
            <span className="font-bold">{name}</span>
            {icon === faUserGroup
              ? " joined to "
              : icon === faComment
              ? " mentioned you in "
              : icon === faUser
              ? " sent you a "
              : " uploaded 2 attachements to "}
            <span className="font-bold">
              {icon === faUserGroup
                ? '"Design"'
                : icon === faComment
                ? "comment"
                : icon === faUser
                ? "friend request"
                : '"Source"'}
            </span>
            {icon === faUserGroup
              ? " Group."
              : icon === faLink
              ? " Channel."
              : "."}
          </p>
          <p className="text-muted-foreground text-[10px]">{`${time} ago`}</p>
          {icon === faUser && (
            <div className="flex gap-1">
              <Button className="bg-purple-700 text-white h-6 text-[8px] rounded-md flex-1">
                Accept
              </Button>
              <Button
                variant="secondary"
                className="bg-slate-200 text-black h-6 text-[8px] rounded-md flex-1"
              >
                Delete
              </Button>
            </div>
          )}
          {icon === faLink && (
            <div className="flex flex-col gap-1">
              <div className="p-1 bg-slate-100 border border-slate-300 rounded-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1">
                    <Image
                      className="rounded-md"
                      src="/watercolor1.jpg"
                      alt="watercolor"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-muted-foreground text-[8px]">
                        Techtalk.me
                      </p>
                      <h1 className="text-purple-500 font-bold text-[10px]">
                        App generator - The technology- agnostic way
                      </h1>
                    </div>
                  </div>
                  <p className="text-[8px] text-muted-foreground">
                    Even after two years of R&D work, AppSeed is still super
                    young concept and we expect a slow adoption in the next
                    few...
                  </p>
                </div>
              </div>
              <div className="p-1 bg-slate-100 border border-slate-300 rounded-sm flex gap-1 items-center">
                <Image
                  className="rounded-sm"
                  src="/watercolor2.jpg"
                  alt="wc2"
                  width={30}
                  height={30}
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-purple-500 text-[10px] font-bold">
                    Background Images
                  </h1>
                  <p className="text-muted-foreground text-[8px]">
                    ZIP - 1.4 GB
                  </p>
                </div>
                <FontAwesomeIcon
                  className="ml-auto cursor-pointer"
                  icon={faDownload}
                  width={10}
                  height={10}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Separator />
    </div>
  );
}
