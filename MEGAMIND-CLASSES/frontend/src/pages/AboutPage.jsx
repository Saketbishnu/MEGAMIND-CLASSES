import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiHeart,
  FiTarget,
  FiUser,
  FiUsers,
} from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton } from '@components/ui/Button.jsx';
import { fadeIn, scaleIn, slideLeft, slideRight, slideUp, staggerContainer } from '@lib/animationPresets.js';

const directorStats = [
  { value: 32, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Students Guided' },
  { label: 'Maximum 20 Students Per Batch', text: '20' },
  { label: 'JEE Foundation & Advanced', text: 'JEE' },
];

const timelineEvents = [
  {
    year: '1988',
    title: 'Completed M.Sc. Mathematics',
    description: 'Completed M.Sc. Mathematics from Patna University.',
  },
  {
    title: 'Started Teaching Career',
    description: 'Began a dedicated journey in mathematics education.',
  },
  {
    title: 'Built a Successful Coaching Institute',
    description: 'Built a successful coaching institute in Patna.',
  },
  {
    title: '32+ Years of Teaching Excellence',
    description: 'Three decades of disciplined, concept-first classroom teaching.',
  },
  {
    title: 'Returned to Deoghar',
    description: 'Returned to Deoghar to serve the local student community.',
  },
  {
    title: 'Established MEGAMIND CLASSES',
    description: 'Founded MEGAMIND CLASSES with a focus on small batches and personal mentoring.',
  },
];

const philosophyCards = [
  {
    icon: FiBookOpen,
    title: 'Concept-Based Learning',
    description: 'Every topic should be understood deeply rather than memorized.',
  },
  {
    icon: FiUsers,
    title: 'Individual Attention',
    description: 'Small batch size ensures every student receives personal guidance.',
  },
  {
    icon: FiAward,
    title: 'Discipline',
    description: 'Maintain a focused, respectful, and motivating classroom.',
  },
  {
    icon: FiHeart,
    title: 'Healthy Learning Environment',
    description: 'Create a positive atmosphere where students enjoy learning.',
  },
];

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
        return;
      }
      setCount(Math.round(current));
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span className="font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

function DirectorImagePlaceholder() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 shadow-card dark:border-slate-800"
      {...scaleIn}
      role="img"
      aria-label="Professional portrait placeholder for Director Pradyot Singh"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
      <motion.div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-500/40 to-transparent"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-[480px] flex-col items-center justify-center gap-6 p-8">
        <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md">
          <FiUser className="h-16 w-16 text-white/60" aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className="font-display text-xl font-bold text-white">Pradyot Singh</p>
          <p className="mt-1 text-sm text-white/70">Director, MEGAMIND CLASSES</p>
        </div>
        <Badge variant="success" className="w-fit">
          M.Sc. Mathematics
        </Badge>
      </div>
    </motion.div>
  );
}

function TimelineConnector() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <div className="flex flex-col items-center gap-1">
        <span className="h-6 w-px bg-brand-400/60 dark:bg-brand-500/50" />
        <span className="text-brand-500 dark:text-brand-400">↓</span>
        <span className="h-6 w-px bg-brand-400/60 dark:bg-brand-500/50" />
      </div>
    </div>
  );
}

function PhilosophyCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="h-full hover-lift">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-7">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | MEGAMIND CLASSES</title>
        <meta
          name="description"
          content="Learn about Director Pradyot Singh, the teaching philosophy, journey, and mission of MEGAMIND CLASSES — building strong mathematical foundations since 1994."
        />
      </Helmet>

      {/* 1. Hero Banner */}
      <section aria-labelledby="about-hero-title">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_28%)]" />

            <motion.div {...slideUp} className="relative mx-auto max-w-3xl space-y-6 text-center">
              <Badge variant="info" className="mx-auto w-fit">
                Our Story
              </Badge>
              <div className="space-y-4">
                <h1
                  id="about-hero-title"
                  className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  About MEGAMIND CLASSES
                </h1>
                <p className="text-lg leading-8 sm:text-xl">
                  Building Strong Mathematical Foundations Since 1994
                </p>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </section>

      {/* 2. Director Section */}
      <Section aria-labelledby="director-section-title">
        <Container>
          <SectionHeader
            eyebrow="Director"
            title="Meet Pradyot Singh"
            description="A distinguished mathematics educator with over three decades of experience shaping young minds."
          />

          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...slideRight} className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                  Director
                </p>
                <h2
                  id="director-section-title"
                  className="mt-2 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl"
                >
                  Pradyot Singh
                </h2>
              </div>

              <Card>
                <ul className="space-y-3" aria-label="Director qualifications and details">
                  {[
                    'M.Sc. Mathematics',
                    'Patna Science College',
                    'Patna University',
                    '32+ Years Teaching Experience',
                    'Teaching Mathematics for Classes XI & XII',
                    'English Medium',
                    'Maximum 20 Students Per Batch',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <motion.div
                className="grid gap-4 sm:grid-cols-2"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                aria-label="Director statistics"
              >
                {directorStats.map((stat, index) => (
                  <motion.div key={stat.label} variants={index % 2 === 0 ? slideUp : fadeIn}>
                    <Card className="h-full">
                      <div className="space-y-2">
                        {'value' in stat ? (
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        ) : (
                          <span className="font-display text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
                            {stat.text}
                          </span>
                        )}
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                          {stat.label}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <DirectorImagePlaceholder />
          </div>
        </Container>
      </Section>

      {/* 3. Journey Timeline */}
      <Section aria-labelledby="timeline-section-title">
        <Container>
          <SectionHeader
            eyebrow="Journey"
            title="A Legacy of Teaching Excellence"
            description="From academic foundations in Patna to establishing MEGAMIND CLASSES in Deoghar."
            align="center"
          />

          <motion.ol
            className="mx-auto max-w-xl"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            aria-labelledby="timeline-section-title"
          >
            {timelineEvents.map((event, index) => (
              <li key={event.title}>
                <motion.div variants={slideUp}>
                  <Card className="text-center">
                    {event.year ? (
                      <p className="mb-2 font-display text-2xl font-bold text-brand-600 dark:text-brand-300">
                        {event.year}
                      </p>
                    ) : null}
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">{event.title}</h3>
                    <p className="mt-2 text-sm leading-7">{event.description}</p>
                  </Card>
                </motion.div>
                {index < timelineEvents.length - 1 ? <TimelineConnector /> : null}
              </li>
            ))}
          </motion.ol>
        </Container>
      </Section>

      {/* 4. Teaching Philosophy */}
      <Section aria-labelledby="philosophy-section-title">
        <Container>
          <SectionHeader
            eyebrow="Teaching Philosophy"
            title="How We Teach Mathematics"
            description="Four principles that guide every classroom session at MEGAMIND CLASSES."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {philosophyCards.map((item, index) => (
              <PhilosophyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Vision & Mission */}
      <Section aria-labelledby="vision-mission-title">
        <Container>
          <SectionHeader
            eyebrow="Purpose"
            title="Vision & Mission"
            description="The guiding principles behind everything we do at MEGAMIND CLASSES."
            align="center"
          />

          <div id="vision-mission-title" className="grid gap-6 lg:grid-cols-2">
            <motion.div {...slideRight}>
              <Card className="h-full glass-panel">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
                    <FiTarget className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Vision</h3>
                    <p className="mt-3 text-base leading-8">
                      To build students with strong mathematical concepts, confidence, and analytical
                      thinking.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div {...slideLeft}>
              <Card className="h-full glass-panel">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 dark:bg-accent-950/40 dark:text-accent-300">
                    <FiHeart className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Mission</h3>
                    <p className="mt-3 text-base leading-8">
                      Provide quality mathematics education through conceptual teaching, disciplined
                      learning, and personal mentoring.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 6. Call To Action */}
      <Section aria-labelledby="cta-section-title">
        <Container>
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_30%)]" />

            <motion.div
              {...slideUp}
              className="relative flex flex-col items-center gap-8 text-center"
            >
              <div className="max-w-2xl space-y-4">
                <Badge variant="info" className="mx-auto w-fit">
                  Admission Open
                </Badge>
                <h2
                  id="cta-section-title"
                  className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Ready to Start Your Journey?
                </h2>
                <p className="text-base leading-8 sm:text-lg">
                  Join MEGAMIND CLASSES for focused mathematics coaching with personal attention
                  and a disciplined learning environment.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton as="a" href="/#admission" className="group">
                  Apply for Admission
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
