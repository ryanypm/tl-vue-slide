## tl-vue-slide
[![npm](https://img.shields.io/npm/v/tl-vue-slide.svg)](https://www.npmjs.com/package/vue-concise-slider)
[![npm](https://img.shields.io/npm/dw/tl-vue-slide.svg)](https://www.npmjs.com/package/tl-vue-slide)
[![npm](https://img.shields.io/github/size/ryanypm/tl-vue-slide/dist/bundle.js.svg)](https://www.npmjs.com/package/tl-vue-slide)

## 安装
```html
npm install tl-vue-slide --save
```

## 使用
```html
<tl-slide>
  <tl-slide-item :key="item" v-for="item in data">
    {{item}}
  </tl-slide-item>
</tl-slide>

<script>
export default {
  data() {
    return {
      data: [
        'slide1',
        'slide2',
        'slide3',
        'slide4',
        'slide5',
        'slide6',
      ]
    };
  },
}
</script>
```

## Api
`this.$refs.slider.next()` 切换到下一张


`this.$refs.slider.prev()` 切换到上一张

`this.$refs.slider.slideTo(num, isAnimate)` 切换到指定位置(num: 索引, isAnimate: 是否动画)

## 事件
`slide` 返回当前索引

## 调试
```html
npm run dev
```

## 版本
- __Version 1.0.0__ 第一次发布

