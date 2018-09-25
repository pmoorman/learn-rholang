module.exports = {
  title: 'Rholang Tutorial',
  description: 'Learn Rholang with Joshy',
  markdown: {
    // Remove the permalinks next to each header
    anchor: { permalink: false }
  },

  // Configuration for the (default) theme
  themeConfig: {
    nav: [
      {
        text: 'Tutorials',
        items: [
          { text: 'Rholang 101', link: '/lesson1' },
          { text: 'Rholang 201', link: '/lesson1' }
        ]
      },
      { text: 'Documentation', link: 'https://developer.rchain.coop/' },
      { text: 'RChain', link: 'https://rchain.coop' },
    ],
    sidebar: [
      ['/lesson1', 'Introduction'],
      '/receiving',
      {
        title: 'Rholang 101',
        collapsable: true,
        children: [
          '/sending-and-stdout',
          '/receiving'
        ]
      },
      {
        title: 'Rholang 201',
        collapsable: true,
        children: [
          '/lesson1',
          '/lesson2'
        ]
      }
    ]
  }
}
