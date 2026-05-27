import HeroSection from "@/components/home/hero"
import StatsSection from "@/components/home/stats-section"
import TrendingCareers from "@/components/home/trending-careers"
import SalaryInsights from "@/components/home/salary-insights"
import FreelancingPreview from "@/components/home/freelancing-preview"
import AIToolsPreview from "@/components/home/ai-tools-preview"
import Testimonials from "@/components/home/testimonials"
import BlogPreview from "@/components/home/blog-preview"
import FAQSection from "@/components/home/faq-section"
import NewsletterSection from "@/components/home/newsletter"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TrendingCareers />
      <SalaryInsights />
      <FreelancingPreview />
      <AIToolsPreview />
      <Testimonials />
      <BlogPreview />
      <FAQSection />
      <NewsletterSection />
    </>
  )
}
