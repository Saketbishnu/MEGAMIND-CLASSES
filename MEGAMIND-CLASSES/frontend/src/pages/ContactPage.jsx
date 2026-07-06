import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiArrowRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiChevronDown,
} from 'react-icons/fi';
import { Container, Section, HeroContainer, SectionHeader } from '@components/ui/Layout.jsx';
import { Card } from '@components/ui/Card.jsx';
import { Badge } from '@components/ui/Badge.jsx';
import { PrimaryButton, SecondaryButton, OutlineButton } from '@components/ui/Button.jsx';
import { Input, Textarea, Select } from '@components/ui/FormControls.jsx';
import { fadeIn, slideLeft, slideRight, slideUp, staggerContainer } from '@lib/animationPresets.js';

const contactCards = [
  {
    icon: FiMapPin,
    title: 'Address',
    lines: ['Kalimandir Road', 'Bawanbigha', 'Deoghar', 'Jharkhand', 'India'],
  },
  {
    icon: FiPhone,
    title: 'Phone',
    lines: ['+91 9934298014'],
  },
  {
    icon: FiMail,
    title: 'Email',
    lines: ['admissions@megamindclasses.in', '(Keep this as placeholder until the real domain is purchased.)'],
  },
  {
    icon: FiClock,
    title: 'Office Hours',
    lines: ['Monday – Saturday', '8:00 AM – 7:00 PM'],
  },
];

const classes = ['IX', 'X', 'XI', 'XII', 'JEE Main', 'JEE Advanced', 'Other'];

const faqs = [
  {
    question: 'How can I take admission?',
    answer:
      'Fill out the contact form or call the institute directly. The admissions process is simple and guided by the office team.',
  },
  {
    question: 'Which classes are available?',
    answer:
      'The coaching supports school-level mathematics and competitive exam preparation. You can select the class that best matches your current stage.',
  },
  {
    question: 'Do you prepare students for JEE?',
    answer:
      'Yes. The curriculum includes preparation support for JEE Main and JEE Advanced mathematics.',
  },
  {
    question: 'Why is the batch size limited to 20 students?',
    answer:
      'A small batch size allows for individual attention, stronger concept clarity, and a more disciplined learning environment.',
  },
];

function ContactInfoCard({ icon: Icon, title, lines }) {
  return (
    <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.3 }}>
      <Card className="h-full hover-lift">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/40 dark:text-brand-300">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-xl font-bold text-slate-950 dark:text-white">{title}</h3>
        <div className="mt-3 space-y-1.5">
          {lines.map((line) => (
            <p key={line} className="text-sm leading-7">
              {line}
            </p>
          ))}
        </div>
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
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-sm leading-7">{faq.answer}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Card>
  );
}

function ContactField({ label, error, children, id }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </label>
      {children}
      {error ? <p className="text-sm text-danger-600 dark:text-danger-300">{error}</p> : null}
    </div>
  );
}

