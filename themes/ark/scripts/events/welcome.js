const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`butterfly_v${version}`)
})
