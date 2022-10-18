module.exports = { 
  images: { 
    domains: ['api-bwa-storegg.herokuapp.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*'
      }
    ]
  }
}