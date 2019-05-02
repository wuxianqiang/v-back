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
  回到顶部
</span>
```
