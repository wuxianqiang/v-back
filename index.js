let Vue;
const install = (_Vue, options = {}) => {
  Vue = _Vue;
  Vue.directive('back', (el, bindings) => {
    let scrollPosition = calculation(bindings.value)
    let eventTarget = window;
    let scrollContainer = document.documentElement;
    Vue.nextTick(() => {
      if (options.el) {
        eventTarget = options.el
        scrollContainer = document.querySelector(options.el) || document.documentElement;
      }
      let appearancePosition = calculation(options.distance)
      eventTarget.appearancePosition = appearancePosition
      eventTarget.el = el
      eventTarget.scrollContainer = scrollContainer
      eventTarget.addEventListener('scroll', handleScroll)
      handleClick(eventTarget, el, scrollPosition, options.duration, options.interval);
    })
  })
}

function handleScroll () {
  this.el.style.display = this.scrollContainer.scrollTop >= this.appearancePosition ? 'block' : 'none'
}

function calculation (num = 0) {
  let reg = /^(\d+)(px|page)?$/;
  let res = 0;
  if (reg.test(num)) {
    let [, count, unit = 'px'] = reg.exec(num);
    if (unit === 'px') {
      res = count;
    } else if (unit === 'page') {
      res = count * document.documentElement.clientHeight;
    }
  }
  return res
}

function handleClick (container, el, scrollPosition = 0, duration = 300, interval = 10) {
  el.addEventListener('click', () => {
    container.removeEventListener('scroll', handleScroll)
    let distance = container.scrollContainer.scrollTop
    let step = (distance / duration) * interval;
    let timer = setInterval(() => {
      let curTop = container.scrollContainer.scrollTop
      curTop -= step;
      if (curTop <= scrollPosition) {
        clearInterval(timer);
        container.scrollContainer.scrollTop = scrollPosition;
        container.addEventListener('scroll', handleScroll)
        return;
      }
      container.scrollContainer.scrollTop = curTop;
    }, interval)
  })
}

export default {
  install
}
