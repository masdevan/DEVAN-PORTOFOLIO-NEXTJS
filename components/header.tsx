'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect } from 'react'

export function Header() {
  useEffect(() => {
    const scrollToElement = (id: string) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    ;(window as any).scrollToElement = scrollToElement
  }, [])
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-purple-900/20 z-50">
      <div className="container mx-auto px-8 py-4 max-w-[1200px]">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent cursor-pointer">
            Devan Sugiharta
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#hero" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="#skills" className="hover:text-purple-400 transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white"
            onClick={() => (window as any).scrollToElement?.('contact')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-purple-900/20 text-white">
                <div className="flex flex-col gap-6 pt-8">
                  <Link href="#hero" className="text-xl hover:text-purple-400 transition-colors" onClick={() => (window as any).scrollToElement?.('hero')}>Home</Link>
                  <Link href="#about" className="text-xl hover:text-purple-400 transition-colors" onClick={() => (window as any).scrollToElement?.('about')}>About</Link>
                  <Link href="#skills" className="text-xl hover:text-purple-400 transition-colors" onClick={() => (window as any).scrollToElement?.('skills')}>Skills</Link>
                  <Link href="#projects" className="text-xl hover:text-purple-400 transition-colors" onClick={() => (window as any).scrollToElement?.('projects')}>Projects</Link>
                  <Link href="#contact" className="text-xl hover:text-purple-400 transition-colors" onClick={() => (window as any).scrollToElement?.('contact')}>Contact</Link>
                  <Button 
                    variant="outline" 
                    className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white mt-4"
                    onClick={() => (window as any).scrollToElement?.('contact')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
