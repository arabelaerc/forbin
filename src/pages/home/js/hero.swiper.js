import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function HeroSwiper() {
	const swiperId = '#swiperHero'

	new Swiper(`${swiperId} .swiper`, {
		modules: [Pagination, Navigation, Autoplay],
		slidesPerView: 1,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		// spaceBetween: 16,
		initialSlide: 0,
		slidesPerGroup: 1,
		// watchOverflow: true,
		// centeredSlides: true,
		// scrollbar: {
		// 	el: `${swiperId} .swiper-scrollbar`,
		// 	draggable: true,
		// },
		navigation: {
			nextEl: `${swiperId} .swiper-button-next`,
			prevEl: `${swiperId} .swiper-button-prev`,
		},
		pagination: {
			el: `${swiperId} .swiper-pagination`,
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