import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDribbble } from "@fortawesome/free-brands-svg-icons"
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import { Button } from "@/components/ui/button"


export default function Day1 () {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <Card className="overflow-hidden">
                <CardHeader className="justify-center items-center bg-[#933855]">
                    <Avatar className="h-[70px] w-[70px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardHeader className="justify-center items-center space-y-0 relative pt-[40px]">
                <div className="custom-shape-divider-top-1724163656">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
                    <CardTitle className="text-[18px] tracking-wide">Johnny Rogers</CardTitle>
                    <div className="text-[10px] text-muted-foreground">@johnnyrogers</div>
                    <div className="flex space-x-4 p-4">
                        <FontAwesomeIcon icon={faFacebook} width={15}/>
                        <FontAwesomeIcon icon={faLinkedinIn} width={15}/>
                        <FontAwesomeIcon icon={faXTwitter} width={15}/>
                        <FontAwesomeIcon icon={faInstagram} width={15}/>
                        <FontAwesomeIcon icon={faDribbble} width={15}/>
                    </div>
                    <p className="text-[8px] font-bold text-center">Crafting brand and comunication strategies, creating visual designs, leading art direction and capturing portrets trough photography.</p>
                </CardHeader>
                <CardFooter className="flex space-x-2 justify-center items-center">
                    <Button className="bg-pink-600 text-[10px] w-24 h-8 hover:bg-[#933855]">Follow</Button>
                    <Button className="border-2 text-muted-foreground text-[10px] w-24 h-8" variant="outline">Message</Button>
                </CardFooter>
            </Card>
        </div>
    )
}