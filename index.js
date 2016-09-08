'use strict'

var cover = require('tile-cover')
var tilebelt = require('tilebelt')

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
  .map(function (tile) {
    switch (options.format) {
      case 'quadkey': return tilebelt.tileToQuadkey(tile)
      case 'geojson': return {
        type: 'Feature',
        properties: { tile: [tile[2], tile[0], tile[1]].join('/') },
        geometry: tilebelt.tileToGeoJSON(tile)
      }
      default: return [tile[2], tile[0], tile[1]]
    }
  })

  if (options.format === 'geojson') {
    return { type: 'FeatureCollection', features: tiles }
  } else {
    return tiles
  }
}

