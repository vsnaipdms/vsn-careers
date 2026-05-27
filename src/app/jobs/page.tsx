"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { salaryData } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { TrendingUp, IndianRupee, DollarSign, PoundSterling, MapPin, Briefcase, Brain, Shield } from "lucide-react"

export default function JobsPage() {
  return (
    <>
      <Section className="pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Salary Insights"
            title="Compare Salaries Across Careers & Countries"
            description="Make informed career decisions with real salary data for India, USA, UK, and Canada."
          />

          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-12 gap-2 p-4 bg-gray-50 border-b border-gray-100">
                <div className="col-span-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Role</div>
                <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">India</div>
                <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">USA</div>
                <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">UK</div>
                <div className="col-span-2 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Growth</div>
                <div className="col-span-1 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Remote</div>
              </div>
              {salaryData.map((item, i) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-12 gap-2 items-center p-4 border-b border-gray-50 hover:bg-primary-50/30 transition-colors"
                >
                  <div className="col-span-3 font-semibold text-sm text-gray-900">{item.role}</div>
                  <div className="col-span-2 text-sm font-medium text-right">
                    <span className="text-gray-900">{formatCurrency(item.indiaExperienced)}</span>
                    <span className="text-xs text-gray-400 block">Fresher: {formatCurrency(item.indiaFresher)}</span>
                  </div>
                  <div className="col-span-2 text-sm font-medium text-blue-600 text-right">{formatCurrency(item.usSalary, "USD")}</div>
                  <div className="col-span-2 text-sm font-medium text-purple-600 text-right">{formatCurrency(item.ukSalary, "GBP")}</div>
                  <div className="col-span-2 flex items-center justify-end gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-sm font-semibold text-emerald-600">{item.growthRate}%</span>
                  </div>
                  <div className="col-span-1 text-center">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                      item.remoteDemand === "high" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                    }`}>
                      {item.remoteDemand === "high" ? "High" : "Medium"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Market Insights"
            title="Digital Career Landscape in 2026"
            description="Understanding the job market, salary trends, and future-proof career strategies."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "Fresher vs Experienced",
                points: [
                  "Freshers earn ₹2.5-6 LPA in digital roles",
                  "3-5 years experience: ₹8-15 LPA",
                  "5+ years: ₹15-40 LPA+",
                  "AI skills add 30-50% premium"
                ]
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Job Impact",
                points: [
                  "AI creating 97M new jobs by 2026",
                  "85M jobs may be displaced",
                  "Net positive: 12M new jobs",
                  "AI skills most in-demand"
                ]
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Future-Proof Careers",
                points: [
                  "AI-related roles growing 30% YoY",
                  "Digital marketing up 15% annually",
                  "Freelancing economy growing 20%",
                  "Remote jobs increased 300% since 2020"
                ]
              }
            ].map((card, i) => (
              <AnimatedCard key={card.title} delay={i * 0.1}>
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
