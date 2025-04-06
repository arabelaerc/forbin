function Modal () {
	// Vars
	let isOpen = false
	let elementModal // It's a current modal
	const elementBody = document.querySelector('body')
	const existModal = document.querySelector('[data-modal]')
	const buttonClose = '[data-modal-close]'
	const modalIn = '[data-modal-in]'

	const openModal = (element) => {
		const modalId = element.dataset.modalIn // current modal id
		const innerWidthWindow = window.innerWidth //" 563
		const innerWidthBody = elementBody.offsetWidth // Get body width without browser scroll width |" 546
		const marginElementBody = innerWidthWindow - innerWidthBody //" 17

		elementBody.style.overflow = 'hidden' // Add style to remove scroll
		elementBody.style.marginRight = `${marginElementBody}px`

		elementModal = document.getElementById(modalId) // Set current modal element
		elementModal.classList.add('js--open') // Open modal
		isOpen = true
	}

	const closeModal = () => {
		elementBody.style.overflow = null
		elementBody.style.marginRight = null

		elementModal.classList.remove('js--open') // Close modal
		isOpen = false
	}

	(function init(){
		if (existModal) {
			document.addEventListener('click', e => {
				const element = e.target
				console.log('Modal element: ', element)
				if (element.matches(modalIn)) {
					openModal(element)
				}

				if (element.matches(buttonClose)) {
					closeModal()
				}
				// Cerrar modal desde overlay
				if (element.matches('.modal__animation') || element.matches('.scene')) {
					closeModal()
				}
			})

			document.addEventListener('keydown', e => {

				if (isOpen && e.key == 'Escape') {
					closeModal()
				}
			})
		}
	})()
}

Modal()
