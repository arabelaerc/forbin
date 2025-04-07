import { HeroSwiper } from './js/hero.swiper'
import { Map } from './js/map.init'

console.log('#MAP JS')

const page = document.querySelector('.page__home')
if (page) {
  HeroSwiper()
  Map()
}

