import { FiUser, FiAward, FiBriefcase, FiUsers, FiBook } from 'react-icons/fi';

const stats = [
  { icon: <FiBriefcase size={22} />, value: '3+', label: 'Years Experience' },
  { icon: <FiAward size={22} />, value: '4', label: 'Companies' },
  { icon: <FiUsers size={22} />, value: '100K+', label: 'Users Served' },
  { icon: <FiBook size={22} />, value: '100+', label: 'Students Mentored' },
];

const AboutSection = () => (
  <section id='about' className='py-20 bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-10 text-center text-[var(--foreground)]'>
        <FiUser
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        About Me
      </h2>

      {/* Stats Strip */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='flex flex-col items-center justify-center gap-2 p-5 rounded-xl bg-[var(--gray-50)] border border-[var(--gray-200)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'
          >
            <span className='text-[var(--primary)]'>{stat.icon}</span>
            <span className='text-3xl font-extrabold text-[var(--foreground)]'>
              {stat.value}
            </span>
            <span className='text-sm text-[var(--gray-700)] font-medium text-center'>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div className='bg-[var(--gray-50)] p-8 rounded-xl shadow-lg border border-[var(--gray-200)]'>
        <p className='text-lg text-[var(--gray-700)] leading-relaxed mb-6'>
          I&apos;m a{' '}
          <span className='font-semibold text-[var(--primary)]'>
            Software Engineer - Full Stack Architect
          </span>{' '}
          with deep expertise in building scalable backend systems, real-time
          applications, and{' '}
          <span className='font-semibold text-[var(--primary)]'>
            AI-integrated products
          </span>
          . My passion lies in distributed systems, event-driven architecture,
          and high-performance system design — crafting solutions that handle
          real load, real users, and real intelligence.
        </p>
        <p className='text-lg text-[var(--gray-700)] leading-relaxed mb-6'>
          I partner with product and leadership teams to convert business
          requirements into{' '}
          <span className='font-semibold'>
            technical strategy and solutions
          </span>
          , driving system architecture and integrating AI capabilities — from
          Python AI microservices to intelligent moderation systems — where they
          create the most value. Beyond code, I love mentoring developers and
          sharing what I know.
        </p>
        <p className='text-lg text-[var(--gray-700)] leading-relaxed'>
          <span className='font-semibold'>Fun fact:</span> When I&apos;m not
          shipping features, you can find me exploring nature, spending time
          with animals, or deep-diving into system design papers.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
