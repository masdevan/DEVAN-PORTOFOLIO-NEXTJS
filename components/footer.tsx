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
    <footer className="bg-gradient-to-t from-purple-950/30 to-black border-t border-purple-900/20">
      
      <section id="contact" className="py-20">
        <div className="container mx-auto px-8 max-w-[1200px]"> 
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">masdevansugiharta@gmail.com</span> 
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">085728133473</span> 
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">Indonesia, Jawa Tengah</span> 
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white justify-start" asChild>
                    <Link href="https://github.com/masdevan" target="_blank" rel="noopener noreferrer"> 
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white justify-start" asChild>
                    <Link href="https://www.instagram.com/devan.ys" target="_blank" rel="noopener noreferrer"> 
                      <Instagram className="w-5 h-5 mr-3" />
                      Instagram
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white justify-start" asChild>
                    <Link href="mailto:masdevansugiharta@gmail.com"> 
                      <Mail className="w-5 h-5 mr-3" />
                      Email
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white justify-start" asChild>
                    <Link href="https://wa.me/6285728133473" target="_blank" rel="noopener noreferrer"> 
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white justify-start" asChild>
                    <Link href="https://devansugiharta.my.id" target="_blank" rel="noopener noreferrer"> 
                      <Globe className="w-5 h-5 mr-3" />
                      Website
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="border-t border-purple-900/20 py-8">
        <div className="container mx-auto px-8 max-w-[1200px]"> 
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Devan Yudistira Sugiharta. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
