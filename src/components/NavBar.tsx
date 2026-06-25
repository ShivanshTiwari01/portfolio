import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  'About',
  'Experience',
  'Tech',
  'Projects',
  'Achievements',
  'Contact',
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed inset-x-0 top-3 z-50 px-4'>
      <div className='mx-auto grid h-14 max-w-5xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-[var(--gray-200)] bg-[var(--gray-50)]/90 px-3 shadow-sm backdrop-blur-xl'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='justify-self-start rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--gray-100)]'
        >
          Shivansh Tiwari
        </button>

        <div className='hidden items-center gap-1 md:flex'>
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='rounded-full px-3 py-2 text-sm font-medium text-[var(--gray-700)] hover:bg-[var(--gray-100)] hover:text-[var(--foreground)]'
            >
              {item}
            </a>
          ))}
        </div>

        <div className='flex justify-self-end'>
          <a
            href='#contact'
            className='hidden rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] hover:opacity-90 md:inline-flex'
          >
            Hire me
          </a>
          <button
            className='grid h-10 w-10 place-items-center rounded-full text-[var(--gray-700)] hover:bg-[var(--gray-100)] md:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='mx-auto mt-2 flex max-w-5xl flex-col rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-2 shadow-lg md:hidden'>
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className='rounded-xl px-4 py-3 text-sm font-medium text-[var(--gray-700)] hover:bg-[var(--gray-100)] hover:text-[var(--foreground)]'
            >
              {item}
            </a>
          ))}
          <a
            href='#contact'
            onClick={() => setMenuOpen(false)}
            className='mt-1 rounded-xl bg-[var(--foreground)] px-4 py-3 text-center text-sm font-semibold text-[var(--background)]'
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
