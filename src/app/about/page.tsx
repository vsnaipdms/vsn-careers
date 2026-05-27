"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { siteConfig } from "@/lib/data"
import { Target, Eye, Heart, Lightbulb, Users, Rocket, Award, Globe } from "lucide-react"

const values = [
  { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", desc: "We stay at the forefront of AI and digital trends to provide cutting-edge career guidance." },
  { icon: <Users className="w-6 h-6" />, title: "Student First", desc: "Every resource, course, and tool is designed with our students' success in mind." },
  { icon: <Award className="w-6 h-6" />, title: "Quality", desc: "We maintain the highest standards in our content, guidance, and platform experience." },
  { icon: <Globe className="w-6 h-6" />, title: "Global Reach", desc: "Indian roots with a global perspective. Preparing talent for the international market." },
]

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 md:pt-36">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="About Us"
            title="Empowering Careers with Digital Skills & AI"
            description="VSN Careers is a premium AI-powered career guidance platform founded by Venkat Shyam.N, dedicated to helping students and professionals build high-income digital careers."
            center
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At VSN Careers, we believe that the future of work is digital, and everyone deserves access to quality career guidance and skill development. Our platform bridges the gap between traditional education and the rapidly evolving digital economy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We provide structured learning paths, expert guidance, and AI-powered tools to help you build a successful career in graphic design, web design, digital marketing, performance marketing, and AI-powered professions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {values.map((v, i) => (
              <AnimatedCard key={v.title} delay={i * 0.1}>
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Founder</h2>
            <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
              VS
            </div>
            <h3 className="text-xl font-bold mb-1">{siteConfig.founder}</h3>
            <p className="text-white/80 mb-4">Founder, VSN Careers</p>
            <p className="text-white/70 max-w-lg mx-auto text-sm">
              Passionate about empowering the next generation of digital professionals with the skills, tools, and guidance they need to succeed in the AI-driven economy.
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
