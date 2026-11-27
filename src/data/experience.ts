// All jobs on the site.
// The sidebar and each experience page read from this list.
// One company can have more than one role (for example, two Microsoft internships).

export interface Role {
  title: string;
  period: string;
  location: string;
  points: string[];
}

export interface Company {
  slug: string; // used in the page address: /experience/<slug>
  name: string;
  roles: Role[];
}

export const companies: Company[] = [
  {
    slug: 'strategy-and',
    name: 'Strategy&',
    roles: [
      {
        title: 'Associate, Technology Strategy (Deals)',
        period: 'Oct 2025 – Present',
        location: 'New York, NY',
        points: [
          'Embedded with client teams across 10+ technology due diligence engagements, assessing product architecture, infrastructure, and technical debt to size investment risk.',
          'Ran technical discovery with target-company engineering leaders, then translated findings into commercial recommendations for partners and private equity investment committees.',
          'Identified $10M+ in operational bottlenecks under compressed deal timelines with incomplete information.',
        ],
      },
    ],
  },
  {
    slug: 'microsoft',
    name: 'Microsoft',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'May 2024 – Aug 2024',
        location: 'Redmond, WA',
        points: [
          'Led development of a performance-critical feature within Microsoft Teams supporting 1M+ daily calls, reducing transfer time by 20% and improving call success rates by 15%.',
          'Partnered with product and engineering leads to prioritize feature rollout based on user impact and operational risk.',
          'Built automated test framework (50+ tests) to stress-test edge cases and improve system stability under peak usage.',
        ],
      },
      {
        title: 'Explore Intern (New Technologists)',
        period: 'May 2023 – Aug 2023',
        location: 'Redmond, WA',
        points: [
          'Designed and shipped a backend decision engine in Express.js integrating OpenAI APIs into a consumer product, increasing user engagement by 50%.',
          'Built a full-stack personal styling web application using ReactJS, JavaScript, and Bootstrap.',
          'Selected as 1 of 50 out of 2,700+ applicants to join the innovation academy and explore the full product lifecycle.',
        ],
      },
    ],
  },
];
