import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from 'react-icons/fi';

const contactLinks = [
  {
    href: 'mailto:shivanshtiwari2014@gmail.com',
    icon: <FiMail className='h-5 w-5' />,
    label: 'Email',
    value: 'shivanshtiwari2014@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/shivanshtiwari01',
    icon: <FiLinkedin className='h-5 w-5' />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shivanshtiwari01',
  },
  {
    href: 'https://github.com/ShivanshTiwari01',
    icon: <FiGithub className='h-5 w-5' />,
    label: 'GitHub',
    value: 'github.com/ShivanshTiwari01',
  },
  {
    href: 'tel:+919971864916',
    icon: <FiPhone className='h-5 w-5' />,
    label: 'Phone',
    value: '+91 9971864916',
  },
];

const ContactSection = () => (
  <section id='contact' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='rounded-3xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-6 shadow-sm md:p-10'>
        <div className='grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start'>
          <div>
            <span className='eyebrow'>Contact</span>
            <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
              Have a product, platform, or backend problem to solve?
            </h2>
            <p className='mt-5 text-base leading-8 text-[var(--gray-700)]'>
              I am open to engineering roles, freelance product work, and
              technical collaborations around full-stack systems, AI products,
              and scalable backends.
            </p>
            <a
              href='mailto:shivanshtiwari2014@gmail.com'
              className='mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)] hover:opacity-90'
            >
              Send email
              <FiArrowUpRight size={16} />
            </a>
          </div>

          <div className='grid gap-3'>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className='flex items-center justify-between gap-4 rounded-2xl border border-[var(--gray-200)] bg-[var(--background)] p-4 hover:bg-[var(--gray-100)]'
              >
                <span className='flex min-w-0 items-center gap-4'>
                  <span className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gray-50)] text-[var(--foreground)]'>
                    {link.icon}
                  </span>
                  <span className='min-w-0'>
                    <span className='block text-xs font-semibold uppercase tracking-wide text-[var(--gray-700)]'>
                      {link.label}
                    </span>
                    <span className='block truncate text-sm font-medium text-[var(--foreground)]'>
                      {link.value}
                    </span>
                  </span>
                </span>
                <FiArrowUpRight
                  className='shrink-0 text-[var(--gray-700)]'
                  size={17}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
