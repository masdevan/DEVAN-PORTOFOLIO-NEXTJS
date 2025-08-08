'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { HeaderSettings } from '@/components/dashboard/header-settings'
import { HeroSettings } from '@/components/dashboard/hero-settings'
import { AboutSettings } from '@/components/dashboard/about-settings'
import { SkillsSettings } from '@/components/dashboard/skills-settings'
import { ProjectsSettings } from '@/components/dashboard/projects-settings'
import { FooterSettings } from '@/components/dashboard/footer-settings'
import { UserSettings } from '@/components/dashboard/user-settings'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('header')
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!loggedIn) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const renderContent = () => {
    switch (activeSection) {
      case 'header':
        return <HeaderSettings />
      case 'hero':
        return <HeroSettings />
      case 'about':
        return <AboutSettings />
      case 'skills':
        return <SkillsSettings />
      case 'projects':
        return <ProjectsSettings />
      case 'footer':
        return <FooterSettings />
      case 'user-settings':
        return <UserSettings />
      default:
        return <HeaderSettings />
    }
  }

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-[#111111] flex">
      <SidebarProvider>
        <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <SidebarInset className="bg-[#111111] flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-800 px-4 bg-[#111111]">
            <SidebarTrigger className="-ml-1 md:hidden text-white" />
            <Separator orientation="vertical" className="mr-2 h-4 md:hidden" />
            <h1 className="text-xl font-semibold text-white">Dashboard Settings</h1>
          </header>
          <div className="p-4 sm:p-6 md:p-8 bg-[#111111] min-h-full">
            {renderContent()}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
