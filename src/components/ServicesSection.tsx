import { FiGitBranch, FiLayers, FiServer, FiZap } from 'react-icons/fi';

const services = [
  {
    icon: <FiLayers size={20} />,
    title: 'Full-stack products',
    description:
      'Building complete product surfaces with thoughtful UI, secure APIs, authentication, and maintainable data layers.',
  },
  {
    icon: <FiServer size={20} />,
    title: 'Backend architecture',
    description:
      'Designing Node.js and Go services with PostgreSQL, Redis, queues, clean boundaries, and observability in mind.',
  },
  {
    icon: <FiZap size={20} />,
    title: 'Real-time workflows',
    description:
      'Shipping collaborative, live, and event-driven features using WebSockets, Kafka, and fast state propagation.',
  },
  {
    icon: <FiGitBranch size={20} />,
    title: 'Delivery systems',
    description:
      'Improving release confidence with Dockerized services, CI/CD automation, and deployment-ready project structure.',
  },
];

const ServicesSection = () => (
  <section id='services' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>What I work on</span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          Product-minded engineering across the stack.
        </h2>
        <p className='mt-5 text-base leading-8 text-[var(--gray-700)]'>
          The portfolio is centered on shipped systems, practical architecture,
          and implementation work that moves from idea to production.
        </p>
      </div>

      <div className='mt-12 grid gap-4 md:grid-cols-2'>
        {services.map((service) => (
          <div
            key={service.title}
            className='flex gap-5 rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 shadow-sm'
          >
            <div className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--foreground)] text-[var(--background)]'>
              {service.icon}
            </div>
            <div>
              <h3 className='text-lg font-semibold'>{service.title}</h3>
              <p className='mt-2 text-sm leading-7 text-[var(--gray-700)]'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
