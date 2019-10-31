const { Microfleet } = require('@microfleet/core')

class DemoApp extends Microfleet {
  constructor() {
    super({
      name: 'demo-app',
      router: {
        extensions: { register: [] },
      },
    })
  }
}

module.exports = DemoApp
