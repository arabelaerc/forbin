function Tabs () {
	const $inputs = document.querySelectorAll('[_component="tabs"]')

	function handleTab () {
		document.addEventListener('click', (e) => {

			if (e.target.closest('[_component="tabs"] button[_tab-id]')) {
				e.preventDefault()
				const $buttonTab = e.target.closest('button[_tab-id]')
				const contentId = $buttonTab.getAttribute('_tab-id')
				const $component = $buttonTab.closest('[_component="tabs"]')
				const $tabContent = $component.querySelector('.tabs__content')

				reset($buttonTab)
				// adding current elemets
				$buttonTab.classList.add('active')
				$tabContent.querySelector(`[_tab-id='${contentId}']`).classList.add('active')
			}
		}, true)
	}

	function reset ($buttonTab) {
		const $tabsComponent = $buttonTab.closest('[_component="tabs"]')
		const $tabElementList = $tabsComponent.querySelectorAll('button[_tab-id]')
		const $tabContentList = $tabsComponent.querySelectorAll('.tabs__content > div')

		$tabElementList.forEach( tab => {
			tab.classList.remove('active')
		})

		$tabContentList.forEach( content => {
			content.classList.remove('active')
		})
	}

	(function init () {
		if ($inputs && $inputs.length > 0) {
			handleTab()
		}
	})()
}

Tabs()