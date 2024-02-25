// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require('path');
const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DOCONE',
  tagline: 'heart is free',
  url: ' https://yuqiuwen.github.io',
  baseUrl: '/docone/',
  
  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/book-open.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yuqiuwen', // Usually your GitHub org/user name.
  projectName: 'docone', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false, // add a '/' to urls
  onBrokenLinks: 'warn',

  markdown: {
    mermaid: true,
    format: 'md',
  },
  themes: [
    '@docusaurus/theme-mermaid',
    // 本地搜索组件
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ]
    
  ],
  plugins: [
    // 'docusaurus-plugin-sass',
    '@docusaurus/theme-live-codeblock',
    './src/plugins/custom-tags-list-plugin.js'
  ],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

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
          feedOptions: { type: 'all', },
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
        hideOnScroll: true, // 粘性导航条
        title: 'DOCONE',
        logo: {
          alt: 'DocOne Logo',
          src: 'img/book-open.svg',
        },
        items: [
          { to: '/Blog', label: 'Blog', position: 'left' },
          
          { 
            to: 'cookbooks',
            type: 'doc', 
            docId: 'intro',
            position: 'left',
            label: 'CookBooks',
          },
          { to: 'bookmark', label: 'BookMark', position: 'left' },
          { type: 'search',position: 'right',},
          { href: 'https://github.com/yuqiuwen', label: 'GitHub', position: 'right',},
          { to: 'login', label: 'Login', position: 'right' },
        ],
      },
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true
      // },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        defaultLanguage: 'typescript',
        colorMode: {
          respectPrefersColorScheme: true
        },
      },
      mermaid: {
        // theme: {light: 'neutral', dark: 'forest'},
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
