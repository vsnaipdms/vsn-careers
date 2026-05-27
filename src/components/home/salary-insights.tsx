"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { motion } from "framer-motion"
import { salaryData } from "@/lib/data"
import { formatCurrency } from "@/lib/utils"
import { TrendingUp, IndianRupee, DollarSign, MapPin } from "lucide-react"

export default function SalaryInsights() {
  const topSalaries = salaryData.slice(0, 6)

  return (
    <Section className="bg-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Salary Insights"
          title="Know Your Worth in India & Globally"
          description="Compare salaries across roles, experience levels, and countries. Make informed career decisions with real market data."
        />
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-12 gap-2 mb-2 px-4">
              <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">India Fresher</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">India Exp.</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">USA</div>
              <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Growth</div>
              <div className="col-span-1 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Remote</div>
            </div>
            {topSalaries.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-12 gap-2 items-center p-4 mb-1 rounded-xl bg-white border border-gray-100 hover:border-primary-100 hover:shadow-md transition-all"
              >
                <div className="col-span-3 font-semibold text-sm text-gray-900">{item.role}</div>
                <div className="col-span-2 text-sm font-medium text-green-600 text-right">{formatCurrency(item.indiaFresher)}</div>
                <div className="col-span-2 text-sm font-medium text-primary-600 text-right">{formatCurrency(item.indiaExperienced)}</div>
                <div className="col-span-2 text-sm font-medium text-blue-600 text-right">{formatCurrency(item.usSalary, "USD")}</div>
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
  )
}
