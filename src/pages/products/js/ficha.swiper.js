import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export function SwiperFicha() {
	const swiperId = '#swiperFicha'

	new Swiper(`${swiperId} .swiper`, {
		modules: [Pagination, Navigation, Autoplay],
		slidesPerView: 1,
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
		}
	})
}