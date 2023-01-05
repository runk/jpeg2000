import fs from 'fs'
import assert from 'assert'
import { JpxImage } from '../src/jpx.js'

const bytes = fs.readFileSync(new URL('input.j2k', import.meta.url))

it('happy path', () => {
	const jpxImage = new JpxImage()
	jpxImage.parse(bytes)
	assert.equal(jpxImage.width, 63677)
	assert.equal(jpxImage.height, 1)
	assert.equal(jpxImage.componentsCount, 1)
	assert.equal(jpxImage.tiles.length, 1)

	const tile = jpxImage.tiles[0]
	const expected = fs.readFileSync(new URL('expected.raw', import.meta.url))
	assert.deepEqual(tile, {
		height: 1,
		width: 63677,
		top: 0,
		left: 0,
		items: Uint8ClampedArray.from(expected),
	})
})
