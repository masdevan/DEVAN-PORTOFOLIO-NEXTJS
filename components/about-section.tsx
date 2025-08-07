import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-950/10 to-black">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center md:justify-end">
              <Image
                src="/developer-workspace.png"
                alt="Developer workspace"
                width={450}
                height={450}
                className="shadow-2xl shadow-purple-600/20 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hello! I'm Devan Yudistira Sugiharta, a passionate full-stack developer with over 5 years of experience 
                in creating digital solutions that make a difference. I specialize in modern web technologies and have 
                a keen eye for user experience design.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                My journey in tech started with a curiosity about how things work behind the scenes. Today, I build 
                scalable applications, design intuitive interfaces, and solve complex problems with clean, efficient code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-600 hover:bg-purple-800/50 hover:border-purple-400 transition-colors">
                  5+ Years Experience
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-600 hover:bg-purple-800/50 hover:border-purple-400 transition-colors">
                  50+ Projects Completed
                </Badge>
                <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-600 hover:bg-purple-800/50 hover:border-purple-400 transition-colors">
                  Full Stack Developer
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
