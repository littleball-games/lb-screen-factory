lb-screen-factory
=================

[![npm](https://img.shields.io/npm/v/lb-screen-factory.svg)](https://npmjs.org/package/lb-screen-factory)
[![downloads](https://img.shields.io/npm/dm/lb-screen-factory.svg)](https://npmjs.org/package/lb-screen-factory)
[![Build Status](https://travis-ci.org/littleball-games/lb-screen-factory.svg?branch=master)](https://travis-ci.org/littleball-games/lb-screen-factory)
[![Known Vulnerabilities](https://snyk.io/test/npm/lb-screen-factory/badge.svg)](https://snyk.io/test/npm/lb-screen-factory)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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
