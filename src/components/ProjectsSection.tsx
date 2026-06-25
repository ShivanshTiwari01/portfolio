import { FiArrowUpRight, FiBriefcase, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'SIGNAL',
    description:
      'AI-powered trading intelligence platform for NIFTY50 with live market context, Gemini-driven chat, onboarding, subscriptions, and usage tracking.',
    tags: ['Next.js', 'React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Gemini'],
    github: 'https://github.com/ShivanshTiwari01/signal',
    live: 'https://signal.shivanshlabs.in/',
  },
  {
    title: 'Sketchify',
    description:
      'Real-time collaborative whiteboard with room-based sessions, WebSocket sync, JWT authentication, persistent canvas state, and shared monorepo packages.',
    tags: ['Next.js', 'TypeScript', 'Turborepo', 'Express', 'WebSockets', 'Prisma', 'PostgreSQL', 'Zod'],
    github: 'https://github.com/ShivanshTiwari01/sketchify',
    live: 'https://sketchify.shivanshlabs.in/',
  },
  {
    title: 'Musicify',
    description:
      'Minimal Spotify-inspired music streaming platform with secure auth, auto-discovered local audio files, a persistent player UI, and containerized deployment.',
    tags: ['Go', 'Gin', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/ShivanshTiwari01/musicify',
    live: null,
  },
];

const ProjectsSection = () => (
  <section id='projects' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>
          <FiBriefcase size={14} />
          Selected work
        </span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          Recent projects with real product surfaces.
        </h2>
        <p className='mt-5 text-base leading-8 text-[var(--gray-700)]'>
          A focused set of current work across AI, collaboration, real-time systems,
          and media streaming.
        </p>
      </div>

      <div className='mt-12 grid gap-5 lg:grid-cols-3'>
        {projects.map((project) => (
          <article
            key={project.title}
            className='flex min-h-full flex-col rounded-3xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 shadow-sm'
          >
            <div className='mb-8 flex items-center justify-between'>
              <div className='grid h-11 w-11 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)]'>
                <FiBriefcase size={19} />
              </div>
              <span className='rounded-full border border-[var(--gray-200)] px-3 py-1 text-xs font-semibold text-[var(--gray-700)]'>
                Featured
              </span>
            </div>

            <h3 className='text-2xl font-semibold'>{project.title}</h3>
            <p className='mt-4 flex-1 text-sm leading-7 text-[var(--gray-700)]'>
              {project.description}
            </p>

            <div className='mt-6 flex flex-wrap gap-2'>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full bg-[var(--gray-100)] px-3 py-1 text-xs font-medium text-[var(--gray-700)]'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='mt-7 flex items-center gap-3 border-t border-[var(--gray-200)] pt-5'>
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-[var(--gray-200)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--gray-100)]'
              >
                <FiGithub size={16} />
                GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] hover:opacity-90'
                >
                  Live
                  <FiArrowUpRight size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
