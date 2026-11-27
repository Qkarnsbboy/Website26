// All projects on the site.
// The sidebar, the home page and each project page read from this list.
// To add a project, add one object here.

export type ProjectStatus = 'live' | 'wip' | 'planned';

export interface Project {
  slug: string; // used in the page address: /projects/<slug>
  title: string;
  summary: string; // short tags shown on the home page row
  description: string;
  image: string;
  tags: string[];
  status: ProjectStatus;
  link: string | null; // live demo, if there is one
}

export const projects: Project[] = [
  {
    slug: 'strategy-visualizer',
    title: 'Strategy Visualizer',
    summary: 'options, black-scholes',
    description:
      'An options payoff terminal. Build a strategy from calls and puts, then see its payoff at expiry, break-even point, and Greeks.',
    image: '/assets/Strategy_Visualizer.jpg',
    tags: ['Options', 'Black-Scholes', 'Greeks'],
    status: 'live',
    link: 'https://strategy-visualizer-hazel.vercel.app/',
  },
  {
    slug: 'poker-hand-analyzer',
    title: 'Poker Hand Analyzer',
    summary: 'python, game theory',
    description:
      'Reviews a poker hand and shows where your play differed from the mathematically optimal line, and when going against it would have actually made you more money.',
    image: '/assets/Poker_Analyzer.jpg',
    tags: ['Python', 'Game Theory', 'Poker'],
    status: 'wip',
    link: null,
  },
  {
    slug: 'gamertag-lookup',
    title: 'Gamertag Lookup',
    summary: 'apis, data',
    description:
      "Look up a player once and get their stats from every game they play, pulled together from each platform's separate database.",
    image: '/assets/GamerTag_Lookup.jpeg',
    tags: ['Python', 'REST APIs', 'Data Aggregation'],
    status: 'planned',
    link: null,
  },
  {
    slug: 'steam-options-pricer',
    title: 'Steam Options Pricer',
    summary: 'derivatives, time series',
    description:
      'Takes historical prices for Counter-Strike skins and builds options chains on top of them, treating the skin market like a tradable asset.',
    image: '/assets/SteamSkin.webp',
    tags: ['Python', 'Derivatives', 'Time Series'],
    status: 'planned',
    link: null,
  },
];

// The text shown for each status, for example "[live ↗]".
export const statusLabels: Record<ProjectStatus, string> = {
  live: 'live',
  wip: 'wip',
  planned: 'planned',
};
