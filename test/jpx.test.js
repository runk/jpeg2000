const fs = require('fs')
const assert = require('assert')
const path = require('path')
const { JpxImage } = require('../src/jpx.js')

const bytes = fs.readFileSync(path.join(__dirname, 'input.j2k'))

it('happy path', () => {
  const jpxImage = new JpxImage()
  jpxImage.parse(bytes)
  assert.equal(jpxImage.width, 63677)
  assert.equal(jpxImage.height, 1)
  assert.equal(jpxImage.componentsCount, 1)
  assert.equal(jpxImage.tiles.length, 1)

  const tile = jpxImage.tiles[0]
  const expected = fs.readFileSync(path.join(__dirname, 'expected.raw'))
  assert.deepEqual(tile, {
    height: 1,
    width: 63677,
    top: 0,
    left: 0,
    items: Uint8ClampedArray.from(expected),
  })
})
