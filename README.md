lb-screen-factory
=================

A screen factory function for using canvas

```javascript
import screenFactory from 'lb-screen-factory'

const canvas = window.document.createElement('canvas')
const screen = screenFactory(canvas)

screen.setSize({
  width: 600,
  height: 400
})

const ctx = screen.getContext()

ctx.fillRect(0, 0, screen.getWidth(), screen.getHeight())
```