function validateForm(values) {
  const errors = {};

  if (!values.studentName.trim()) errors.studentName = 'Student name is required.';
  if (!values.parentName.trim()) errors.parentName = 'Parent name is required.';
  if (!values.mobile.trim()) errors.mobile = 'Mobile number is required.';
  else if (!/^\+?[0-9\s-]{7,15}$/.test(values.mobile.trim())) errors.mobile = 'Enter a valid mobile number.';
  if (!values.email.trim()) errors.email = 'Email address is required.';
  else if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.className.trim()) errors.className = 'Please select a class.';
  if (!values.message.trim()) errors.message = 'Message is required.';

  return errors;
}

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [values, setValues] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    className: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [serverErrors, setServerErrors] = useState({});

  const errors = useMemo(() => validateForm(values), [values]);
  const hasErrors = Object.keys(errors).length > 0;

  const apiFieldMap = {
    name: 'studentName',
    phone: 'mobile',
    email: 'email',
    subject: 'className',
    message: 'message',
  };

  const handleChange = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setServerErrors((current) => ({ ...current, [field]: '' }));
    setSubmitError('');
  };

  const handleBlur = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({
      studentName: true,
      parentName: true,
      mobile: true,
      email: true,
      className: true,
      message: true,
    });

    if (hasErrors) {
      return;
    }

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

    if (!apiBaseUrl) {
      setSubmitError('Contact service is not configured. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setServerErrors({});
    setSubmitted(false);

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.studentName.trim(),
          email: values.email.trim(),
          phone: values.mobile.trim(),
          subject: `Class: ${values.className.trim()}`,
          message: `Parent Name: ${values.parentName.trim()}\n\n${values.message.trim()}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        if (Array.isArray(result?.errors) && result.errors.length > 0) {
          const nextTouched = { ...touched };
          const nextServerErrors = {};

          result.errors.forEach(({ field, message }) => {
            const formField = apiFieldMap[field] || field;
            nextTouched[formField] = true;
            nextServerErrors[formField] = message;
          });

          setTouched(nextTouched);
          setServerErrors(nextServerErrors);
        }

        const errorMessage =
          result?.errors?.map((item) => item.message).join(' ') ||
          result?.message ||
          'Failed to submit your message. Please try again.';
        setSubmitError(errorMessage);
        return;
      }

      setSubmitted(true);
      setServerErrors({});
      setValues({
        studentName: '',
        parentName: '',
        mobile: '',
        email: '',
        className: '',
        message: '',
      });
      setTouched({});
    } catch {
      setSubmitError('Unable to reach the server. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues({
      studentName: '',
      parentName: '',
      mobile: '',
      email: '',
      className: '',
      message: '',
    });
    setTouched({});
    setSubmitted(false);
    setSubmitError('');
    setServerErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Contact | MEGAMIND CLASSES</title>
        <meta
          name="description"
          content="Contact MEGAMIND CLASSES to begin your journey towards excellence in Mathematics."
        />
      </Helmet>

      <section aria-labelledby="contact-hero-title">
        <Container className="section-spacing">
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_28%)]" />
            <motion.div {...slideUp} className="relative mx-auto max-w-3xl space-y-6 text-center">
              <Badge variant="brand" className="mx-auto w-fit">
                Contact MEGAMIND CLASSES
              </Badge>
              <div className="space-y-4">
                <h1
                  id="contact-hero-title"
                  className="font-display text-5xl font-bold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Contact MEGAMIND CLASSES
                </h1>
                <p className="text-lg leading-8 sm:text-xl">
                  Get in touch with us to begin your journey towards excellence in Mathematics.
                </p>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </section>

      <Section aria-labelledby="contact-info-title">
        <Container>
          <SectionHeader
            eyebrow="Contact Information"
            title="Reach us directly"
            description="Use the cards below for address, phone, email, and office hours."
          />
          <h2 id="contact-info-title" className="sr-only">
            Contact information
          </h2>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
          >
            {contactCards.map((card) => (
              <ContactInfoCard key={card.title} {...card} />
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section aria-labelledby="contact-form-title">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div {...slideRight}>
              <SectionHeader
                eyebrow="Contact Form"
                title="Send us a message"
                description="Share your enquiry and our team will get back to you shortly."
              />
              <Card className="glass-panel">
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <h2 id="contact-form-title" className="sr-only">
                    Contact form
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <ContactField
                      id="studentName"
                      label="Student Name"
                      error={
                        (touched.studentName ? errors.studentName : '') || serverErrors.studentName || ''
                      }
                    >
                      <Input
                        id="studentName"
                        value={values.studentName}
                        onChange={handleChange('studentName')}
                        onBlur={handleBlur('studentName')}
                        aria-invalid={Boolean(touched.studentName && errors.studentName)}
                        aria-describedby={errors.studentName ? 'studentName-error' : undefined}
                      />
                    </ContactField>

                    <ContactField
                      id="parentName"
                      label="Parent Name"
                      error={touched.parentName ? errors.parentName : ''}
                    >
                      <Input
                        id="parentName"
                        value={values.parentName}
                        onChange={handleChange('parentName')}
                        onBlur={handleBlur('parentName')}
                        aria-invalid={Boolean(touched.parentName && errors.parentName)}
                      />
                    </ContactField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <ContactField
                      id="mobile"
                      label="Mobile Number"
                      error={(touched.mobile ? errors.mobile : '') || serverErrors.mobile || ''}
                    >
                      <Input
                        id="mobile"
                        value={values.mobile}
                        onChange={handleChange('mobile')}
                        onBlur={handleBlur('mobile')}
                        aria-invalid={Boolean(touched.mobile && errors.mobile)}
                      />
                    </ContactField>

                    <ContactField
                      id="email"
                      label="Email Address"
                      error={(touched.email ? errors.email : '') || serverErrors.email || ''}
                    >
                      <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        aria-invalid={Boolean(touched.email && errors.email)}
                      />
                    </ContactField>
                  </div>

                  <ContactField
                    id="className"
                    label="Class"
                    error={(touched.className ? errors.className : '') || serverErrors.className || ''}
                  >
                    <Select
                      id="className"
                      value={values.className}
                      onChange={handleChange('className')}
                      onBlur={handleBlur('className')}
                      aria-invalid={Boolean(touched.className && errors.className)}
                    >
                      <option value="">Select class</option>
                      {classes.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </ContactField>

                  <ContactField
                    id="message"
                    label="Message"
                    error={(touched.message ? errors.message : '') || serverErrors.message || ''}
                  >
                    <Textarea
                      id="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange('message')}
                      onBlur={handleBlur('message')}
                      aria-invalid={Boolean(touched.message && errors.message)}
                    />
                  </ContactField>

                  {submitError ? (
                    <p
                      className="rounded-2xl border border-danger-200 bg-danger-50 px-4 py-3 text-sm text-danger-700 dark:border-danger-900/40 dark:bg-danger-950/20 dark:text-danger-300"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  ) : null}

                  {submitted ? (
                    <p
                      className="rounded-2xl border border-success-200 bg-success-50 px-4 py-3 text-sm text-success-700 dark:border-success-900/40 dark:bg-success-950/20 dark:text-success-300"
                      role="status"
                    >
                      Thank you. Your message has been submitted successfully.
                    </p>
                  ) : null}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <PrimaryButton type="submit" className="group" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <FiSend className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                    </PrimaryButton>
                    <OutlineButton type="button" onClick={handleReset}>
                      Clear Form
                    </OutlineButton>
                  </div>
                </form>
              </Card>
            </motion.div>

            <motion.div {...slideLeft} className="space-y-6">
              <Card className="glass-panel">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="brand">Location</Badge>
                    <h2 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                      Coaching Address
                    </h2>
                  </div>
                </div>
                <div className="mt-5 rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-950/40">
                  <p className="text-sm leading-7">Kalimandir Road</p>
                  <p className="text-sm leading-7">Bawanbigha</p>
                  <p className="text-sm leading-7">Deoghar</p>
                  <p className="text-sm leading-7">Jharkhand</p>
                  <p className="text-sm leading-7">India</p>
                </div>
                <div className="mt-6">
                  <PrimaryButton as="a" href="https://maps.google.com" target="_blank" rel="noreferrer" className="group">
                    Open in Google Maps
                    <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </PrimaryButton>
                </div>
              </Card>

              <Card className="glass-panel">
                <div className="aspect-[16/10] rounded-[1.5rem] border border-dashed border-slate-300 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_30%)] p-5 dark:border-slate-700">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <Badge variant="default">Google Maps Placeholder</Badge>
                      <p className="mt-4 max-w-sm text-sm leading-7">
                        A responsive map preview card for the coaching address will be connected
                        later.
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">
                      Kalimandir Road, Bawanbigha, Deoghar
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container>
          <SectionHeader
            eyebrow="Frequently Asked Questions"
            title="Helpful answers before you call"
            description="Expand the cards below for quick answers about admissions, classes, JEE preparation, and batch size."
            align="center"
          />
          <h2 id="faq-title" className="sr-only">
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

      <Section aria-labelledby="contact-cta-title">
        <Container>
          <HeroContainer className="overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,134,216,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_30%)]" />
            <motion.div {...slideUp} className="relative flex flex-col items-center gap-8 text-center">
              <div className="max-w-2xl space-y-4">
                <Badge variant="brand" className="mx-auto w-fit">
                  Admission Open
                </Badge>
                <h2
                  id="contact-cta-title"
                  className="font-display text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
                >
                  Ready to Join MEGAMIND CLASSES?
                </h2>
                <p className="text-base leading-8 sm:text-lg">Admissions are now open.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryButton as="a" href="/admission" className="group">
                  Apply for Admission
                  <FiArrowRight className="transition group-hover:translate-x-0.5" aria-hidden="true" />
                </PrimaryButton>
                <SecondaryButton as="a" href="/courses">
                  Explore Courses
                </SecondaryButton>
              </div>
            </motion.div>
          </HeroContainer>
        </Container>
      </Section>
    </>
  );
}
