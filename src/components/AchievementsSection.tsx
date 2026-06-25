import { FiAward, FiCheckCircle } from 'react-icons/fi';

const achievements = [
  'Attained Intermediate Level Certificate in Node.js on HackerRank.',
  'Demonstrated proficiency in React by clearing HackerRank certification.',
  'Awarded title Code Hacker, Top 1% of the Year, for problem solving on Coding Ninjas Code360 platform.',
  'Solved 500+ problems across platforms including Code360, LeetCode, GFG, and HackerRank.',
  'Earned Intermediate Level Certificates in Problem Solving and JavaScript on HackerRank.',
  'Earned Intermediate Level Certificate in SQL on HackerRank.',
  'Achieved 5-star ratings in Python and SQL on HackerRank.',
];

const AchievementsSection = () => (
  <section id='achievements' className='px-4 py-20'>
    <div className='section-shell'>
      <div className='mx-auto max-w-2xl text-center'>
        <span className='eyebrow'>
          <FiAward size={14} />
          Achievements
        </span>
        <h2 className='mt-5 text-4xl font-semibold md:text-5xl'>
          Certifications, rankings, and problem-solving milestones.
        </h2>
        <p className='mt-5 text-base leading-8 text-[var(--gray-700)]'>
          A record of consistent learning across backend, frontend, databases,
          JavaScript, SQL, Python, and competitive problem solving.
        </p>
      </div>

      <div className='mx-auto mt-12 max-w-3xl rounded-3xl border border-[var(--gray-200)] bg-[var(--gray-50)] p-4 shadow-sm md:p-6'>
        <div className='grid gap-3'>
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className='flex gap-4 rounded-2xl border border-[var(--gray-200)] bg-[var(--background)] p-4'
            >
              <FiCheckCircle className='mt-0.5 shrink-0 text-[var(--accent)]' size={19} />
              <p className='text-sm leading-7 text-[var(--gray-700)]'>{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
