module.exports = {
  title: 'DHTMLX',
  tagline: 'The tagline of my site',
  url: 'https://docusaurus-for-dhtmlx-diagram.netlify.com',// 'https://veronikavasilchikova.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // 'throw'
  favicon: 'img/favicon.ico',
  organizationName: 'VeronikaVasilchikova', // Usually your GitHub org/user name.
  projectName: 'docusaurus-for-dhtmlx-diagram', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'DHTMLX',
      logo: {
        alt: 'My Site Logo',
        src: 'img/dhx-logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'}, // if you need blog-tab you can uncomment it
        {
          href: 'https://docs.dhtmlx.com/diagram/samples/',
          label: 'Samples',
          position: 'left',
        },
        {
          href: 'https://forum.dhtmlx.com/c/widgets/diagram/',
          label: 'Forum',
          position: 'left',
        },
        {
          href: 'https://dhtmlx.com/docs/technical-support.shtml',
          label: 'Support',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DHTMLX',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
