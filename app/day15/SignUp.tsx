import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface SignUpProps {
  setWithEmail: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignUp({ setWithEmail }: SignUpProps) {
  return (
    <Card className="w-[350px] h-auto shadow-2xl rounded-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription className="text-black text-xs font-bold">
          Join us now! Sign up to kick-start your journey.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-4 pt-2">
        <Button className="bg-white text-black border border-muted-foreground rounded-sm flex gap-1 shadow-sm hover:bg-inherit">
          <Image src="/g-logo.png" alt="g-logo" width={15} height={15} />
          Sign up with Google
        </Button>
        <Button
          onClick={() => setWithEmail(true)}
          className="flex gap-1 rounded-sm shadow-sm"
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} width={15} height={15} />
          Sign up with Email
        </Button>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center">
        <p className="text-[12px] font-bold">Already have an account?</p>
        <p className="text-blue-500 text-[12px] font-bold">
          <a href="#">Log in</a>
        </p>
      </CardFooter>
    </Card>
  );
}
