'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

export function HeaderSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Devan Yudistira',
    ctaButtonText: 'Contact Me',
  })

  const handleSave = () => {
    console.log('Saving header settings:', settings)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Header Settings</h1>
        <p className="text-gray-400">Configure your website header and navigation</p>
      </div>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Site Branding</CardTitle>
          <CardDescription className="text-gray-400">
            Configure your site name and branding
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="siteName" className="text-gray-300">Site Name</Label>
            <Input
              id="siteName"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Call to Action</CardTitle>
          <CardDescription className="text-gray-400">
            Configure the main CTA button in header
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="ctaButtonText" className="text-gray-300">CTA Button Text</Label>
            <Input
              id="ctaButtonText"
              value={settings.ctaButtonText}
              onChange={(e) => setSettings({ ...settings, ctaButtonText: e.target.value })}
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
