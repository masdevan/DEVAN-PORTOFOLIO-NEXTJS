'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
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
    <header className="fixed top-0 w-full bg-[#111111]/90 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 sm:px-8 py-3 md:py-4 max-w-[1300px]">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
            Devan Yudistira
          </Link>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="#hero" className="text-gray-300 hover:text-gray-100 transition-colors">Home</Link>
            <Link href="#about" className="text-gray-300 hover:text-gray-100 transition-colors">About</Link>
            <Link href="#skills" className="text-gray-300 hover:text-gray-100 transition-colors">Skills</Link>
            <Link href="#projects" className="text-gray-300 hover:text-gray-100 transition-colors">Projects</Link>
            <Link href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors">Contact</Link>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white text-sm"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#111111] border-gray-800 text-white">
                <SheetHeader>
                  <SheetTitle>Menu Navigation</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 pt-8">
                  <Link href="#hero" className="text-lg hover:text-gray-100 transition-colors" onClick={() => (window as any).scrollToElement?.('hero')}>Home</Link>
                  <Link href="#about" className="text-lg hover:text-gray-100 transition-colors" onClick={() => (window as any).scrollToElement?.('about')}>About</Link>
                  <Link href="#skills" className="text-lg hover:text-gray-100 transition-colors" onClick={() => (window as any).scrollToElement?.('skills')}>Skills</Link>
                  <Link href="#projects" className="text-lg hover:text-gray-100 transition-colors" onClick={() => (window as any).scrollToElement?.('projects')}>Projects</Link>
                  <Link href="#contact" className="text-lg hover:text-gray-100 transition-colors" onClick={() => (window as any).scrollToElement?.('contact')}>Contact</Link>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white mt-4"
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
