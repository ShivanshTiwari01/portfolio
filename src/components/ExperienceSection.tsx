import { FiBriefcase, FiClock } from 'react-icons/fi';

const experiences = [
  {
    company: 'Unjob.ai',
    role: 'Senior Software Developer',
    period: 'Jan 2026 - Present',
    highlights: [
      'Building scalable distributed systems for core product development with a focus on performance and reliability.',
      'Partnering with product and leadership teams to turn business requirements into technical strategy.',
      'Driving architecture reviews, clean code practices, and mentoring for stronger engineering delivery.',
    ],
  },
  {
    company: 'PollPe',
    role: 'Backend Developer',
    period: 'Dec 2024 - Dec 2025',
    highlights: [
      'Built backend systems with Node.js, Express, PostgreSQL, Redis, and Kafka for 10,000+ concurrent users.',
      'Developed real-time community features with WebSockets and Python AI services for moderation workflows.',
      'Created a Next.js admin dashboard and 50+ secure APIs with high-availability production usage.',
    ],
  },
  {
    company: 'OpsTree Solutions',
    role: 'Developer Trainee',
    period: 'Jul 2024 - Sep 2024',
    highlights: [
      'Automated deployments with Ansible and Python, reducing delivery time by 25%.',
      'Resolved critical Python module issues to improve stability and deployment speed.',
    ],
  },
  {
    company: 'Coding Ninjas',
    role: 'Teaching Assistant',
    period: 'May 2024 - Jul 2024',
    highlights: [
      'Mentored 100+ students in debugging, optimization, full-stack development, and SDLC practices.',
      'Received multiple testimonials for clear and effective technical guidance.',
    ],
  },
];

const ExperienceSection = () => (
  <section id='experience' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>
          <FiBriefcase size={14} />
          Experience
        </span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          Work across backend, product, platform, and mentoring.
        </h2>
      </div>

      <div className='mx-auto mt-12 max-w-4xl'>
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className='relative border-l border-[var(--gray-200)] pb-8 pl-7 last:pb-0'
          >
            <span className='absolute -left-[9px] top-1 grid h-4 w-4 place-items-center rounded-full border border-[var(--foreground)] bg-[var(--background)]' />
            <article className='rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 shadow-sm'>
              <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <p className='text-sm font-semibold text-[var(--gray-700)]'>{exp.company}</p>
                  <h3 className='mt-1 text-xl font-semibold'>{exp.role}</h3>
                </div>
                <span className='inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gray-200)] bg-[var(--background)] px-3 py-1.5 text-xs font-semibold text-[var(--gray-700)]'>
                  <FiClock size={13} />
                  {exp.period}
                </span>
              </div>

              <ul className='mt-5 space-y-3'>
                {exp.highlights.map((point) => (
                  <li key={point} className='flex gap-3 text-sm leading-7 text-[var(--gray-700)]'>
                    <span className='mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]' />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            {index !== experiences.length - 1 && <div className='h-2' />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
