'use strict';

var screenFactory = (function () {
  var canvas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (canvas === null) {
    throw new Error('lb-screen requires a canvas element');
  }

  var ctx = canvas.getContext('2d');

  return Object.create({
    setSize: function setSize() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$width = _ref.width;
      var width = _ref$width === undefined ? null : _ref$width;
      var _ref$height = _ref.height;
      var height = _ref$height === undefined ? null : _ref$height;

      if (width !== null) {
        canvas.width = width;
      }
      if (height !== null) {
        canvas.height = height;
      }
    },
    getWidth: function getWidth() {
      return canvas.width;
    },
    getHeight: function getHeight() {
      return canvas.height;
    },
    getContext: function getContext() {
      return ctx;
    }
  });
});

module.exports = screenFactory;
