'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Settings, User, Info, Code, FolderOpen, Mail, Home, LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

interface DashboardSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const menuItems = [
  {
    id: 'header',
    title: 'Header Settings',
    icon: Settings,
  },
  {
    id: 'hero',
    title: 'Hero Section',
    icon: User,
  },
  {
    id: 'about',
    title: 'About Me',
    icon: Info,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: Code,
  },
  {
    id: 'projects',
    title: 'Featured Projects',
    icon: FolderOpen,
  },
  {
    id: 'footer',
    title: 'Footer & Contact',
    icon: Mail,
  },
  {
    id: 'user-settings',
    title: 'User Settings',
    icon: User,
  },
]

export function DashboardSidebar({ activeSection, setActiveSection }: DashboardSidebarProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  return (
    <Sidebar className="border-r border-gray-800 bg-[#161616]"> 
      <div className="flex items-center gap-2 border-b border-gray-800 pb-4 pt-[19px]">
        <h2 className="text-lg font-semibold text-white m-auto">Customize</h2>
      </div>
      <SidebarHeader className="px-4 pb-4 pt-3">
        <Link
          href="/"
          className="flex items-center gap-2 mt-4 text-sm text-gray-300 hover:text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Content Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeSection === item.id}
                    onClick={() => setActiveSection(item.id)}
                    className="text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarRail />
      <div className="p-4 border-t border-gray-800">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full border-gray-600 text-gray-200 bg-transparent hover:bg-gray-800 hover:text-white"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </Sidebar>
  )
}
