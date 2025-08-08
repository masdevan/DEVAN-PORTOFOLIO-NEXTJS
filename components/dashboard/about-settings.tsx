'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Save, Plus, X } from 'lucide-react'

export function AboutSettings() {
  const [settings, setSettings] = useState({
    title: 'About Me',
    description1: "Hello! I'm Devan Yudistira Sugiharta, a passionate full-stack developer with over 5 years of experience in creating digital solutions that make a difference. I specialize in modern web technologies and have a keen eye for user experience design.",
    description2: "My journey in tech started with a curiosity about how things work behind the scenes. Today, I build scalable applications, design intuitive interfaces, and solve complex problems with clean, efficient code.",
    aboutImage: '/developer-workspace.png',
    badges: [
      '5+ Years Experience',
      '50+ Projects Completed',
      'Full Stack Developer'
    ]
  })

  const [newBadge, setNewBadge] = useState('')

  const handleSave = () => {
    console.log('Saving about settings:', settings)
  }

  const addBadge = () => {
    if (newBadge.trim()) {
      setSettings({
        ...settings,
        badges: [...settings.badges, newBadge.trim()]
      })
      setNewBadge('')
    }
  }

  const removeBadge = (index: number) => {
    setSettings({
      ...settings,
      badges: settings.badges.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">About Me Settings</h1>
        <p className="text-gray-400">Configure your about section content</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Section Content</CardTitle>
          <CardDescription className="text-gray-400">
            Update your about section title and descriptions
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
            <Label htmlFor="description1" className="text-gray-300">First Paragraph</Label>
            <Textarea
              id="description1"
              value={settings.description1}
              onChange={(e) => setSettings({ ...settings, description1: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="description2" className="text-gray-300">Second Paragraph</Label>
            <Textarea
              id="description2"
              value={settings.description2}
              onChange={(e) => setSettings({ ...settings, description2: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              rows={4}
            />
          </div>
          <div>
            <Label htmlFor="aboutImage" className="text-gray-300">About Image URL</Label>
            <Input
              id="aboutImage"
              value={settings.aboutImage}
              onChange={(e) => setSettings({ ...settings, aboutImage: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Achievement Badges</CardTitle>
          <CardDescription className="text-gray-400">
            Manage your achievement badges
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {settings.badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-[#1a1a1a] text-gray-200 border border-gray-600 flex items-center gap-2">
                {badge}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-red-400" 
                  onClick={() => removeBadge(index)}
                />
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Add new badge"
              value={newBadge}
              onChange={(e) => setNewBadge(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              onKeyPress={(e) => e.key === 'Enter' && addBadge()}
            />
            <Button onClick={addBadge} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
              <Plus className="w-4 h-4" />
            </Button>
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
