import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiClock,
  FiStar,
  FiUser,
  FiUsers,
  FiZap,
  FiChevronDown,
} from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton } from '@components/ui/Button.jsx';
import { fadeIn, slideLeft, slideRight, slideUp, staggerContainer } from '@lib/animationPresets.js';

const statistics = [
  { value: '32+', label: 'Years of Teaching', icon: FiClock, accent: 'brand' },
  { value: '1000+', label: 'Students Guided', icon: FiUsers, accent: 'accent' },
  { value: 'A+', label: 'Excellent Board Results', icon: FiAward, accent: 'brand' },
  { value: 'JEE', label: 'JEE Preparation', icon: FiZap, accent: 'accent' },
];

const achievements = [
  {
    name: 'Aman Kumar',
    exam: 'Class X Board',
    result: '97.8%',
    achievement: 'Outstanding performance with strong conceptual clarity.',
    imageLabel: 'Student photo placeholder',
    accent: 'brand',
  },
  {
    name: 'Priya Singh',
    exam: 'Class XII Board',
    result: '96.4%',
    achievement: 'Excellent board result through consistent practice.',
    imageLabel: 'Student photo placeholder',
    accent: 'accent',
  },
  {
    name: 'Rahul Verma',
    exam: 'JEE Main',
    result: 'AIR 1245',
    achievement: 'Strong mathematics score backed by discipline and revision.',
    imageLabel: 'Student photo placeholder',
    accent: 'brand',
  },
  {
    name: 'Ananya Mishra',
    exam: 'Class X Board',
    result: '98.2%',
    achievement: 'Top-tier result from structured problem solving.',
    imageLabel: 'Student photo placeholder',
    accent: 'accent',
  },
  {
    name: 'Satyam Raj',
    exam: 'JEE Advanced',
    result: 'Qualified',
    achievement: 'Achieved success through focused preparation and mentoring.',
    imageLabel: 'Student photo placeholder',
    accent: 'brand',
  },
  {
    name: 'Neha Kumari',
    exam: 'Class XII Board',
    result: '95.9%',
    achievement: 'Steady growth and strong results from weekly tests.',
    imageLabel: 'Student photo placeholder',
    accent: 'accent',
  },
];

const successFeatures = [
  { title: 'Concept-Based Learning', icon: FiBookOpen },
  { title: 'Regular Practice', icon: FiCheck },
  { title: 'Weekly Tests', icon: FiClock },
  { title: 'Personal Guidance', icon: FiUser },
];

const testimonials = [
  {
    name: 'Aman Kumar',
    quote:
      'The small batch size and concept-based teaching helped me improve my confidence in mathematics.',
  },
  {
    name: 'Priya Singh',
    quote:
      'Weekly tests and personal guidance made it easy to stay consistent and score better in exams.',
  },
  {
    name: 'Rahul Verma',
    quote:
      'The teaching style is structured, clear, and very supportive for competitive exam preparation.',
  },
];

const faqs = [
  {
    question: 'How can I take admission?',
    answer:
      'You can apply through the admission page or contact the institute directly for guidance on the process.',
  },
  {
    question: 'Which classes are available?',
    answer:
      'The institute supports school-level mathematics and competitive exam preparation for selected batches.',
  },
  {
    question: 'Do you prepare students for JEE?',
    answer:
      'Yes, the curriculum includes focused mathematics preparation for JEE Main and JEE Advanced.',
  },
  {
    question: 'Why is the batch size limited to 20 students?',
    answer:
      'A smaller batch ensures better personal attention, stronger mentoring, and a disciplined environment.',
  },
];

function StatCard({ stat, index }) {
  const Icon = stat.icon;
  const iconBg =
    stat.accent === 'accent'
      ? 'bg-accent-50 text-accent-600 dark:bg-accent-950/40 dark:text-accent-300'
      : 'bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300';

  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="h-full hover-lift">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-5 font-display text-4xl font-bold text-slate-950 dark:text-white">
          {stat.value}
        </p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
          {stat.label}
        </p>
      </Card>
    </motion.div>
  );
}

