/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Saaragh',
  tagline: 'Transform your business by leveraging Cloud and Data',
  url: 'https://saaragh.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Saaragh', // Usually your GitHub org/user name.
  projectName: 'Saaragh.com Website', // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'UA-53911001-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'Saaragh',
      logo: {
        alt: 'Saaragh Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: '/',
          // to: 'home',
          label: 'Home',
          position: 'right',
        },
        {
          to: 'about-us',
          label: 'About Us',
          position: 'right',
        },
        {
          label: 'Services',
          position: 'right',
          items: [
            {
              to: 'ai-ml-ds',
              label: 'AI, ML & Data Science',
            },
            {
              to: 'data-analytics',
              label: 'Data Analytics & Visualization',
            },
            {
              to: 'erp-solutions',
              label: 'ERP Solution - Odoo',
            },
            {
              to: 'product-engineering',
              label: 'Product Engineering',
            },
            {
              to: 'cloud-computing',
              label: 'Cloud Computing',
            },
          ],
        },
        {
          to: 'contact-us',
          label: 'Contact',
          position: 'right',
        },
        {
          to: 'jobs',
          label: 'Jobs',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          label: 'Resources',
          position: 'right',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'right',
        },        
      ],
    },
    footer: {
      style: 'light',
      logo: {
        src: 'img/logo.png',
      },
      links: [
        {
          title: 'Company Headquarters', 
          items: [
            {
              label: 'Singapore: 60 Paya Lebar Road, 06-01 Paya Lebar Square 409051.',
              to: 'contact-us',
            },
          ],
        },
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'About us',
              to: 'about-us',
            },
            {
              label: 'Privacy policy',
              to: 'privacy-policy',
            },
            {
              label: 'Jobs',
              to: 'jobs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Resources',
              to: '/docs/intro',
            },
            {
              label: 'Sitemap',
              to: '/sitemap.xml',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://in.linkedin.com/company/saaragh',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/saaragh',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/saaraght',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC41MQ-pnb1-9u-VOo_y9q5g',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Saaragh Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
