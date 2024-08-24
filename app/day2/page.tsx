"use client"

import Image from "next/image"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"

import { useState } from "react"

export default function Day2 () {

    const [selectedImage, setSelectedImage] = useState('1')

    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="flex min-h-[350px] gap-2 p-2">
                <div className="flex flex-col gap-1">
                    <Image onClick={()=>setSelectedImage('1')} className={`${selectedImage==='1' && 'border-2 border-blue-500'} rounded-md cursor-pointer`} width={60} height={75} alt="polo-shirt1" src="/blue-shirt1.jpg"/>
                    <Image onClick={()=>setSelectedImage('2')} className={`${selectedImage==='2' && 'border-2 border-blue-500'} rounded-md cursor-pointer`} width={60} height={75} alt="polo-shirt2" src="/blue-shirt2.jpg"/>
                    <Image onClick={()=>setSelectedImage('3')} className={`${selectedImage==='3' && 'border-2 border-blue-500'} rounded-md cursor-pointer`} width={60} height={75} alt="polo-shirt3" src="/blue-shirt3.jpg"/>
                </div>
                <div className="max-w-[350px]">
                <Image className="rounded-[5px] shadow-sm" width={400} height={500} alt="polo-shirt1" src={`/blue-shirt${selectedImage}.jpg`}/>
                </div>
                <div className="flex flex-col gap-6 p-2 max-w-[350px] justify-center">
                    <div>
                        <h6 className="text-blue-700 text-[10px] font-bold">POLO RALPH</h6>
                        <h3 className="font-bold text-[32px]">Custom Fit Polo Bear Oxford Shirt</h3>
                        <p className="text-muted-foreground text-[10px]">Blue polo with classic cut. Made of smooth and soft cotton.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-[32px]">$99.00<span className="text-blue-700 bg-blue-400 text-[10px] p-1">-25%</span></h3>
                        <p className="text-muted-foreground line line-through text-[10px]">132.00</p>
                    </div>
                    <div>
                        <h6 className="text-[10px] font-bold">CHOOSE SIZE</h6>
                        <ToggleGroup defaultValue="M" type="single">
                            <ToggleGroupItem value="S">S</ToggleGroupItem>
                            <ToggleGroupItem value="M">M</ToggleGroupItem>
                            <ToggleGroupItem value="L">L</ToggleGroupItem>
                            <ToggleGroupItem value="XL">XL</ToggleGroupItem>
                            <ToggleGroupItem value="XXL">XXL</ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                    <Button className="bg-blue-600 rounded-[5px]">ADD TO BAG</Button>
                </div>
            </div>
        </div>
    )
}