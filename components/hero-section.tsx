'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code, Mail } from 'lucide-react'
import Link from "next/link"
import { useEffect } from 'react'

export function HeroSection() {
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-24 bg-[#111111]">
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/dy-pattern.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />
      <div className="container mx-auto px-4 sm:px-8 relative z-10 max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Devan Yudistira
              <br />
              Sugiharta
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
              Full Stack Developer & UI/UX Designer passionate about creating innovative digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Button size="default" className="bg-gray-200 hover:bg-gray-300 text-black text-sm sm:text-base">
                <Link href="#projects" onClick={() => (window as any).scrollToElement?.('projects')} className="flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View My Work
                </Link>
              </Button>
              <Button size="default" variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white text-sm sm:text-base">
                <Link href="#contact" onClick={() => (window as any).scrollToElement?.('contact')} className="flex items-center">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end order-first md:order-last mb-6 md:mb-0">
            <Image
              src="/professional-developer-portrait.png"
              alt="Devan Yudistira Sugiharta"
              width={400}
              height={400}
              className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full border-4 border-gray-300 shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#111111] to-transparent z-20" />
    </section>
  )
}