function AchievementCard({ item, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.22 }}
    >
      <Card className="h-full overflow-hidden p-0 hover-lift">
        <div className="p-4 sm:p-5">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-slate-900">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                item.accent === 'accent'
                  ? 'from-accent-500/30 via-white/10 to-brand-500/20'
                  : 'from-brand-500/30 via-white/10 to-accent-500/20'
              } opacity-90 transition duration-500 group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_32%)] opacity-75" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="glass-panel w-full p-4 backdrop-blur-xl">
                <Badge variant={item.accent === 'accent' ? 'warning' : 'brand'}>{item.imageLabel}</Badge>
                <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">
                  Premium student image placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{item.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                {item.exam}
              </p>
            </div>
            <Badge variant={item.accent === 'accent' ? 'warning' : 'brand'}>{item.result}</Badge>
          </div>
          <p className="mt-4 text-sm leading-7">{item.achievement}</p>
        </div>
      </Card>
    </motion.div>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-full hover-lift">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{feature.title}</h3>
      </Card>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-full hover-lift">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
            <FiUser className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">{testimonial.name}</h3>
            <div className="mt-1 flex items-center gap-1 text-accent-500" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <FiStar key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-7">{testimonial.quote}</p>
      </Card>
    </motion.div>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <Card className="p-0 overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-slate-950 dark:text-white">{faq.question}</span>
        <FiChevronDown
          className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180 text-brand-600 dark:text-brand-300' : 'text-slate-400'}`}
          aria-hidden="true"
        />
      </button>
      {isOpen ? (
        <div className="px-6 pb-5 text-sm leading-7">{faq.answer}</div>
      ) : null}
    </Card>
  );
}

export function ResultsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Helmet>
        <title>Results & Achievements | MEGAMIND CLASSES</title>
        <meta
          name="description"
          content="Celebrating the success of our students through dedication, conceptual learning, and consistent practice."
        />
      </Helmet>

      <section aria-labelledby="results-hero-title">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%)]" />
            <motion.div {...slideUp} className="relative mx-auto max-w-3xl space-y-6 text-center">
              <Badge variant="brand" className="mx-auto w-fit">
                Results & Achievements
              </Badge>
              <div className="space-y-4">
                <h1
                  id="results-hero-title"
                  className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Results & Achievements
                </h1>
                <p className="text-lg leading-8 sm:text-xl">
                  Celebrating the success of our students through dedication, conceptual learning,
                  and consistent practice.
                </p>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </section>

      <Section aria-labelledby="results-stat-title">
        <Container>
          <SectionHeader
            eyebrow="Success Statistics"
            title="Performance that speaks for itself"
            description="A snapshot of teaching legacy, reach, and exam preparation outcomes."
          />
          <h2 id="results-stat-title" className="sr-only">
            Success statistics
          </h2>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            {statistics.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="results-achievement-title">
        <Container>
          <SectionHeader
            eyebrow="Student Achievements"
            title="Success stories from our classroom"
            description="Six premium placeholder cards showcasing exam results and achievements."
          />
          <h2 id="results-achievement-title" className="sr-only">
            Student achievements
          </h2>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {achievements.map((item, index) => (
              <AchievementCard key={item.name} item={item} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="results-feature-title">
        <Container>
          <SectionHeader
            eyebrow="Why Our Students Succeed"
            title="The habits behind the results"
            description="Four simple principles that keep students progressing consistently."
          />
          <h2 id="results-feature-title" className="sr-only">
            Why our students succeed
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {successFeatures.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="results-testimonial-title">
        <Container>
          <SectionHeader
            eyebrow="Testimonials"
            title="What students say about learning here"
            description="Three short testimonials that reinforce confidence in the teaching experience."
            align="center"
          />
          <h2 id="results-testimonial-title" className="sr-only">
            Testimonials
          </h2>
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="results-faq-title">
        <Container>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Quick answers before you explore more"
            description="Expandable cards covering common questions about results and admissions."
            align="center"
          />
          <h2 id="results-faq-title" className="sr-only">
            Frequently asked questions
          </h2>
          <div className="grid gap-4 lg:mx-auto lg:max-w-4xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="results-cta-title">
        <Container>
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_30%)]" />
            <motion.div {...slideRight} className="relative flex flex-col items-center gap-8 text-center">
              <div className="max-w-2xl space-y-4">
                <Badge variant="brand" className="mx-auto w-fit">
                  Admission Open
                </Badge>
                <h2
                  id="results-cta-title"
                  className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Become Our Next Success Story
                </h2>
                <p className="text-base leading-8 sm:text-lg">Admissions are open for new batches.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton as="a" href="/admission" className="group">
                  Apply for Admission
                  <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                </PrimaryButton>
                <SecondaryButton as="a" href="/contact">
                  Contact Us
                </SecondaryButton>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </Section>
    </>
  );
}
