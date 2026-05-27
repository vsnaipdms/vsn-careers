"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Button from "@/components/ui/button"
import { careers } from "@/lib/data"
import Link from "next/link"
import {
  ArrowLeft, CheckCircle, Briefcase, IndianRupee, Globe, TrendingUp,
  Bot, Building2, BookOpen, Lightbulb, ExternalLink, Star
} from "lucide-react"

export default function CareerDetailPage() {
  const params = useParams()
  const career = careers.find((c) => c.slug === params.slug)

  if (!career) {
    return (
      <Section className="pt-28 md:pt-36">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Career not found</h2>
          <Link href="/careers" className="text-primary-600 font-semibold">← Back to Careers</Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      <Section className="pt-28 md:pt-36 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">{career.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{career.title}</h1>
                <p className="text-lg text-gray-600">{career.description}</p>
              </div>
            </div>
            <Badge variant={career.demandLevel === "high" ? "success" : "info"} className="text-sm px-4 py-1.5">
              {career.demandLevel === "high" ? "🔥 High Demand Career" : "📈 Rising Career"}
            </Badge>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Overview</h2>
                <p className="text-gray-600 leading-relaxed">{career.overview}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills Required</h2>
                <div className="flex flex-wrap gap-2">
                  {career.skillsRequired.map((skill) => (
                    <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">
                      <CheckCircle className="w-3.5 h-3.5" /> {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tools to Learn</h2>
                <div className="flex flex-wrap gap-2">
                  {career.toolsToLearn.map((tool) => (
                    <span key={tool} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Roadmap</h2>
                <div className="space-y-6">
                  {career.learningRoadmap.map((level, i) => (
                    <div key={level.level} className="relative pl-8 border-l-2 border-primary-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{level.level}</h3>
                      <ul className="space-y-1">
                        {level.topics.map((topic) => (
                          <li key={topic} className="text-gray-600 text-sm flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0" /> {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Impact & Tools</h2>
                <p className="text-gray-600 mb-4">{career.aiImpact}</p>
                <div className="flex flex-wrap gap-2">
                  {career.aiTools.map((tool) => (
                    <span key={tool} className="inline-flex items-center gap-1 px-3 py-1.5 bg-secondary-50 text-secondary-700 rounded-lg text-sm font-medium">
                      <Bot className="w-3.5 h-3.5" /> {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Companies Hiring</h2>
                <div className="flex flex-wrap gap-2">
                  {career.companiesHiring.map((company) => (
                    <span key={company} className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      <Building2 className="w-3.5 h-3.5" /> {company}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Examples</h2>
                <ul className="space-y-2">
                  {career.portfolioExamples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500" /> {example}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interview Tips</h2>
                <ul className="space-y-2">
                  {career.interviewTips.map((tip) => (
                    <li key={tip} className="flex items-center gap-2 text-gray-600">
                      <Lightbulb className="w-4 h-4 text-primary-500" /> {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 sticky top-28">
                <h3 className="font-bold text-gray-900 text-lg">Quick Info</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <IndianRupee className="w-4 h-4" /> Salary in India
                    </div>
                    <div className="font-bold text-gray-900">{career.salaryIndia}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <Globe className="w-4 h-4" /> Salary Abroad
                    </div>
                    <div className="font-bold text-gray-900">{career.salaryAbroad}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <TrendingUp className="w-4 h-4" /> Future Demand
                    </div>
                    <div className="text-sm text-gray-700">{career.futureDemand}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <Briefcase className="w-4 h-4" /> Freelancing Scope
                    </div>
                    <div className="text-sm text-gray-700">{career.freelancingScope}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                      <Globe className="w-4 h-4" /> Remote Jobs
                    </div>
                    <div className="text-sm text-gray-700">{career.remoteJobs}</div>
                  </div>
                </div>
                <Link href="/courses">
                  <Button className="w-full">Start Learning Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">Get Career Guidance</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
