import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiBookOpen,
  FiUsers,
  FiAward,
} from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton } from '@components/ui/Button.jsx';
import { fadeIn, slideLeft, slideUp, staggerContainer } from '@lib/animationPresets.js';

const categories = ['All', 'Classroom', 'Teaching', 'Events', 'Students', 'Achievements'];

const galleryItems = [
  { category: 'Classroom', caption: 'Structured board teaching with focused attention.', accent: 'brand' },
  { category: 'Teaching', caption: 'Concept-first explanation with clear step-by-step flow.', accent: 'accent' },
  { category: 'Students', caption: 'Small batches that support active problem solving.', accent: 'brand' },
  { category: 'Events', caption: 'Academic events that keep students engaged and motivated.', accent: 'accent' },
  { category: 'Achievements', caption: 'Results-oriented learning backed by disciplined preparation.', accent: 'brand' },
  { category: 'Classroom', caption: 'An environment built for concentration and consistency.', accent: 'accent' },
  { category: 'Teaching', caption: 'Live doubt resolution and guided practice sessions.', accent: 'brand' },
  { category: 'Students', caption: 'Learners collaborating with confidence and discipline.', accent: 'accent' },
  { category: 'Events', caption: 'Recognition moments that celebrate effort and progress.', accent: 'brand' },
  { category: 'Achievements', caption: 'Milestones that reflect strong fundamentals and focus.', accent: 'accent' },
  { category: 'Classroom', caption: 'Premium classroom setup with a calm academic feel.', accent: 'brand' },
  { category: 'Students', caption: 'Dedicated learners in a supportive mathematics setting.', accent: 'accent' },
];

const environmentCards = [
  {
    icon: FiBookOpen,
    title: 'Modern Teaching',
    description: 'Clear concept delivery supported by structured classroom presentation.',
  },
  {
    icon: FiUsers,
    title: 'Interactive Learning',
    description: 'A small-batch setup that keeps participation active and personal.',
  },
  {
    icon: FiAward,
    title: 'Small Batch Size',
    description: 'Focused attention for stronger learning outcomes and better confidence.',
  },
];

function GalleryPreview({ index, category, accent }) {
  const accentClass =
    accent === 'accent'
      ? 'from-accent-500/30 via-white/10 to-brand-500/20 dark:from-accent-500/20'
      : 'from-brand-500/30 via-white/10 to-accent-500/20 dark:from-brand-500/20';

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-900">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accentClass} opacity-90 transition duration-500 group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_32%)] opacity-75" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(45deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />

      <div className="absolute inset-0 flex items-end p-5">
        <div className="glass-panel w-full p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <Badge variant={accent === 'accent' ? 'warning' : 'brand'}>{category}</Badge>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">
            Premium placeholder image
          </p>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({ item, index }) {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideUp : fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden p-0 hover-lift">
        <div className="p-4 sm:p-5">
          <GalleryPreview index={index} category={item.category} accent={item.accent} />
        </div>
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge variant="default">{item.category}</Badge>
              <p className="mt-3 text-sm leading-7">{item.caption}</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function EnvironmentFeature({ icon: Icon, title, description, index }) {
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
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7">{description}</p>
      </Card>
    </motion.div>
  );
}

export function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery | MEGAMIND CLASSES</title>
        <meta
          name="description"
          content="A glimpse into MEGAMIND CLASSES classrooms, teaching moments, student activities, and achievements."
        />
      </Helmet>

      <section aria-labelledby="gallery-hero-title">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%)]" />
            <motion.div
              {...slideUp}
              className="relative mx-auto max-w-3xl space-y-6 text-center"
            >
              <Badge variant="brand" className="mx-auto w-fit">
                Gallery
              </Badge>
              <div className="space-y-4">
                <h1
                  id="gallery-hero-title"
                  className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Gallery
                </h1>
                <p className="text-lg leading-8 sm:text-xl">
                  A glimpse into our classrooms, learning environment, and student activities.
                </p>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </section>

      <Section aria-labelledby="gallery-categories-title">
        <Container>
          <SectionHeader
            eyebrow="Gallery Categories"
            title="Browse moments from MEGAMIND CLASSES"
            description="Filter buttons are presented for clarity and future interaction, but remain UI-only for now."
          />

          <h2 id="gallery-categories-title" className="sr-only">
            Gallery categories
          </h2>

          <div className="flex flex-wrap gap-3" role="toolbar" aria-label="Gallery categories">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                type="button"
                aria-pressed={index === 0}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${
                  index === 0
                    ? 'border-brand-500 bg-brand-600 text-white shadow-glow'
                    : 'border-slate-300 bg-white/80 text-slate-700 hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="gallery-grid-title">
        <Container>
          <SectionHeader
            eyebrow="Gallery Grid"
            title="Premium learning moments"
            description="Twelve responsive placeholder visuals with category badges and short captions."
          />

          <h2 id="gallery-grid-title" className="sr-only">
            Gallery grid
          </h2>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.15 }}
          >
            {galleryItems.map((item, index) => (
              <GalleryCard key={`${item.category}-${index}`} item={item} index={index} />
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="environment-title">
        <Container>
          <SectionHeader
            eyebrow="Learning Environment"
            title="Why the classroom feels different"
            description="Three small cards that summarize the environment behind the gallery."
          />

          <h2 id="environment-title" className="sr-only">
            Learning environment features
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {environmentCards.map((item, index) => (
              <EnvironmentFeature key={item.title} {...item} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="gallery-cta-title">
        <Container>
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.13),transparent_30%)]" />
            <motion.div
              {...slideLeft}
              className="relative flex flex-col items-center gap-8 text-center"
            >
              <div className="max-w-2xl space-y-4">
                <Badge variant="brand" className="mx-auto w-fit">
                  Admission Open
                </Badge>
                <h2
                  id="gallery-cta-title"
                  className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Become Part of the MEGAMIND CLASSES Family
                </h2>
                <p className="text-base leading-8 sm:text-lg">
                  Join a focused mathematics learning environment built on discipline, clarity,
                  and consistent support.
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
