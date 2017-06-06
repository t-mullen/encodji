# encodji
Serialize Javascript objects into user-friendly emoji strings.

## Install

Node or Browserify:
```
npm install --save encodji
```

Script tag:
```html
<script src="dist/encodji.js"></script>
```

## Usage

```javascript
var emojiString = encodji.encode({ a:1 }) // "🙏💞☝️👧👩👨👍💆👎🙌👎💛💪💨💨💨"
var object = encodji.decode(emojiString) // { a: 1 }
```
