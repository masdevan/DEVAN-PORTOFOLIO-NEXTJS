import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const skills = [
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      image: "/modern-ecommerce-interface.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/task-management-dashboard.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design, animations, and content management system.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity"],
      image: "/modern-portfolio-website.png",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with location-based forecasts and interactive maps.",
      tech: ["Vue.js", "Python", "FastAPI", "OpenWeather API"],
      image: "/weather-dashboard-interface.png",
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <Footer />
    </div>
  )
}
