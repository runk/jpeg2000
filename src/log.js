const debug = false

exports.info = (...args) => {
  if (debug) {
    console.log('INFO', ...args)
  }
}

exports.warn = (...args) => {
  if (debug) {
    console.log('WARN', ...args)
  }
}