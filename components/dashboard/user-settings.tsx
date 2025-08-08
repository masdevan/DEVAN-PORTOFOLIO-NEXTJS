'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

export function UserSettings() {
  const [currentUsername, setCurrentUsername] = useState('admin') 
  const [newUsername, setNewUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChangeUsername = () => {
    setMessage({ type: '', text: '' })
    if (newUsername.trim() === '') {
      setMessage({ type: 'error', text: 'New username cannot be empty.' })
      return
    }
    setCurrentUsername(newUsername.trim())
    setMessage({ type: 'success', text: 'Username updated successfully!' })
    setNewUsername('')
  }

  const handleChangePassword = () => {
    setMessage({ type: '', text: '' })
    if (currentPassword !== 'admin') {
      setMessage({ type: 'error', text: 'Incorrect current password.' })
      return
    }
    if (newPassword.length < 6) {
      setMessage({ type: 'error', text: 'New password must be at least 6 characters long.' })
      return
    }
    if (newPassword !== confirmNewPassword) {
      setMessage({ type: 'error', text: 'New passwords do not match.' })
      return
    }
    setMessage({ type: 'success', text: 'Password updated successfully!' })
    setCurrentPassword('')
    setNewPassword('')
    setConfirmNewPassword('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">User Settings</h1>
        <p className="text-gray-400">Manage your account username and password.</p>
      </div>

      {message.text && (
        <div className={`p-3 rounded-md text-sm ${message.type === 'success' ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
          {message.text}
        </div>
      )}

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Change Username</CardTitle>
          <CardDescription className="text-gray-400">
            Your current username is: <span className="font-semibold text-white">{currentUsername}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="newUsername" className="text-gray-300">New Username</Label>
            <Input
              id="newUsername"
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <Button onClick={handleChangeUsername} className="bg-gray-200 hover:bg-gray-300 text-black">
            <Save className="w-4 h-4 mr-2" />
            Update Username
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#161616] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Change Password</CardTitle>
          <CardDescription className="text-gray-400">
            Update your account password.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currentPassword" className="text-gray-300">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="newPassword" className="text-gray-300">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="confirmNewPassword" className="text-gray-300">Confirm New Password</Label>
            <Input
              id="confirmNewPassword"
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
            />
          </div>
          <Button onClick={handleChangePassword} className="bg-gray-200 hover:bg-gray-300 text-black">
            <Save className="w-4 h-4 mr-2" />
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
