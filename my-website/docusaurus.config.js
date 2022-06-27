// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const today = new Date().getHours();


let selamat = () => {

  if (today < 11) {
   return "Selamat Pagi"
  } else if (today < 15) {
    return "Selamat Siang"
  } else if (today <= 18) {
    return "Selamat Sore"
  } else {
    return "Selamat Malam"
  }
}


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${selamat() }`,
  tagline: 'Nasi goreng adalah sebuah konsumsi berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah kecap manis, bawang merah, bawang putih, asam jawa, lada dan bumbu-bumbu lainnya, seperti telur, ayam, dan kerupuk.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'danawanb', // Usually your GitHub org/user name.
  projectName: 'docusaku', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Logo DSP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logosmile.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Buku Saku',
          },
          {to: '/blog', label: 'Jadwal', position: 'left'},
          {
            href: 'https://github.com/danawanb',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Subdit SPKPP, Direktorat Sistem Perbendaharaan.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
};

module.exports = config;
