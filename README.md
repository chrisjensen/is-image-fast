# is-image-fast

Check if a url is an image
Forked from [is-image-url](https://github.com/wzbg/is-image-url) to make requests async and
use HTTP HEAD so body of image is not fetched

## Install

```
$ npm install --save is-image-fast
```


## Usage

```js
const isImageFast = require('is-image-fast');

await isImageFast('https://timedotcom.files.wordpress.com/2015/08/gettyimages-482708894.jpg?quality=65&strip=color&w=1100');
//=> true

await isImageFast('http://time.com/3981644/hong-kong-breast-assault-protest/');
//=> false
```

## License

Licensed under [No Harm License](https://github.com/raisely/noharm)