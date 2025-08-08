import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-12 md:py-20 bg-[#111111]">
      <div className="container mx-auto px-4 sm:px-8 max-w-[1300px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#161616] border border-gray-800 hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 overflow-hidden">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover"
                />
              </div>
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-lg sm:text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-[#1a1a1a] text-gray-200 border border-gray-600 hover:bg-gray-800 hover:border-gray-400 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <Button variant="outline" size="sm" className="h-8 text-xs sm:text-sm border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white">
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="h-8 text-xs sm:text-sm bg-gray-200 hover:bg-gray-300 text-black">
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
