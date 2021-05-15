module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/about': { page: '/404' },
        '/blog': { page: '/blog'},
        '/github': { page: '/github', query: { data: 'data' } }
      }
    },
    trailingSlash: true
  }