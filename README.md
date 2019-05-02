# v-back

back to the top

# Installation

## npm

```bash

$ npm i v-back -D

```

# Usage

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VBack from 'v-back'

Vue.use(VBack)

// or with options
Vue.use(VBack, {
  el: '#wrapper',
  duration: 300
})

new Vue({
  el: 'body',
  components: {
    App
  }
})
```

template:

```html
<span v-back="50">
  top
</span>
```
> Scroll to the top 50

use `v-back` in the container

```
Vue.use(VBack, {
  el: '#wrapper',
  duration: 300,
  distance: '50px'
})
```

## Constructor Options
|key|description|default|options|
|:---|---|---|---|
| `el`|scroll container|`window`|`String`|
|`duration`|Rolling time|`300`|`Number`|
|`distance`|When does the scrolling element appear?|Always appear|`String`|
