"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/data"

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "Career Paths", href: "/careers" },
    { label: "Courses", href: "/courses" },
    { label: "AI Tools Hub", href: "/ai-tools" },
    { label: "Freelancing Hub", href: "/freelancing" },
    { label: "Salary Insights", href: "/jobs" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  "Career Categories": [
    { label: "Graphic Design", href: "/careers/graphic-designer" },
    { label: "UI/UX Design", href: "/careers/ui-ux-designer" },
    { label: "Web Design", href: "/careers/web-designer" },
    { label: "Digital Marketing", href: "/careers/digital-marketer" },
    { label: "Performance Marketing", href: "/careers/performance-marketer" },
    { label: "SEO", href: "/careers/seo-specialist" },
    { label: "AI Content Strategy", href: "/careers/ai-content-strategist" },
    { label: "Freelancing", href: "/careers/freelancer" },
  ],
  "Popular Courses": [
    { label: "Photoshop", href: "/courses/photoshop" },
    { label: "Canva", href: "/courses/canva" },
    { label: "Figma", href: "/courses/figma" },
    { label: "SEO", href: "/courses/seo" },
    { label: "Google Ads", href: "/courses/google-ads" },
    { label: "AI Tools", href: "/courses/ai-tools" },
    { label: "ChatGPT", href: "/courses/chatgpt" },
    { label: "Performance Marketing", href: "/courses/performance-marketing" },
  ],
  "AI Tools": [
    { label: "ChatGPT", href: "/ai-tools#chatgpt" },
    { label: "Midjourney", href: "/ai-tools#midjourney" },
    { label: "Adobe Firefly", href: "/ai-tools#adobe-firefly" },
    { label: "Canva AI", href: "/ai-tools#canva-ai" },
    { label: "Jasper AI", href: "/ai-tools#jasper-ai" },
    { label: "Claude", href: "/ai-tools#claude" },
    { label: "Runway ML", href: "/ai-tools#runway-ml" },
    { label: "GitHub Copilot", href: "/ai-tools#github-copilot" },
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold">
                V
              </div>
              <div>
                <span className="font-bold text-lg text-white">VSN</span>
                <span className="text-lg text-primary-400 font-semibold ml-0.5">Careers</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Build your future with digital skills & AI. India&apos;s premier career guidance platform for digital careers, freelancing, and AI-powered opportunities.
            </p>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>India (Primary) | Serving Global Audience</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).slice(0, 4).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm text-white mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} VSN Careers. All rights reserved. Built with passion by {siteConfig.founder}.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "LinkedIn", href: siteConfig.social.linkedin, color: "hover:text-blue-400" },
                { label: "Instagram", href: siteConfig.social.instagram, color: "hover:text-pink-400" },
                { label: "YouTube", href: siteConfig.social.youtube, color: "hover:text-red-400" },
                { label: "WhatsApp", href: siteConfig.social.whatsapp, color: "hover:text-green-400" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all hover:bg-gray-700 hover:scale-110`}
                  title={social.label}
                >
                  <span className="text-xs font-bold">{social.label[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
