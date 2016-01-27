# svg-line

> Draw a simple svg shape with a line path

## Install

```bash
npm i svg-line
```

## API

#### constructor([options])

| Option | Action |
| :------ | :------- |
| **w** | svg width |
| **h** | svg height |
| **d** | direction of the drawing &mdash; top, right, bottom, left |
| **p1** | first point |
| **p2** | second point |

```js
const Line = require('svg-line')

var line = new Line({p1:10, p2:50, w:100, h:200})

// also allowed
var line = Line({p1:10, p2:50, w:100, h:200})

// all options are also accessible via getter/setter
peak.d = 'top'
peak.p1 = 100
```

#### svg()

Return svg node

```js
var line = Line({p1:10, p2:50, w:100, h:200})

/*
<svg viewBox="0 0 100 200" preserveAspectRatio="none">
  <path d="M0 0 V10 L100 50 V0 z"></path>
</svg>
*/
var svg = line.svg()
```

#### path()

Return path value

```js
var line = Line({p1:10, p2:50, w:100, h:200})

line.p1 = 20
// M0 0 V20 L100 50 V0 z
var path = line.path()
```

## Demo

```bash
npm i && npm start
```

## Related

- <a href="https://github.com/jeromedecoster/svg-cubic" target="_blank">svg-cubic</a>
- <a href="https://github.com/jeromedecoster/svg-peak" target="_blank">svg-peak</a>
- <a href="https://github.com/jeromedecoster/svg-quad" target="_blank">svg-quad</a>

## Thanks

Mainly forked / inspired on <a href="http://tympanus.net/codrops/2014/01/07/shape-hover-effect-with-svg" target="_blank">Codrops</a> and <a href="http://cargocollective.com/isaac317" target="_blank">Isaac Montemayor</a>

## License

MIT
