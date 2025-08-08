'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Globe, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Footer() {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString())
  }, [])
  return (
    <footer className="bg-[#111111] border-t border-gray-800">
      <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url(/dy-pattern.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px',
          }}
        />
        <div className="container mx-auto px-4 sm:px-8 relative z-10 max-w-[1300px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            Let's Work Together
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Get In Touch</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                    <span className="text-sm sm:text-base text-gray-300">masdevansugiharta@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                    <span className="text-sm sm:text-base text-gray-300">085728133473</span>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
                    <span className="text-sm sm:text-base text-gray-300">Indonesia, Jawa Tengah</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Button variant="outline" className="h-9 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white justify-start" asChild>
                    <Link href="https://github.com/masdevan" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-9 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white justify-start" asChild>
                    <Link href="https://www.instagram.com/devan.ys" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      Instagram
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-9 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white justify-start" asChild>
                    <Link href="mailto:masdevansugiharta@gmail.com">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      Email
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-9 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white justify-start" asChild>
                    <Link href="https://wa.me/6285728133473" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      WhatsApp
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-9 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white justify-start" asChild>
                    <Link href="https://devansugiharta.my.id" target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                      Website
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-gray-800 py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xs sm:text-sm text-gray-400">
                © {new Date().getFullYear()} Devan Yudistira Sugiharta. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/privacy-policy" className="text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
