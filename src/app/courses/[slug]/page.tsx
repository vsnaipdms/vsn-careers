"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Button from "@/components/ui/button"
import { courses } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Clock, BookOpen, FolderKanban, Award, Briefcase, GraduationCap } from "lucide-react"

export default function CourseDetailPage() {
  const params = useParams()
  const course = courses.find((c) => c.slug === params.slug)

  if (!course) {
    return (
      <Section className="pt-28 md:pt-36">
        <div className="max-w-3xl mx-auto px-4 text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <Link href="/courses" className="text-primary-600 font-semibold">← Back to Courses</Link>
        </div>
      </Section>
    )
  }

  return (
    <>
      <Section className="pt-28 md:pt-36 pb-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-5xl">{course.icon}</span>
              <div>
                <Badge variant="info" className="mb-2">{course.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{course.title}</h1>
                <p className="text-lg text-gray-600">{course.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.lessons} Lessons</span>
              <span className="flex items-center gap-1"><FolderKanban className="w-4 h-4" /> {course.projects} Projects</span>
              <Badge variant="warning">{course.level}</Badge>
              {course.certification && <Badge variant="success">🎓 Certificate Included</Badge>}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Course</h2>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Roadmap</h2>
                <div className="space-y-6">
                  {course.roadmap.map((level, i) => (
                    <div key={level.title} className="relative pl-8 border-l-2 border-primary-200">
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{level.title}</h3>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Outcomes</h2>
                <div className="flex flex-wrap gap-2">
                  {course.careerOutcomes.map((outcome) => (
                    <span key={outcome} className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                      <GraduationCap className="w-3.5 h-3.5" /> {outcome}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Salary Opportunities</h2>
                <ul className="space-y-2">
                  {course.salaryOpportunities.map((opp) => (
                    <li key={opp} className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4 text-primary-500" /> {opp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-28">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{course.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary-50 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-secondary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Lessons</div>
                      <div className="font-semibold text-gray-900">{course.lessons} Lessons</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-tertiary-50 flex items-center justify-center">
                      <FolderKanban className="w-5 h-5 text-tertiary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Projects</div>
                      <div className="font-semibold text-gray-900">{course.projects} Projects</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Certificate</div>
                      <div className="font-semibold text-gray-900">{course.certification ? "Yes" : "No"}</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full">Enroll Now - Free</Button>
                  <Button variant="outline" className="w-full">Download Syllabus</Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
