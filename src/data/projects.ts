// All projects on the site.
// The sidebar, the home page and each project page read from this list.
// To add a project, add one object here.

export type ProjectStatus = 'live' | 'wip' | 'planned';

// One screenshot on a project page, with an optional small title above it.
export interface Screenshot {
  src: string;
  title?: string;
}

export interface Project {
  slug: string; // used in the page address: /projects/<slug>
  title: string;
  description: string;
  images: Screenshot[]; // the first one also shows on the home page
  status: ProjectStatus;
  link: string | null; // live demo, if there is one
}

export const projects: Project[] = [
  {
    slug: 'poker-hand-analyzer',
    title: 'Poker Hand Analyzer',
    description:
      'Input a poker hand and receive recommendations based on both poker theory and exploits.',
    images: [
      {
        src: '/assets/Poker_Analyzer_App.png',
        title: 'Analyze',
      },
      {
        src: '/assets/Poker_Analyzer_NewHand.png',
        title: 'New Hand',
      },
      {
        src: '/assets/Poker_Analyzer_SavedHands.png',
        title: 'Saved Hands',
      },
    ],
    status: 'live',
    link: 'https://pokerhandanalyzer.app/',
  },
  {
    slug: 'strategy-visualizer',
    title: 'Strategy Visualizer',
    description:
      'Plot the payoff of an option or spread, while also viewing its break-even point and Greeks.',
    images: [{ src: '/assets/Strategy_Visualizer_App.png', title: 'Inputs + Payoff Diagram' }],
    status: 'live',
    link: 'https://strategy-visualizer-hazel.vercel.app/',
  },
  {
    slug: 'gamertag-lookup',
    title: 'Gamertag Lookup',
    description:
      "Look up a player once and get their stats from every game they play, pulled together from each platform's separate database.",
    images: [{ src: '/assets/GamerTag_Lookup.jpeg' }],
    status: 'planned',
    link: null,
  },
  {
    slug: 'steam-options-pricer',
    title: 'Steam Options Pricer',
    description:
      'Takes historical prices for Counter-Strike skins and builds options chains on top of them, treating the skin market like a tradable asset.',
    images: [{ src: '/assets/SteamSkin.webp' }],
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
