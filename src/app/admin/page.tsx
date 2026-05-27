"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import Button from "@/components/ui/button"
import { Users, FileText, BookOpen, Briefcase, TrendingUp, Settings, LogOut, Menu, X, LayoutDashboard, ChevronRight } from "lucide-react"
import { siteConfig } from "@/lib/data"

const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", id: "dashboard" },
  { icon: <Briefcase className="w-5 h-5" />, label: "Careers", id: "careers" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Courses", id: "courses" },
  { icon: <FileText className="w-5 h-5" />, label: "Blog Posts", id: "blog" },
  { icon: <Users className="w-5 h-5" />, label: "Users", id: "users" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Analytics", id: "analytics" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings", id: "settings" },
]

const statsCards = [
  { label: "Total Users", value: "10,847", change: "+12%", color: "from-blue-500 to-blue-600" },
  { label: "Active Courses", value: "18", change: "+2", color: "from-secondary-500 to-secondary-600" },
  { label: "Career Paths", value: "16", change: "+4", color: "from-primary-500 to-primary-600" },
  { label: "Blog Posts", value: "8", change: "+3", color: "from-tertiary-500 to-tertiary-600" },
]

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        <aside className={`${sidebarOpen ? "w-64" : "w-16"} bg-white border-r border-gray-200 transition-all duration-300 hidden md:block`}>
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xs shrink-0">V</div>
              {sidebarOpen && <span className="font-bold text-gray-900">Admin Panel</span>}
            </div>
          </div>
          <nav className="p-2 space-y-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  activeTab === item.id
                    ? "bg-primary-50 text-primary-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-4 left-4 right-4">
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-gray-50 w-full transition-all">
              <LogOut className="w-5 h-5" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </aside>

        <div className="flex-1 overflow-y-auto">
          <header className="bg-white border-b border-gray-100 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-gray-600">
                  <Menu className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-gray-900 capitalize">{activeTab} Dashboard</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-500">{siteConfig.founder}</div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold">VS</div>
              </div>
            </div>
          </header>

          <div className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm"
                >
                  <div className="text-sm text-gray-500 mb-1">{card.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-sm text-emerald-600 font-medium mt-1">{card.change} this month</div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    { action: "New user registered", time: "2 min ago" },
                    { action: "Course updated: ChatGPT", time: "15 min ago" },
                    { action: "New blog published", time: "1 hour ago" },
                    { action: "Career path updated", time: "3 hours ago" },
                    { action: "New testimonial added", time: "5 hours ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{activity.action}</span>
                      <span className="text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Add Career", icon: "➕" },
                    { label: "New Course", icon: "📚" },
                    { label: "Write Blog", icon: "✍️" },
                    { label: "Manage Users", icon: "👥" },
                  ].map((action) => (
                    <button key={action.label} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition-all text-sm font-medium">
                      <span>{action.icon}</span> {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
