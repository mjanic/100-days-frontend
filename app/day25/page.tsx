"use client";

import { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faUserGroup,
  faUser,
  faDownload,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Notification from "./Notification";

export default function Day25() {
  const [notify, setNotify] = useState(true);

  return (
    <div className="min-h-screen flex justify-center p-10">
      <div className="w-64 h-fit bg-white rounded-sm shadow-lg flex flex-col p-2 relative">
        {notify && (
          <p
            onClick={() => {
              setNotify((prev) => !prev);
            }}
            className="absolute right-[3px] -top-12 z-20 text-4xl text-red-500 cursor-pointer"
          >
            .
          </p>
        )}
        <FontAwesomeIcon
          className={cn(
            "absolute right-0 -top-6 bg-white p-0.5 rounded-full shadow-lg cursor-pointer",
            !notify && "text-slate-400"
          )}
          onClick={() => {
            setNotify((prev) => !prev);
          }}
          width={20}
          height={20}
          icon={faBell}
        ></FontAwesomeIcon>
        <div className="flex justify-between items-end mb-4">
          <h1 className="font-bold">Notifications</h1>
          <p className="text-muted-foreground text-[12px]">Mark as read</p>
        </div>
        {notify ? (
          <>
            <Notification
              name="Jane Anne"
              time="2 min"
              icon={faUserGroup}
              seen={false}
              avatar="avatar11.jpg"
            />
            <Notification
              name="Ryan"
              time="2 hours"
              icon={faComment}
              seen={false}
              avatar="avatar33.jpg"
            />
            <Notification
              name="Leslie Wahl"
              time="1 day"
              icon={faUser}
              seen={true}
              avatar="avatar22.jpg"
            />
            <Notification
              name="Jeri Gibson"
              time="2 days"
              icon={faLink}
              seen={true}
              avatar="avatar44.jpg"
            />
            <Button className="bg-purple-700 rounded-sm h-8 mt-6 mb-2">
              See all notifications
            </Button>
          </>
        ) : (
          <p className="text-xs text-muted-foreground p-4">
            You dont have any notifications yet
          </p>
        )}
      </div>
    </div>
  );
}
