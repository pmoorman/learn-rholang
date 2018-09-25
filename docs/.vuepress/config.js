module.exports = {
  title: 'Alvalor',
  description: 'A radically modular blockchain ecosystem',
  markdown: {
    // Remove the permalinks next to each header
    anchor: { permalink: false }
  },

  // Configuration for the (default) theme
  themeConfig: {
    nav: [
      { text: 'Explore', link: '/roadmap' },
      {
        text: 'Components',
        items: [
          { text: 'Base layer', link: '/components/baselayer' },
          { text: 'Conditional Transactions', link: '/components/conditional-transactions' }
        ]
      },
      { text: 'Roadmap', link: '/roadmap' },
      { text: 'Github', link: 'https://github.com/alvalor' },
    ],
    sidebar: [
      ['/what-is-alvalor', 'What is Alvalor?'],
      ['/getting-started', 'Get Started'],
      '/roadmap',
      {
        title: 'Core Concepts',
        collapsable: true,
        children: [
          '/minimalism',
          '/adaptability',
          '/components',
          '/concept4',
          '/concept5',
        ]
      },
      {
        title: 'Use Cases',
        collapsable: true,
        children: [
          '/microtransactions',
          '/iot'
        ]
      },
    ]
  }
}
