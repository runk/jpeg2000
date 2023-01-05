const debug = false

export const info = (...args) => {
  if (debug) {
    console.log('INFO', ...args)
  }
}

export const warn = (...args) => {
  if (debug) {
    console.log('WARN', ...args)
  }
}