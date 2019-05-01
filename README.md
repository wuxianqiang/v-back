# v-top

back to the top

# Installation

## npm

```bash

$ npm i v-top -S

```

# Usage

main.js:

```javascript

import Vue from 'vue'
import App from './App.vue'
import VTop from 'v-top'

Vue.use(VTop)

// or with options
Vue.use(VTop, {
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
<span v-top="50">
  回到顶部
</span>
```
