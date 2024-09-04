"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@/components/ui/separator";

import { useState } from "react";

export default function SignUpWithEmail() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Card className="w-[350px] h-auto shadow-2xl rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription className="text-black text-xs font-bold">
          Join us now! Sign up to kick-start your journey.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-4 pt-2">
        <div className="relative">
          <Input
            className="peer focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent"
            id="name"
            placeholder="Name"
          />
          <label
            className="absolute hidden -top-3 left-1 p-0.5 bg-white text-blue-500 text-[10px] font-bold peer-focus-visible:block"
            htmlFor="name"
          >
            Name
          </label>
        </div>

        <div className="relative">
          <Input
            className="peer focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent"
            id="email"
            type="email"
            placeholder="Email"
          />
          <label
            className="absolute hidden -top-3 left-1 p-0.5 bg-white text-blue-500 text-[10px] font-bold peer-focus-visible:block"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <Input
            className="peer focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:placeholder:text-transparent"
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
          />
          <label
            className="absolute hidden -top-3 left-1 p-0.5 bg-white text-blue-500 text-[10px] font-bold peer-focus-visible:block"
            htmlFor="password"
          >
            Password
          </label>
          <FontAwesomeIcon
            className="absolute transform right-2 text-slate-500 top-1/2 -translate-y-1/2 cursor-pointer"
            icon={passwordVisible ? faEyeSlash : faEye}
            width={12}
            height={12}
            onClick={() => setPasswordVisible((prev) => !prev)}
          />
        </div>

        <Button className="flex gap-1 rounded-sm shadow-sm">Sign up</Button>
        <div className="flex gap-2 justify-center">
          <p className="text-[12px] font-bold">Already have an account?</p>
          <p className="text-blue-500 text-[12px] font-bold">
            <a href="#">Log in</a>
          </p>
        </div>
        <div className="relative">
          <Separator />
          <p className="p-1 text-[12px] bg-white absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            or
          </p>
        </div>
        <Button className="bg-white text-black border border-muted-foreground rounded-sm flex gap-1 shadow-sm hover:bg-inherit">
          <Image src="/g-logo.png" alt="g-logo" width={15} height={15} />
          Sign up with Google
        </Button>
      </CardContent>
    </Card>
  );
}
