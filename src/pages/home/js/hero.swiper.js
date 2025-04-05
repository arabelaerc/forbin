import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

class planesSwiper {

	constructor() {
		this.swiperId = '#swiperHero'
		// Configuramos los módulos a usar
		// Swiper.use([Navigation, Pagination, Autoplay, Scrollbar])
	}

	init() {
		new Swiper(`${this.swiperId} .swiper`, {
            modules: [Pagination, Navigation, Autoplay],
			slidesPerView: 1,
			// spaceBetween: 16,
			initialSlide: 1,
			slidesPerGroup: 1,
			// watchOverflow: true,
			// centeredSlides: true,
			// scrollbar: {
			// 	el: `${this.swiperId} .swiper-scrollbar`,
			// 	draggable: true,
			// },
			navigation: {
				nextEl: `${this.swiperId} .swiper-button-next`,
				prevEl: `${this.swiperId} .swiper-button-prev`,
			},
			pagination: {
				el: `${this.swiperId} .swiper-pagination`,
				clickable: true,
				autoplayDisableOnInteraction: false,
			},
			// breakpoints: {
			// 	350: {
			// 		slidesPerView: 1.15
			// 	},
			// 	380: {
			// 		slidesPerView: 1.3
			// 	},
			// 	420: {
			// 		slidesPerView: 1.45
			// 	},
			// 	460: {
			// 		slidesPerView: 1.5
			// 	},
			// 	500: {
			// 		slidesPerView: 1.65
			// 	},
			// 	530: {
			// 		slidesPerView: 1.8
			// 	},
			// 	600: {
			// 		slidesPerView: 2
			// 	},
			// 	660: {
			// 		slidesPerView: 2.2
			// 	},
			// 	700: {
			// 		slidesPerView: 2.4
			// 	},
			// 	760: {
			// 		slidesPerView: 2.6
			// 	},
			// 	1024: {
			// 		initialSlide: 2,
			// 		slidesPerView: 3,
			// 	},
			// 	1440: {
			// 		initialSlide: 1,
			// 		slidesPerView: 4,
			// 	}
			// }
		})
	}
}

new planesSwiper().init()