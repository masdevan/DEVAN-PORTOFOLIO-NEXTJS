'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Save, Plus, X, Edit, Upload } from 'lucide-react'
import Image from 'next/image'

export function ProjectsSettings() {
  const [settings, setSettings] = useState({
    title: 'Featured Projects',
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
        image: "/modern-ecommerce-interface.png",
        github: "#",
        demo: "#"
      },
      {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team collaboration features.",
        tech: ["React", "Node.js", "Socket.io", "MongoDB"],
        image: "/task-management-dashboard.png",
        github: "#",
        demo: "#"
      },
      {
        title: "Portfolio Website",
        description: "Responsive portfolio website with modern design, animations, and content management system.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
        image: "/modern-portfolio-website.png",
        github: "#",
        demo: "#"
      },
      {
        title: "Weather Dashboard",
        description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
        tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
        image: "/weather-dashboard-interface.png",
        github: "#",
        demo: "#"
      }
    ]
  })

  const [editingProject, setEditingProject] = useState<number | null>(null)
  const [newTech, setNewTech] = useState('')

  const handleSave = () => {
    console.log('Saving projects settings:', settings)
  }

  const addNewProject = () => {
    const newProject = {
      title: "New Project",
      description: "Project description",
      tech: [],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    }
    setSettings({
      ...settings,
      projects: [...settings.projects, newProject]
    })
    setEditingProject(settings.projects.length)
  }

  const removeProject = (index: number) => {
    setSettings({
      ...settings,
      projects: settings.projects.filter((_, i) => i !== index)
    })
  }

  const updateProject = (index: number, field: string, value: any) => {
    const updatedProjects = [...settings.projects]
    updatedProjects[index] = { ...updatedProjects[index], [field]: value }
    setSettings({ ...settings, projects: updatedProjects })
  }

  const addTechToProject = (projectIndex: number) => {
    if (newTech.trim()) {
      const updatedProjects = [...settings.projects]
      updatedProjects[projectIndex].tech.push(newTech.trim())
      setSettings({ ...settings, projects: updatedProjects })
      setNewTech('')
    }
  }

  const removeTechFromProject = (projectIndex: number, techIndex: number) => {
    const updatedProjects = [...settings.projects]
    updatedProjects[projectIndex].tech = updatedProjects[projectIndex].tech.filter((_, i) => i !== techIndex)
    setSettings({ ...settings, projects: updatedProjects })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Projects Settings</h1>
        <p className="text-gray-400">Manage your featured projects</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Section Title</CardTitle>
          <CardDescription className="text-gray-400">
            Update your projects section title
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="title" className="text-gray-300">Section Title</Label>
            <Input
              id="title"
              value={settings.title}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Projects</h2>
        <Button onClick={addNewProject} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {settings.projects.map((project, index) => (
        <Card key={index} className="bg-[#161616] border-gray-800">
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
            <div className="flex gap-4 flex-1">
              <div className="relative w-24 h-16 bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <CardTitle className="text-white text-lg mb-1">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm mb-2 line-clamp-2">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-[#1a1a1a] text-gray-200 border border-gray-600">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-[#1a1a1a] text-gray-200 border border-gray-600">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setEditingProject(editingProject === index ? null : index)}
                className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800"
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeProject(index)}
                className="border-red-600 text-red-400 bg-transparent hover:bg-red-900"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          {editingProject === index && (
            <CardContent className="space-y-4 border-t border-gray-700 pt-4">
              <div className="flex justify-center mb-4">
                <div className="relative w-64 h-40 bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">Project Title</Label>
                  <Input
                    value={project.title}
                    onChange={(e) => updateProject(index, 'title', e.target.value)}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Image URL</Label>
                  <Input
                    value={project.image}
                    onChange={(e) => updateProject(index, 'image', e.target.value)}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </div>
              </div>
              <div>
                <Label className="text-gray-300">Description</Label>
                <Textarea
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className="bg-[#1a1a1a] border-gray-700 text-white"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-300">GitHub URL</Label>
                  <Input
                    value={project.github}
                    onChange={(e) => updateProject(index, 'github', e.target.value)}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Demo URL</Label>
                  <Input
                    value={project.demo}
                    onChange={(e) => updateProject(index, 'demo', e.target.value)}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                  />
                </div>
              </div>
              <div>
                <Label className="text-gray-300">Technologies</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-[#1a1a1a] text-gray-200 border border-gray-600 flex items-center gap-2">
                      {tech}
                      <X 
                        className="w-3 h-3 cursor-pointer hover:text-red-400" 
                        onClick={() => removeTechFromProject(index, techIndex)}
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add technology"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    className="bg-[#1a1a1a] border-gray-700 text-white"
                    onKeyPress={(e) => e.key === 'Enter' && addTechToProject(index)}
                  />
                  <Button onClick={() => addTechToProject(index)} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}

      <Button onClick={handleSave} className="bg-gray-200 hover:bg-gray-300 text-black">
        <Save className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </div>
  )
}
