import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiAward, FiBookOpen, FiUsers, FiZap } from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton } from '@components/ui/Button.jsx';
import { fadeIn, scaleIn, slideLeft, slideRight, slideUp, staggerContainer } from '@lib/animationPresets.js';

const stats = [
  { value: 32, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '', label: 'Maximum Students Per Batch' },
  { value: 1000, suffix: '+', label: 'Students Guided' },
  { label: 'JEE Preparation', text: 'JEE' },
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

function IllustrationPlaceholder() {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-950 p-6 shadow-card dark:border-slate-800"
      {...scaleIn}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
      <motion.div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-500/35 to-transparent"
        animate={{ opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex min-h-[420px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Badge variant="success">Mathematics</Badge>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/75">
            Premium Learning
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div className="glass-panel p-4" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Batch Size</p>
            <p className="mt-2 font-display text-3xl font-bold text-slate-950 dark:text-white">20</p>
          </motion.div>
          <motion.div className="glass-panel p-4" animate={{ y: [0, 8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Focus</p>
            <p className="mt-2 font-display text-3xl font-bold text-slate-950 dark:text-white">Concepts</p>
          </motion.div>
        </div>

        <div className="grid gap-3">
          <motion.div className="glass-panel flex items-center gap-3 p-4" animate={{ x: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
            <FiBookOpen className="h-5 w-5 text-brand-500" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Regular Concept Drills</p>
              <p className="text-xs">Focused problem solving and revision cycles</p>
            </div>
          </motion.div>
          <motion.div className="glass-panel flex items-center gap-3 p-4" animate={{ x: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <FiZap className="h-5 w-5 text-accent-500" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-slate-950 dark:text-white">Rapid Doubt Resolution</p>
              <p className="text-xs">Fast feedback for stronger performance</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutItem({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-semibold text-slate-950 dark:text-white">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>MEGAMIND CLASSES | Mathematics Education</title>
        <meta
          name="description"
          content="MEGAMIND CLASSES offers premium mathematics education with 32+ years of excellence."
        />
      </Helmet>

      <section id="home">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.1),transparent_28%)]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div {...slideRight} className="space-y-8">
                <Badge variant="info" className="w-fit">
                  Admission Open
                </Badge>
                <div className="space-y-5">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                    MEGAMIND CLASSES
                  </p>
                  <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                    32+ Years of Excellence in Mathematics Education
                  </h1>
                  <p className="max-w-2xl text-base leading-8 sm:text-lg">
                    Premium mathematics coaching built for disciplined learning, concept clarity,
                    and focused batch mentoring with an intentionally small class size.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton as="a" href="#admission" className="group">
                    Apply for Admission
                    <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </PrimaryButton>
                  <SecondaryButton as="a" href="#courses">
                    Explore Courses
                  </SecondaryButton>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['JEE Focused', 'Concept Based', 'English Medium', 'Small Batches'].map((item) => (
                    <span
                      key={item}
                      className="glass-panel px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              <IllustrationPlaceholder />
            </div>
          </HeroContainer>
        </Container>
      </section>

      <Section id="results">
        <Container>
          <SectionHeader
            eyebrow="Statistics"
            title="Track record that speaks in numbers"
            description="A compact presentation of the institute’s legacy, batch discipline, and student outcomes."
          />

          <motion.div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, index) => (
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
        </Container>
      </Section>

      <Section id="about">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <motion.div {...slideLeft}>
              <SectionHeader
                eyebrow="About Preview"
                title="Directed by Pradyot Singh"
                description="A concept-first mathematics institute with a compact, disciplined teaching model."
              />
            </motion.div>

            <motion.div {...slideUp}>
              <Card className="h-full">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                        Director
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                        Pradyot Singh
                      </h3>
                    </div>
                    <p className="text-sm leading-7">
                      M.Sc Mathematics, Patna Science College, Patna University, with 32+ years
                      of experience in mathematics education.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <AboutItem icon={FiAward} title="Qualification" description="M.Sc Mathematics" />
                    <AboutItem icon={FiBookOpen} title="Medium" description="English Medium" />
                    <AboutItem icon={FiUsers} title="Batch Size" description="Maximum 20 students" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:grid-cols-2">
                  <div className="glass-panel p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Teaching Approach
                    </p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                      Concept-based learning
                    </p>
                  </div>
                  <div className="glass-panel p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Experience
                    </p>
                    <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                      32+ years experience
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <SecondaryButton as="a" href="#contact">
                    Read More
                  </SecondaryButton>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section id="contact">
        <Container>
          <Card className="glass-panel">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">
                  Footer
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                  MEGAMIND CLASSES
                </h2>
                <p className="mt-2 text-sm">
                  Premium mathematics education with focused mentorship and a disciplined batch
                  structure.
                </p>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Public home page placeholder
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
