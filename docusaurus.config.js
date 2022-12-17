// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OUTOPIKÓ',
  tagline: 'Do what u wanna do and love who u wanna love',
  url: 'https://docone.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qiuwen', // Usually your GitHub org/user name.
  projectName: 'mydocs', // Usually your repo name.
  plugins: [
    // 'docusaurus-plugin-sass',
    '@docusaurus/theme-live-codeblock',
    './src/plugins/custom-tags-list-plugin.js',
  ],

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
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          feedOptions: {
            type: 'all',
          },
          showReadingTime: true,
          blogSidebarCount: 0,
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      docs: {
        sidebar: {
          hideable: true,
          // autoCollapseCategories: false,
        },
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="">GitHub</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: true,
      // }, 
      navbar: {
        hideOnScroll: true,
        title: 'OUTOPIKÓ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          { to: '/Blog', label: 'Blog', position: 'left' },
          // { to: '/cookbooks', label: 'CookBooks', position: 'left' },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'CookBooks',
          },
          {
            href: 'https://github.com/yuqiuwen',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // algolia: {
      //   appId: 'WBY9Z65YR4',
      //   apiKey: 'a6c476911e6ecef76049a55d9798a51b',
      //   indexName: 'benthos',
      //   contextualSearch: true
      // },
      prism: {
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,

        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/okaidia'),
        defaultLanguage: 'javascript',
        colorMode: {
          respectPrefersColorScheme: true
        },
      },
    }),
};

module.exports = config;
