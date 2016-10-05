var tilebelt = require('tilebelt')

exports.xyz = function (tiles) { return tiles }

exports.string = function (tiles) {
  return tiles.map(string)
}
function string (tile) { return zxy(tile).join('/') }

exports.zxy = function (tiles) {
  return tiles.map(zxy)
}
function zxy (tile) { return [tile[2], tile[0], tile[1]] }

exports.quadkey = function (tiles) {
  return tiles.map(tilebelt.tileToQuadkey)
}
exports.geojson = function (tiles) {
  return {
    type: 'FeatureCollection',
    features: tiles.map(function (tile) {
      return {
        type: 'Feature',
        properties: { tile: string(tile) },
        geometry: tilebelt.tileToGeoJSON(tile)
      }
    })
  }
}
