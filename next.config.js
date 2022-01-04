const path = require('path')
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  // assetPrefix: !debug ? '/hertzinnotech.github.io/' : '',
  reactStrictMode: true,
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import './styles/variables.scss';
      @import './styles/mixins.scss';
    `
  },
}
