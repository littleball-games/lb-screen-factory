import tape from 'tape'
import {mocks} from 'mock-browser'
import screenFactory from './screenFactory'

const mock = new mocks.MockBrowser()
const doc = mock.getDocument()

tape('screenFactory', test => {
  const canvas = doc.createElement('canvas')

  test.equal(typeof screenFactory, 'function', 'should be a function')

  const screen = screenFactory(canvas)

  test.equal(typeof screen, 'object', 'should return an object')
  test.equal(typeof screen.setSize, 'function', 'should have a setSize function')
  test.equal(typeof screen.getWidth, 'function', 'should have a getWidth function')
  test.equal(typeof screen.getHeight, 'function', 'should have a getHeight function')
  test.equal(typeof screen.getContext, 'function', 'should have a getContext function')

  test.end()
})

tape('screenFactory.getWidth', test => {
  const canvas = doc.createElement('canvas')
  canvas.width = 1
  canvas.height = 1

  test.equal(canvas.width, 1, 'verify our mock width has a small size')
  test.equal(canvas.height, 1, 'verify our mock height has a small size')

  const screen = screenFactory(canvas)

  screen.setSize()
  test.equal(canvas.width, 1, 'screen width should not have changed')
  test.equal(canvas.height, 1, 'screen height should not have changed')

  screen.setSize({width: 123})
  test.equal(canvas.width, 123, 'screen width should be set to 123')
  test.equal(canvas.height, 1, 'screen height should not have changed')

  screen.setSize({height: 456})
  test.equal(canvas.width, 123, 'screen width should not have changed')
  test.equal(canvas.height, 456, 'screen height should be set to 456')

  screen.setSize({width: 20, height: 40})
  test.equal(canvas.width, 20, 'screen width should be 20')
  test.equal(canvas.height, 40, 'screen height should be 40')

  test.end()
})

tape('screenFactory.getWidth', test => {
  const canvas = doc.createElement('canvas')

  const screen = screenFactory(canvas)
  screen.setSize({width: 100})

  test.equal(screen.getWidth(), 100, 'should return 100 as the screen width')

  test.end()
})

tape('screenFactory.getHeight', test => {
  const canvas = doc.createElement('canvas')

  const screen = screenFactory(canvas)
  screen.setSize({height: 100})

  test.equal(screen.getHeight(), 100, 'should return 100 as the screen height')

  test.end()
})

tape('screenFactory.getContext', test => {
  const canvas = doc.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const screen = screenFactory(canvas)
  test.equal(typeof screen.getContext(), typeof ctx, 'should return a 2d context')

  test.end()
})
