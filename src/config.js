const { demo } = require('./auth')

module.exports = {
  name: 'demo-app',
  router: {
    extensions: { register: [] },
    auth: {
      strategies: { demo },
    },
  },
  validator: {
    schemas: ['../schemas'],
  },
  app: {
    someSecret: {
      $filter: 'env',
      // we expect that production value would be passed in the production env so we leave it undefined
      test: 'i-am-NOT-a-secret',
    },
  },
}
