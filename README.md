# Autoplay Detection

A small library to detect if autoplay with sound is working on the page.

## Installation

The package is bundled with [UMD](https://github.com/umdjs/umd), so there's support for AMD, CommonJS, and RequireJS.

### Example

```html
<script src="./dist/main.min.js"></script>
```

## Usage

The library exposes a global variable called "autoplayDetector" with a single function that returns a promise, `canAutoplay`. The promise returns a `Boolean` whether this browser can autoplay with sound on. The promise is rejected if the browser does not support video, or support promises, or supports proper video attributes outlined in [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement).

```js
autoplayDetector.canAutoplay().then(canUse => {
    if (canUse) {
        console.log('Yes, this browser can autoplay');
    } else {
        console.log('Nope, this browser cannot autoplay');
    }
}).catch(error) {
    console.log("If you're browser is this old, it needs to support video attributes.", error);
};
```