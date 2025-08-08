'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Save, Upload } from 'lucide-react'

export function HeroSettings() {
  const [settings, setSettings] = useState({
    name: 'Devan Yudistira Sugiharta',
    title: 'Full Stack Developer & UI/UX Designer passionate about creating innovative digital experiences',
    profileImage: '/professional-developer-portrait.png',
    primaryButtonText: 'View My Work',
    secondaryButtonText: 'Get In Touch',
  })

  const handleSave = () => {
    console.log('Saving hero settings:', settings)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Hero Section Settings</h1>
        <p className="text-gray-400">Configure your hero section content and profile</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Profile Information</CardTitle>
          <CardDescription className="text-gray-400">
            Update your name and professional title
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-300">Full Name</Label>
            <Input
              id="name"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="title" className="text-gray-300">Professional Title</Label>
            <Textarea
              id="title"
              value={settings.title}
              onChange={(e) => setSettings({ ...settings, title: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Profile Image</CardTitle>
          <CardDescription className="text-gray-400">
            Upload or change your profile picture
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="profileImage" className="text-gray-300">Image URL</Label>
            <Input
              id="profileImage"
              value={settings.profileImage}
              onChange={(e) => setSettings({ ...settings, profileImage: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <Button variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
            <Upload className="w-4 h-4 mr-2" />
            Upload New Image
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Call to Action Buttons</CardTitle>
          <CardDescription className="text-gray-400">
            Configure the action buttons in hero section
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="primaryButton" className="text-gray-300">Primary Button Text</Label>
            <Input
              id="primaryButton"
              value={settings.primaryButtonText}
              onChange={(e) => setSettings({ ...settings, primaryButtonText: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="secondaryButton" className="text-gray-300">Secondary Button Text</Label>
            <Input
              id="secondaryButton"
              value={settings.secondaryButtonText}
              onChange={(e) => setSettings({ ...settings, secondaryButtonText: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
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
