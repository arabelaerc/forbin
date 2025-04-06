function Header () {
	// vars
	const $body = document.querySelector('body')
	const $header = document.querySelector('.header')
	const $menu = document.querySelector('.header__menu')
	const $openButton = document.querySelector('.hamburguer')
	const $itemsParent = document.querySelectorAll('li.menu-itehas-children > a')

	const toggleSubMenuMobile = () => {
		// iterating menu's item
		$itemsParent.forEach($item => {
			$item.addEventListener('click', e => {
				const $currentOpenItem = $header.querySelector('li.js--open')

				// reset event
				e.preventDefault()

				// reset items
				if ($currentOpenItem && $item.parentElement !== $currentOpenItem) {
					$currentOpenItem.classList.toggle('js--open')
				}

				// active current item
				$item.parentElement.classList.toggle('js--open')
			})
		})
	}

	const toggleMenuMobile = () => {
		$openButton.addEventListener('click', e => {
			// reset body
			if ($body.style.overflow === 'hidden') {
				$body.style.removeProperty('overflow')
			} else {
				// Open menu
				$body.style.overflow = 'hidden'
			}

			// open menu
			$menu.classList.toggle('js--open')

			// active button
			$openButton.classList.toggle('js--active')
		})
	}

	const handleFixedMenu = () => {
		let lastScrollTop = 0

		// window.addEventListener('scroll', () => {
		// 	var st = window.pageYOffset || document.documentElement.scrollTop

		// 	if (st === 0 ) {
		// 		$header.classList.remove('js--down')
		// 	} else if (st > lastScrollTop) {
		// 		// downscroll
		// 		$header.classList.add('js--down')
		// 		$header.classList.remove('js--up')
		// 	} else {
		// 		// upscroll
		// 		$header.classList.add('js--up')
		// 		$header.classList.remove('js--down')
		// 	}

		// 	// for Mobile or negative scrolling
		// 	lastScrollTop = st <= 0 ? 0 : st
		// 	console.log('st: ', st)
		// 	console.log('lastScrollTop: ', lastScrollTop)
		// }, false)
	}

	const onResize = () => {
		addEventListener('resize', _ => {
			if (window.innerWidth > 1024) {

				$menu.classList.remove('js--open')
				$openButton.classList.remove('js--active')
				$body.style.removeProperty('overflow')
			}
		})
	}

	(function init() {
		if ($header && $menu && $openButton) {
			// setLabelOnSearchEvent()
			// const mediaQuery = window.matchMedia('(max-width: 1023px)')

			// to mobile
			// mediaQuery.addListener(onlyMobile)
			// onlyMobile(mediaQuery)

			toggleMenuMobile()
			toggleSubMenuMobile()
			handleFixedMenu()

			// to mobil & desktop
			// setDataScroll()

			onResize()
		}
	})()
}

// init header
Header()
