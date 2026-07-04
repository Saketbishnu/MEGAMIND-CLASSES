import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiClipboard,
  FiLayers,
  FiTarget,
  FiUserCheck,
  FiUsers,
  FiZap,
} from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton } from '@components/ui/Button.jsx';
import { fadeIn, slideUp, staggerContainer } from '@lib/animationPresets.js';

const courses = [
  {
    number: 1,
    title: 'Pre Foundation',
    classes: 'IX & X',
    description:
      'Build strong mathematical concepts from school level and prepare students for higher education.',
    features: [
      'Concept-Based Learning',
      'Weekly Tests',
      'Doubt Sessions',
      'Small Batch Size',
    ],
    icon: FiLayers,
    accent: 'brand',
  },
  {
    number: 2,
    title: 'Foundation',
    classes: 'XI & XII',
    description: 'Complete preparation for Board examinations with conceptual mathematics.',
    features: [
      'Board Preparation',
      'Advanced Problem Solving',
      'Regular Practice',
      'Individual Attention',
    ],
    icon: FiBookOpen,
    accent: 'brand',
  },
  {
    number: 3,
    title: 'JEE Main',
    description: 'Focused preparation for JEE Main Mathematics.',
    features: ['PYQ Practice', 'Mock Tests', 'Time Management', 'Shortcuts & Tricks'],
    icon: FiZap,
    accent: 'accent',
  },
  {
    number: 4,
    title: 'JEE Advanced',
    description: 'High-level problem-solving and concept mastery for JEE Advanced.',
    features: [
      'Advanced Questions',
      'Concept Building',
      'Personalized Guidance',
      'Limited Batch',
    ],
    icon: FiAward,
    accent: 'accent',
  },
];

const whyStudyFeatures = [
  { icon: FiAward, title: '32+ Years Experience' },
  { icon: FiUsers, title: 'Maximum 20 Students Per Batch' },
  { icon: FiBookOpen, title: 'English Medium' },
  { icon: FiClipboard, title: 'Regular Tests' },
  { icon: FiTarget, title: 'Concept-Based Learning' },
  { icon: FiUserCheck, title: 'Personal Guidance' },
];

const learningSteps = [
  'Admission',
  'Concept Learning',
  'Practice',
  'Weekly Test',
  'Revision',
  'Success',
];

function CourseCard({ course, index }) {
  const Icon = course.icon;
  const iconBg =
    course.accent === 'accent'
      ? 'bg-accent-50 text-accent-600 dark:bg-accent-950/40 dark:text-accent-300'
      : 'bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300';

  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Card className="flex h-full flex-col hover-lift">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg}`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <Badge variant="brand">Course {course.number}</Badge>
        </div>

        <h3 className="text-2xl font-bold text-slate-950 dark:text-white">{course.title}</h3>

        {course.classes ? (
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
            Classes: {course.classes}
          </p>
        ) : null}

        <p className="mt-4 flex-1 text-sm leading-7">{course.description}</p>

        <ul className="mt-6 space-y-2 border-t border-slate-200 pt-5 dark:border-slate-800" aria-label={`${course.title} features`}>
          {course.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
              <FiCheck className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

function WhyStudyCard({ icon: Icon, title, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-full text-center hover-lift">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-4 font-semibold text-slate-950 dark:text-white">{title}</p>
      </Card>
    </motion.div>
  );
}

function ProcessConnector({ orientation = 'horizontal' }) {
  if (orientation === 'horizontal') {
    return (
      <div className="hidden shrink-0 items-center px-1 lg:flex" aria-hidden="true">
        <span className="text-brand-500 dark:text-brand-400">→</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-2 lg:hidden" aria-hidden="true">
      <div className="flex flex-col items-center gap-1">
        <span className="h-4 w-px bg-brand-400/60 dark:bg-brand-500/50" />
        <span className="text-brand-500 dark:text-brand-400">↓</span>
        <span className="h-4 w-px bg-brand-400/60 dark:bg-brand-500/50" />
      </div>
    </div>
  );
}

export function CoursesPage() {
  return (
    <>
      <Helmet>
        <title>Courses | MEGAMIND CLASSES</title>
        <meta
          name="description"
          content="Explore mathematics courses at MEGAMIND CLASSES — Pre Foundation, Foundation, JEE Main, and JEE Advanced programs."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <section aria-labelledby="courses-hero-title">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_28%)]" />

            <motion.div {...slideUp} className="relative mx-auto max-w-3xl space-y-6 text-center">
              <Badge variant="brand" className="mx-auto w-fit">
                Programs
              </Badge>
              <div className="space-y-4">
                <h1
                  id="courses-hero-title"
                  className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Courses
                </h1>
                <p className="text-lg leading-8 sm:text-xl">
                  Choose the right mathematics program for your academic journey.
                </p>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </section>

      {/* 2. Courses Grid */}
      <Section aria-labelledby="courses-grid-title">
        <Container>
          <SectionHeader
            eyebrow="Our Programs"
            title="Mathematics Courses"
            description="Structured programs designed for school foundations, board excellence, and competitive exam success."
          />

          <h2 id="courses-grid-title" className="sr-only">
            Available courses
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Why Study at MEGAMIND? */}
      <Section aria-labelledby="why-study-title">
        <Container>
          <SectionHeader
            eyebrow="Why MEGAMIND"
            title="Why Study at MEGAMIND?"
            description="A disciplined, concept-first approach backed by decades of teaching experience."
            align="center"
          />

          <h2 id="why-study-title" className="sr-only">
            Why study at MEGAMIND CLASSES
          </h2>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby="why-study-title"
          >
            {whyStudyFeatures.map((item, index) => (
              <WhyStudyCard key={item.title} {...item} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* 4. Learning Process */}
      <Section aria-labelledby="learning-process-title">
        <Container>
          <SectionHeader
            eyebrow="Learning Process"
            title="Your Path to Success"
            description="A structured journey from admission to achievement."
            align="center"
          />

          <h2 id="learning-process-title" className="sr-only">
            Learning process steps
          </h2>

          <motion.ol
            className="flex flex-col items-stretch lg:flex-row lg:items-center lg:justify-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby="learning-process-title"
          >
            {learningSteps.map((step, index) => (
              <li key={step} className="flex flex-col items-center lg:flex-row">
                <motion.div variants={slideUp} className="w-full lg:w-auto">
                  <Card className="glass-panel min-w-[9rem] px-5 py-4 text-center">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">{step}</p>
                  </Card>
                </motion.div>
                {index < learningSteps.length - 1 ? (
                  <>
                    <ProcessConnector orientation="vertical" />
                    <ProcessConnector orientation="horizontal" />
                  </>
                ) : null}
              </li>
            ))}
          </motion.ol>
        </Container>
      </Section>

      {/* 5. CTA */}
      <Section aria-labelledby="courses-cta-title">
        <Container>
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_30%)]" />

            <motion.div
              {...slideUp}
              className="relative flex flex-col items-center gap-8 text-center"
            >
              <div className="max-w-2xl space-y-4">
                <Badge variant="brand" className="mx-auto w-fit">
                  Admission Open
                </Badge>
                <h2
                  id="courses-cta-title"
                  className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Ready to Join MEGAMIND CLASSES?
                </h2>
                <p className="text-base leading-8 sm:text-lg">
                  Take the first step toward strong mathematical foundations and competitive exam
                  success.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton as="a" href="/#admission" className="group">
                  Apply Now
                  <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                </PrimaryButton>
                <SecondaryButton as="a" href="/#contact">
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
