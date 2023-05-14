
const app = require('./app')
const {logger} = require('./utils/logger')

app.listen(3000, () => {
  logger.info('app is running')
})
