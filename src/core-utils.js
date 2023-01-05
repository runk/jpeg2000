// Calculate the base 2 logarithm of the number `x`. This differs from the
// native function in the sense that it returns the ceiling value and that it
// returns 0 instead of `Infinity`/`NaN` for `x` values smaller than/equal to 0.

export const log2 = (x) => {
	if (x <= 0) {
		return 0
	}
	return Math.ceil(Math.log2(x))
}

export const readInt8 = (data, offset) => data.readInt8(offset)

export const readUint16 = (data, offset) => data.readUInt16BE(offset)

export const readUint32 = (data, offset) => data.readUInt32BE(offset)
