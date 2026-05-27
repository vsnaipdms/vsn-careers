"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { AnimatedCard, CardIcon } from "@/components/ui/animated-card"
import { freelancingTopics } from "@/lib/data"
import { CheckCircle, TrendingUp } from "lucide-react"

export default function FreelancingPage() {
  return (
    <>
      <Section className="pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Freelancing Hub"
            title="Build a Thriving Freelance Career"
            description="Complete guidance on starting, growing, and scaling your freelancing business in the digital economy."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {freelancingTopics.map((topic, i) => (
              <AnimatedCard key={topic.id} delay={i * 0.05} glow>
                <CardIcon icon={topic.icon} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{topic.description}</p>
                <div className="text-sm font-semibold text-primary-600 mb-3">{topic.income}</div>
                <div className="space-y-1.5">
                  {topic.tips.slice(0, 4).map((tip) => (
                    <div key={tip} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Freelancing Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of Indian freelancers earning from global clients. Get started with our comprehensive freelancing guide.
            </p>
            <div className="flex items-center justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">₹30K+</div>
                <div className="text-white/70 text-sm">Starting Monthly</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold">₹5L+</div>
                <div className="text-white/70 text-sm">Top Monthly</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-white/70 text-sm">Remote Freedom</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Platforms to Start Freelancing"
            description="Top platforms where Indian freelancers are earning in dollars and building global careers."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Fiverr", desc: "Best for services starting at $5. Ideal for graphic design, writing, marketing.", earn: "₹10K - ₹5L/month", color: "#1DBF73" },
              { name: "Upwork", desc: "Best for professional services. Higher rates, long-term contracts.", earn: "₹20K - ₹10L/month", color: "#14A800" },
              { name: "LinkedIn", desc: "Best for B2B services, consulting, and personal branding.", earn: "₹15K - ₹8L/month", color: "#0A66C2" },
            ].map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4"
                  style={{ background: platform.color }}>
                  {platform.name[0]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{platform.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                  <TrendingUp className="w-4 h-4" /> {platform.earn}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
