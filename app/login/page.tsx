'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'

export default function LoginPage() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const router = useRouter()

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault()
  setError('')

  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('isLoggedIn', 'true')
    router.push('/dashboard')
  } else {
    setError('Invalid username or password.')
  }
}

return (
  <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white p-4 sm:p-6">
    <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url(/dy-pattern.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />
    <Card className="w-full max-w-sm sm:max-w-md bg-[#161616] z-10 border-gray-800">
      <CardHeader className="text-center p-6 sm:p-8 pb-4">
        <div className="flex justify-center mb-4">
          <span className="text-5xl font-serif font-light text-gray-200">DY</span>
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-bold text-white">Login to Dashboard</CardTitle>
        <CardDescription className="text-sm sm:text-base text-gray-400 mt-2">
          Enter your credentials to access the admin panel.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username" className="text-gray-300 mb-2 block">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-300 mb-2 block">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700 text-white"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black">
            <Lock className="w-4 h-4 mr-2" />
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
)
}
