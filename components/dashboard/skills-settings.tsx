'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Save, Plus, X, Code, Database, Palette, Globe, Laptop, Server, Type, Table, Cloud, Ship, Atom, Zap, Paintbrush, PenTool, Terminal, GitBranch, Settings, Shield, LayoutDashboard } from 'lucide-react'

const iconOptions = [
  { name: 'Code', icon: Code },
  { name: 'Database', icon: Database },
  { name: 'Palette', icon: Palette },
  { name: 'Globe', icon: Globe },
  { name: 'Laptop', icon: Laptop },
  { name: 'Server', icon: Server },
  { name: 'Type', icon: Type },
  { name: 'Table', icon: Table },
  { name: 'Cloud', icon: Cloud },
  { name: 'Ship', icon: Ship },
  { name: 'Atom', icon: Atom },
  { name: 'Zap', icon: Zap },
  { name: 'Paintbrush', icon: Paintbrush },
  { name: 'Terminal', icon: Terminal },
  { name: 'LayoutDashboard', icon: LayoutDashboard },
]

export function SkillsSettings() {
  const [settings, setSettings] = useState({
    title: 'Skills & Technologies',
    description: 'Dive into my diverse skill set. These are some of the core technologies and platforms I master to transform ideas into impactful digital experiences.',
    skills: [
      { name: "JavaScript", category: "Frontend", icon: "Code" },
      { name: "React", category: "Frontend", icon: "Atom" },
      { name: "Next.js", category: "Frontend", icon: "Zap" },
      { name: "TypeScript", category: "Frontend", icon: "Type" },
      { name: "Node.js", category: "Backend", icon: "Server" },
      { name: "Python", category: "Backend", icon: "Terminal" },
      { name: "PostgreSQL", category: "Database", icon: "Table" },
      { name: "MongoDB", category: "Database", icon: "Database" },
      { name: "Tailwind CSS", category: "Design", icon: "Paintbrush" },
      { name: "AWS", category: "Cloud", icon: "Cloud" },
      { name: "Docker", category: "DevOps", icon: "Ship" },
      { name: "REST APIs", category: "Backend", icon: "LayoutDashboard" },
    ]
  })

  const [newSkill, setNewSkill] = useState({
    name: '',
    category: '',
    icon: 'Code'
  })

  const categories = [...new Set(settings.skills.map(skill => skill.category))]

  const handleSave = () => {
    console.log('Saving skills settings:', settings)
  }

  const addSkill = () => {
    if (newSkill.name.trim() && newSkill.category.trim()) {
      setSettings({
        ...settings,
        skills: [...settings.skills, { ...newSkill }]
      })
      setNewSkill({ name: '', category: '', icon: 'Code' })
    }
  }

  const removeSkill = (index: number) => {
    setSettings({
      ...settings,
      skills: settings.skills.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Skills Settings</h1>
        <p className="text-gray-400">Manage your skills and technologies</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Section Content</CardTitle>
          <CardDescription className="text-gray-400">
            Update your skills section title and description
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-gray-300">Section Title</Label>
            <Input
              id="title"
              value={settings.title}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-300">Description</Label>
            <Textarea
              id="description"
              value={settings.description}
              onChange={(e) => setSettings({ ...settings, description: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Skills Management</CardTitle>
          <CardDescription className="text-gray-400">
            Add, edit, or remove your skills
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {settings.skills.map((skill, index) => {
              const IconComponent = iconOptions.find(icon => icon.name === skill.icon)?.icon || Code
              return (
                <div key={index} className="bg-[#1a1a1a] border border-gray-700 p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#222222] border border-gray-600 rounded">
                      <IconComponent className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{skill.name}</p>
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-300 mt-1">
                        {skill.category}
                      </Badge>
                    </div>
                  </div>
                  <X 
                    className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-400" 
                    onClick={() => removeSkill(index)}
                  />
                </div>
              )
            })}
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-white font-medium mb-3">Add New Skill</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Skill name"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Input
                placeholder="Category"
                value={newSkill.category}
                onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Select value={newSkill.icon} onValueChange={(value) => setNewSkill({ ...newSkill, icon: value })}>
                <SelectTrigger className="bg-[#1a1a1a] border-gray-700 text-white">
                  <SelectValue placeholder="Select icon" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-gray-700">
                  {iconOptions.map((option) => (
                    <SelectItem key={option.name} value={option.name} className="text-white hover:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <option.icon className="w-4 h-4" />
                        {option.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={addSkill} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="bg-gray-200 hover:bg-gray-300 text-black">
        <Save className="w-4 h-4 mr-2" />
        Save Changes
      </Button>
    </div>
  )
}
