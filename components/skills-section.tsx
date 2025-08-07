'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Globe, Laptop, Server, Type, Table, Cloud, Ship, Atom, Zap, Paintbrush, PenTool, Terminal, GitBranch, Settings, Shield, LayoutDashboard } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"

const iconMap = {
  Code,
  Database,
  Palette,
  Globe,
  Laptop,
  Server,
  Type,
  Table,
  Cloud,
  Ship,
  Atom,
  Zap,
  Paintbrush,
  PenTool,
  Terminal,
  GitBranch,
  Settings,
  Shield,
  LayoutDashboard,
}

function getIconComponent(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || Code
}

interface Skill {
  name: string;
  category: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(skills.map(skill => skill.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skills;
    }
    return skills.filter(skill => skill.category === activeCategory);
  }, [skills, activeCategory]);

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-8 max-w-[1200px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Dive into my diverse skill set. These are some of the core technologies and platforms I master to transform ideas into impactful digital experiences.
        </p>

        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`
                ${activeCategory === category 
                  ? "bg-purple-600 hover:bg-purple-700 text-white" 
                  : "border-purple-600 text-purple-400 bg-purple-950/20 hover:bg-purple-600 hover:text-white"
                }
                transition-colors duration-200
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.icon)
            return (
              <Card 
                key={index} 
                className="bg-purple-950/20 border-purple-900/30 
                           hover:border-purple-600/50 transition-all duration-300 
                           hover:shadow-lg hover:shadow-purple-600/20 
                           transform hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="p-4 bg-purple-900/50 border border-purple-700/50 rounded-full mb-4">
                    <IconComponent className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <Badge variant="outline" className="border-purple-600 text-purple-300">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
        {filteredSkills.length === 0 && (
          <p className="text-center text-gray-400 mt-8 text-xl">No skills found for this category.</p>
        )}
      </div>
    </section>
  )
}
