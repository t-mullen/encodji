var test = require('tape')
var emoji = require('./../src/index')

test('basic test', function (t) {
  var obj = {
    x: 1,
    y: {
      z: [1,2,3,'4','5'],
      a: {
        b: {
          c: 'c'
        }
      }
    }
  }
  
  var encoded = emoji.encode(obj)
  t.equal(typeof encoded, 'string')
  
  
  var decoded = emoji.decode(encoded)
  t.equal(decoded.x, 1)
  t.equal(decoded.y.z[4], '5')
  t.equal(decoded.y.a.b.c, 'c')
  
  t.end()
})