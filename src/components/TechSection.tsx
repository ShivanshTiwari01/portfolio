import { FiCpu } from 'react-icons/fi';

const techStack: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Go', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Gin', 'FastAPI', 'WebSockets'],
  },
  {
    category: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    category: 'DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux'],
  },
];

const TechSection = () => (
  <section id='tech' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>
          <FiCpu size={14} />
          Stack
        </span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          Tools I use to ship reliable products.
        </h2>
      </div>

      <div className='mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
        {techStack.map(({ category, items }) => (
          <div
            key={category}
            className='rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-5 shadow-sm'
          >
            <h3 className='text-sm font-semibold uppercase tracking-wide text-[var(--gray-700)]'>
              {category}
            </h3>
            <div className='mt-5 flex flex-wrap gap-2'>
              {items.map((item) => (
                <span
                  key={item}
                  className='rounded-full bg-[var(--gray-100)] px-3 py-1 text-xs font-medium text-[var(--foreground)]'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechSection;
