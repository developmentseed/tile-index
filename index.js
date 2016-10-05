'use strict'

var cover = require('tile-cover')
var format = require('./format')

module.exports = tileIndex

/**
 * Returns the tile coordinates for tiles that contain the given feature.
 * @param {Feature} feature A geojson feature
 * @param {object} options
 * @param {number} options.minzoom
 * @param {number} options.maxzoom
 * @param {number} options.buffer
 * @param {string} options.format 'coordinates', 'quadkey', or 'geojson'
 */
function tileIndex (feature, options) {
  var tiles = cover.tiles(feature.geometry, {
    min_zoom: options.maxzoom,
    max_zoom: options.maxzoom
  })
  return format[options.format || 'zxy'](tiles)
}

