
const domready = require('domready')
require('gsap')

const Line = require('..')

function illustration(el) {

  function render() {
    path.setAttribute('d', line.path())
  }

  var out  = {p1:200, p2:260, w:250, h:437, ease:Back.easeOut, onUpdate:render}
  var over = {p1:45,  p2:45,                ease:Expo.easeOut, onUpdate:render}

  var line = Line(out)
  var path = el.querySelector('path')

  // test svg node creation on first item, insert svg after img node
  if (!path) {
    var img = el.querySelector('img')
    img.parentNode.insertBefore(line.svg(), img.nextSibling)
    path = el.querySelector('path')
  }

  render()

  el.addEventListener('mouseover', function() {
    TweenMax.to(line, .25, over)
  })

  el.addEventListener('mouseout', function() {
    TweenMax.to(line, .25, out)
  })
}

function all(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}

domready(function() {
  all('.Illustration').forEach(function(e) {
    illustration(e)
  })
})
