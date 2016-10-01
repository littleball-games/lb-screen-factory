export default (canvas = null) => {
  if (canvas === null) {
    throw new Error('lb-screen requires a canvas element')
  }

  const ctx = canvas.getContext('2d')

  return Object.create({
    setSize: ({width = null, height = null} = {}) => {
      if (width !== null) {
        canvas.width = width
      }
      if (height !== null) {
        canvas.height = height
      }
    },
    getWidth: () => canvas.width,
    getHeight: () => canvas.height,
    getContext: () => ctx
  })
}
