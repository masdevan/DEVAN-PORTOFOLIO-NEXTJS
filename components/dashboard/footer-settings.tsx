'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Save, Plus, X } from 'lucide-react'

export function FooterSettings() {
  const [settings, setSettings] = useState({
    contactTitle: "Let's Work Together",
    contactDescription: "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
    email: "masdevansugiharta@gmail.com",
    phone: "085728133473",
    location: "Indonesia, Jawa Tengah",
    socialLinks: [
      { name: "GitHub", url: "https://github.com/masdevan", icon: "Github" },
      { name: "Instagram", url: "https://www.instagram.com/devan.ys", icon: "Instagram" },
      { name: "Email", url: "mailto:masdevansugiharta@gmail.com", icon: "Mail" },
      { name: "WhatsApp", url: "https://wa.me/6285728133473", icon: "MessageCircle" },
      { name: "Website", url: "https://devansugiharta.my.id", icon: "Globe" },
    ],
    copyrightText: "Devan Yudistira Sugiharta. All rights reserved.",
    footerLinks: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/terms-of-service" },
    ]
  })

  const [newSocialLink, setNewSocialLink] = useState({ name: '', url: '', icon: 'Globe' })
  const [newFooterLink, setNewFooterLink] = useState({ name: '', url: '' })

  const handleSave = () => {
    console.log('Saving footer settings:', settings)
  }

  const addSocialLink = () => {
    if (newSocialLink.name.trim() && newSocialLink.url.trim()) {
      setSettings({
        ...settings,
        socialLinks: [...settings.socialLinks, { ...newSocialLink }]
      })
      setNewSocialLink({ name: '', url: '', icon: 'Globe' })
    }
  }

  const removeSocialLink = (index: number) => {
    setSettings({
      ...settings,
      socialLinks: settings.socialLinks.filter((_, i) => i !== index)
    })
  }

  const addFooterLink = () => {
    if (newFooterLink.name.trim() && newFooterLink.url.trim()) {
      setSettings({
        ...settings,
        footerLinks: [...settings.footerLinks, { ...newFooterLink }]
      })
      setNewFooterLink({ name: '', url: '' })
    }
  }

  const removeFooterLink = (index: number) => {
    setSettings({
      ...settings,
      footerLinks: settings.footerLinks.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Footer & Contact Settings</h1>
        <p className="text-gray-400">Configure your footer and contact information</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Contact Section</CardTitle>
          <CardDescription className="text-gray-400">
            Update your contact section content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="contactTitle" className="text-gray-300">Contact Title</Label>
            <Input
              id="contactTitle"
              value={settings.contactTitle}
              onChange={(e) => setSettings({ ...settings, contactTitle: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="contactDescription" className="text-gray-300">Contact Description</Label>
            <Textarea
              id="contactDescription"
              value={settings.contactDescription}
              onChange={(e) => setSettings({ ...settings, contactDescription: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Contact Information</CardTitle>
          <CardDescription className="text-gray-400">
            Update your contact details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-gray-300">Email Address</Label>
            <Input
              id="email"
              value={settings.email}
              onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
            <Input
              id="phone"
              value={settings.phone}
              onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="location" className="text-gray-300">Location</Label>
            <Input
              id="location"
              value={settings.location}
              onChange={(e) => setSettings({ ...settings, location: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Social Media Links</CardTitle>
          <CardDescription className="text-gray-400">
            Manage your social media links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {settings.socialLinks.map((link, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-700 p-3 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{link.name}</p>
                  <p className="text-gray-400 text-sm truncate">{link.url}</p>
                </div>
                <X 
                  className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-400" 
                  onClick={() => removeSocialLink(index)}
                />
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-white font-medium mb-3">Add New Social Link</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Platform name"
                value={newSocialLink.name}
                onChange={(e) => setNewSocialLink({ ...newSocialLink, name: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Input
                placeholder="URL"
                value={newSocialLink.url}
                onChange={(e) => setNewSocialLink({ ...newSocialLink, url: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Input
                placeholder="Icon name"
                value={newSocialLink.icon}
                onChange={(e) => setNewSocialLink({ ...newSocialLink, icon: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Button onClick={addSocialLink} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Footer Links</CardTitle>
          <CardDescription className="text-gray-400">
            Manage footer navigation links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {settings.footerLinks.map((link, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-700 p-2 rounded-lg flex items-center gap-2">
                <span className="text-white text-sm">{link.name}</span>
                <X 
                  className="w-3 h-3 text-gray-400 cursor-pointer hover:text-red-400" 
                  onClick={() => removeFooterLink(index)}
                />
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-white font-medium mb-3">Add New Footer Link</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Link name"
                value={newFooterLink.name}
                onChange={(e) => setNewFooterLink({ ...newFooterLink, name: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Input
                placeholder="URL"
                value={newFooterLink.url}
                onChange={(e) => setNewFooterLink({ ...newFooterLink, url: e.target.value })}
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
              <Button onClick={addFooterLink} variant="outline" className="border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800">
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Copyright</CardTitle>
          <CardDescription className="text-gray-400">
            Update copyright text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="copyrightText" className="text-gray-300">Copyright Text</Label>
            <Input
              id="copyrightText"
              value={settings.copyrightText}
              onChange={(e) => setSettings({ ...settings, copyrightText: e.target.value })}
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
