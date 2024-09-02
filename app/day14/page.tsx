"use client";

import { useState } from "react";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function Day14() {
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [passSettings, setPassSettings] = useState({
    length: 12,
    upper: false,
    lower: false,
    numbers: false,
    symbols: false,
  });

  interface PassSettingsProps {
    length: number;
    upper: boolean;
    lower: boolean;
    numbers: boolean;
    symbols: boolean;
  }

  const generatePassword = ({
    length,
    upper,
    lower,
    numbers,
    symbols,
  }: PassSettingsProps) => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";

    if (upper) characters += upperCaseLetters;
    if (lower) characters += lowerCaseLetters;
    if (numbers) characters += numberChars;
    if (symbols) characters += symbolChars;

    if (characters.length === 0) return "";

    let randomString = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }

    setGeneratedPassword(randomString);
  };

  function handleCopy() {
    const textToCopy = document.getElementById("passText").innerText;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy the password!");
        console.error("Failed to copy: ", err);
      });
  }

  useEffect(() => {
    console.log(passSettings);
  }, [passSettings]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <Card className="rounded-lg bg-black h-auto text-white w-[300px]">
        <CardHeader className="p-6">
          <CardTitle className="text-lg py-2">Generate password</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-[8px] text-slate-300" htmlFor="genpass">
                  GENERATED PASSWORD
                </Label>
                <div className="relative">
                  <div className="h-9 flex items-center p-2 pr-10 rounded-lg bg-slate-800 max-w-[250px]">
                    <p id="passText" className="truncate text-xs">
                      {generatedPassword}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 text-purple-500 cursor-pointer"
                    icon={faClone}
                    width={12}
                    onClick={() => handleCopy()}
                  />
                  <FontAwesomeIcon
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-500 cursor-pointer"
                    icon={faArrowsRotate}
                    width={12}
                    onClick={() => generatePassword(passSettings)}
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  className="text-[8px] w-full flex justify-between items-center text-slate-300"
                  htmlFor="genpass"
                >
                  <p>CHARACTER LENGTH</p>
                  <span className="text-sm text-purple-500">
                    {passSettings.length}
                  </span>
                </Label>
                <div className="relative">
                  <Input
                    disabled
                    className=" h-9 rounded-lg bg-slate-800 border-none pr-10 focus-visible:ring-purple-500 focus-visible:ring-offset-0"
                    id="genpass"
                  />
                  <Slider
                    className="w-[80%] absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-pointer"
                    defaultValue={[12]}
                    min={12}
                    max={32}
                    step={1}
                    onValueChange={(value) =>
                      setPassSettings((prev) => ({
                        ...prev,
                        length: value[0],
                      }))
                    }
                  />
                  <p className="absolute text-[10px] text-slate-300 text-center transform left-2 top-1/2 -translate-y-1/2">
                    12
                  </p>
                  <p className="absolute text-[10px] text-slate-300 text-center transform right-2 top-1/2 -translate-y-1/2">
                    32
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 text-slate-300">
                <Label className="text-[8px] text-slate-300" htmlFor="genpass">
                  SETTINGS
                </Label>
                <div className="flex items-center w-full justify-between bg-slate-800 h-9 rounded-lg p-2">
                  <Label className="text-[10px]" htmlFor="ucase">
                    Include uppercase letters
                  </Label>
                  <Switch
                    onCheckedChange={(checked) =>
                      setPassSettings((prev) => ({
                        ...prev,
                        upper: checked,
                      }))
                    }
                    id="ucase"
                  />
                </div>
                <div className="flex items-center w-full justify-between bg-slate-800 h-9 rounded-lg p-2">
                  <Label className="text-[10px]" htmlFor="lcase">
                    Include lowercase letters
                  </Label>
                  <Switch
                    onCheckedChange={(checked) =>
                      setPassSettings((prev) => ({
                        ...prev,
                        lower: checked,
                      }))
                    }
                    id="lcase"
                  />
                </div>
                <div className="flex items-center w-full justify-between bg-slate-800 h-9 rounded-lg p-2">
                  <Label className="text-[10px]" htmlFor="incn">
                    Include numbers
                  </Label>
                  <Switch
                    onCheckedChange={(checked) =>
                      setPassSettings((prev) => ({
                        ...prev,
                        numbers: checked,
                      }))
                    }
                    id="incn"
                  />
                </div>
                <div className="flex items-center w-full justify-between bg-slate-800 h-9 rounded-lg p-2">
                  <Label className="text-[10px]" htmlFor="incs">
                    Include symbols
                  </Label>
                  <Switch
                    onCheckedChange={(checked) =>
                      setPassSettings((prev) => ({
                        ...prev,
                        symbols: checked,
                      }))
                    }
                    id="incs"
                  />
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => generatePassword(passSettings)}
            className="w-full rounded-sm bg-purple-400"
          >
            Generate password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
