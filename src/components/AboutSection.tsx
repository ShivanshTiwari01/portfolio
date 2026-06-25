import { FiCode, FiCpu, FiDatabase, FiUser } from 'react-icons/fi';

const focusAreas = [
  {
    icon: <FiDatabase size={20} />,
    title: 'Backend platforms',
    text: 'APIs, data models, queues, caching, and services designed for reliability under real usage.',
  },
  {
    icon: <FiCode size={20} />,
    title: 'Product engineering',
    text: 'End-to-end delivery across Next.js, React, TypeScript, Node.js, Go, PostgreSQL, and Redis.',
  },
  {
    icon: <FiCpu size={20} />,
    title: 'AI integrations',
    text: 'Practical LLM features, moderation flows, conversational products, and automation around user workflows.',
  },
];

const AboutSection = () => (
  <section id='about' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>
          <FiUser size={14} />
          About
        </span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          I care about systems that are simple to use and hard to break.
        </h2>
        <p className='mt-5 text-base leading-8 text-[var(--gray-700)]'>
          I am a full-stack software engineer focused on scalable backend systems,
          real-time applications, and polished product interfaces. My work sits at
          the intersection of practical architecture, product clarity, and reliable execution.
        </p>
      </div>

      <div className='mt-12 grid gap-4 md:grid-cols-3'>
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className='rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 shadow-sm'
          >
            <div className='mb-5 grid h-10 w-10 place-items-center rounded-full bg-[var(--gray-100)] text-[var(--foreground)]'>
              {area.icon}
            </div>
            <h3 className='text-lg font-semibold'>{area.title}</h3>
            <p className='mt-3 text-sm leading-7 text-[var(--gray-700)]'>{area.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
