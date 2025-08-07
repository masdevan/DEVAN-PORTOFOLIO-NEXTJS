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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      <div className="container mx-auto px-8 text-center relative z-10 max-w-[1200px]">
        <div className="mb-8">
          <Image
            src="/professional-developer-portrait.png"
            alt="Devan Yudistira Sugiharta"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-purple-600 shadow-2xl shadow-purple-600/20"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Devan Yudistira
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Sugiharta
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer & UI/UX Designer passionate about creating innovative digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <Link href="#projects" onClick={() => (window as any).scrollToElement?.('projects')}>
              <Code className="w-5 h-5 mr-2" />
              View My Work
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white" asChild>
            <Link href="#contact" onClick={() => (window as any).scrollToElement?.('contact')}>
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
