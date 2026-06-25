import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className='border-t border-[var(--gray-200)] px-4 py-10'>
    <div className='section-shell flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left'>
      <p className='text-sm text-[var(--gray-700)]'>
        &copy; {new Date().getFullYear()} Shivansh Tiwari. Built with Next.js.
      </p>
      <div className='flex items-center gap-2'>
        {[
          { href: 'https://github.com/ShivanshTiwari01', label: 'GitHub', icon: <FiGithub size={18} /> },
          { href: 'https://linkedin.com/in/shivanshtiwari01', label: 'LinkedIn', icon: <FiLinkedin size={18} /> },
          { href: 'mailto:shivanshtiwari2014@gmail.com', label: 'Email', icon: <FiMail size={18} /> },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className='grid h-10 w-10 place-items-center rounded-full border border-[var(--gray-200)] bg-[var(--gray-50)] text-[var(--gray-700)] hover:bg-[var(--gray-100)] hover:text-[var(--foreground)]'
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
