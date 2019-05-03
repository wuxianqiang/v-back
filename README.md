# v-back

back to the top

# Installation

## npm

```bash

$ npm i v-back -S

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

`el` 是滚动的容器，传入CSS选择器，传入字符串。
`duration`是滚动需要的时间，传入数字。
`distance` 是什么时候开始出现操作的元素，默认是一直出现，传入`100px`表示滚动到100像素之后出现，传入`1page`表示滚动到1屏幕的高度之后出现。
