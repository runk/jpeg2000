# jpeg2000

This module helps with decoding the JPEG 2000 code stream. All in vanilla javascript with no dependencies. Typings included.

```javascript
import { JpxImage } from 'jpeg2000'

const codestream = Buffer.from('ff4fff5100290000...', 'hex')

const jpx = new JpxImage()
jpx.parse(codestream)

console.log('width: %d', jpx.width)
console.log('height: %d', jpx.height)
console.log('components: %d', jpx.componentsCount)
console.log('tiles:')
console.log(jpx.tiles)
```

# Credits

This library is heavily based on [Mozilla's PDF.js](https://github.com/mozilla/pdf.js) source code.
