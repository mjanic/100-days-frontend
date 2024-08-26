import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Day6() {
  return (
    <div className="h-[100vh] flex p-[5%] gap-10">
      <div>
        <h1 className="text-4xl text-white p-2">Contact Us</h1>
        <p className="text-lg text-white p-2">
          Get in touch with us! Whether you have questions, feedback, or just
          want to say hello, we're here for you.
        </p>
      </div>
      <div>
        <Card className="w-[350px] min-h-[400px] py-2 rounded-[10px]">
          <CardContent>
            <form>
              <h1 className="font-bold py-2">Send us a Message</h1>
              <div className="grid w-full items-center gap-2">
                <div className="flex flex-col">
                  <Input className="border-2" id="name" placeholder="Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input className="border-2" id="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input className="border-2" id="phone" placeholder="Phone" />
                </div>
                <p className="text-xs py-1">
                  Preferred contact method of communication
                </p>
                <RadioGroup
                  className="flex gap-4 text-muted-foreground"
                  defaultValue="option-one"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="border-2 text-purple-700 border-purple-700"
                      value="option-one"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className="border-2 text-purple-700 border-purple-700"
                      value="option-two"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">Phone</Label>
                  </div>
                </RadioGroup>
                <Textarea className="border-2" placeholder="Message" />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="bg-[#DF0B64] text-[14px] w-[100%] h-8 hover:bg-[#DF0B64]">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
