"use client"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
//import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { navItems } from "@/lib/constants"
import Link from "next/link"
import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
export default function MobileNavigation () {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="md:hidden flex items-center space-x-4 ">
    {/* remove comment if needed theme toggle      <ThemeToggle/>    */} 
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <RiMenu3Fill/>
    </Button>
    
  </SheetTrigger>
  <SheetContent>
    <SheetTitle></SheetTitle>
    <div className="flex flex-col space-y-4 mt-8 p-8">
    {navItems.map(item => (<Link key={item.name} href={item.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200" onClick={() => setIsOpen(false)}>{item.name}</Link>))} </div>
  </SheetContent>
</Sheet> </div>
}