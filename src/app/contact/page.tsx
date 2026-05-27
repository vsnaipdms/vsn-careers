"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import Button from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { Phone, Mail, Globe, Linkedin, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setSubmitted(true)
    }
  }

  return (
    <Section className="pt-28 md:pt-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Contact Us"
          title="Get in Touch with VSN Careers"
          description="Have questions about your career path? Ready to start learning? We're here to help."
          center
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Call / WhatsApp", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { icon: <Globe className="w-5 h-5" />, label: "Website", value: "venkatshyamn.com", href: siteConfig.contact.website },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "Venkat Shyam.N", href: siteConfig.contact.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-primary-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-100 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-semibold text-gray-900">{item.value}</div>
                  </div>
                </a>
              ))}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center text-gray-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold text-gray-900">India (Primary) | Global Reach</div>
                  <div className="text-sm text-gray-500 mt-1">Serving students and professionals worldwide</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">📞 Free Career Consultation</h3>
              <p className="text-white/80 text-sm mb-4">Get personalized career guidance from our founder. Reach out via call or WhatsApp.</p>
              <a href={`https://wa.me/919949994082`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent! 🎉</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h3>
                  <p className="text-sm text-gray-500 mb-4">Fill out the form and we'll respond promptly.</p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                      placeholder="Tell us about your career goals or questions..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
