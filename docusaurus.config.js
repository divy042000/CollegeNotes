// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CollegeNotes',
  tagline: '',
  url: 'https://college-notes-one.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // This is the property you need to add
          editUrl: 'https://github.com/BhagatHarsh/CollegeNotes/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CollegeNotes!!',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Notes',
          },
          {
            href: 'https://github.com/BhagatHarsh/CollegeNotes',
            label: 'GitHub',
            position: 'right',
          },
            {
            href: 'https://replit.com/@HarshBhagat1/CollegeNotes',
            label: 'Replit',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'Quick Links',
            // items: [
            //   {
            //     label: 'VLSI',
            //     to: 'docs/VLSI',
            //   },
            //     {
            //     label: 'OS',
            //     to: 'docs/OS',
            //   },
            //     {
            //     label: 'ENR203',
            //     to: 'docs/ENR-203',
            //   },
            //     {
            //     label: 'ECE302',
            //     to: 'docs/ECE302',
            //   },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: ['./canvas-loader']
};

module.exports = config;
