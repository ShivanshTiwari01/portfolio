import Image from 'next/image';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    href: 'https://github.com/ShivanshTiwari01',
    label: 'GitHub',
    icon: <FiGithub size={18} />,
  },
  {
    href: 'https://linkedin.com/in/shivanshtiwari01',
    label: 'LinkedIn',
    icon: <FiLinkedin size={18} />,
  },
  {
    href: 'mailto:shivanshtiwari2014@gmail.com',
    label: 'Email',
    icon: <FiMail size={18} />,
  },
];

const stats = [
  ['3+', 'Years experience'],
  ['100K+', 'Users served'],
  ['500+', 'Problems solved'],
  ['Top 1%', 'Code360 rank'],
];

const HeroSection = () => (
  <section className='px-4 pb-20 pt-24 md:pb-28 md:pt-28'>
    <div className='section-shell center-grid items-center'>
      <div className='col-span-12 flex justify-center'>
        <div className='h-36 w-36 overflow-hidden rounded-full border border-[var(--gray-200)] bg-[var(--gray-50)] p-1 shadow-sm md:h-40 md:w-40'>
          <div className='relative h-full w-full overflow-hidden rounded-full'>
            <Image
              src='/my_image_prof.png'
              alt='Shivansh Tiwari'
              fill
              sizes='(min-width: 768px) 160px, 144px'
              className='object-cover object-center'
              priority
            />
          </div>
        </div>
      </div>

      <div className='col-span-12 mt-7 flex justify-center'>
        <span className='eyebrow'>
          Software Engineer / Full Stack Architect
        </span>
      </div>

      <div className='col-span-12 mt-6 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8'>
        <h1 className='text-center text-4xl font-semibold tracking-normal text-[var(--foreground)] md:text-6xl'>
          Building systems with the curiosity that started it all.
        </h1>
      </div>

      <div className='col-span-12 mt-6 md:col-start-3 md:col-span-8'>
        <p className='text-center text-base leading-8 text-[var(--gray-700)] md:text-lg'>
          As a kid, I opened up my CPU just to understand what was happening
          inside. Engineering made me fall in love with low-level languages and
          the elegance behind how machines really work. Today, in the era of
          agentic engineering, I get to turn that same curiosity into scalable
          products, AI workflows, and production systems.
        </p>
      </div>

      <div className='col-span-12 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row'>
        <a
          href='#projects'
          className='inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] shadow-sm hover:-translate-y-0.5'
        >
          View projects
          <FiArrowRight size={16} />
        </a>
      </div>

      <div className='col-span-12 mt-8 flex items-center justify-center gap-2'>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={
              link.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            className='grid h-10 w-10 place-items-center rounded-full border border-[var(--gray-200)] bg-[var(--gray-50)] text-[var(--gray-700)] hover:bg-[var(--gray-100)] hover:text-[var(--foreground)]'
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className='col-span-12 mt-14 grid grid-cols-2 gap-3 md:col-start-3 md:col-span-8 md:grid-cols-4'>
        {stats.map(([value, label]) => (
          <div
            key={label}
            className='rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] px-4 py-5 text-center shadow-sm'
          >
            <div className='text-2xl font-semibold text-[var(--foreground)]'>
              {value}
            </div>
            <div className='mt-1 text-xs font-medium uppercase tracking-wide text-[var(--gray-700)]'>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
