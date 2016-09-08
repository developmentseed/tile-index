'use strict'

var test = require('tap').test
var tileIndex = require('../')

test('tileIndex', function (t) {
  var feature = {
    type: 'Feature',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-10, -10],
          [-10, 10],
          [10, 10],
          [10, -10],
          [-10, -10]
        ]
      ]
    }
  }

  var result = tileIndex(feature, { minzoom: 1, maxzoom: 4 })
  t.same(result, [ [ 4, 7, 7 ], [ 4, 8, 7 ], [ 4, 7, 8 ], [ 4, 8, 8 ] ])
  t.end()
})
