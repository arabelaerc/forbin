export function Categories() {
    const $categoriesOptions =  document.getElementById('categoriesOptions')
    const $btnOptionToggle =  $categoriesOptions.querySelector('.tabs-btn')
    const $optionsContainer = $categoriesOptions.querySelector('.tabs')


    function toggleViewOptions() {
        $categoriesOptions.classList.toggle('active')
    } 

    function closeContentOptions() {
        $categoriesOptions.classList.remove('active')
    }

    function handlerClicks(event) {
        const $target = event.target

        if ($target.closest('.tabs-btn')) {
            toggleViewOptions()
        } else if ($target.closest('.tab')) {
            renderOptionSelected()
            closeContentOptions()
        } else {
            closeContentOptions()
        }
    }

    function renderOptionSelected() {
        const $optionTextTag = document.querySelector('.tab-selected i')
        const $optionTextName = document.querySelector('.tab-selected span')
        const $optionSelected = document.querySelector('.tabs-options .tab.active')
        const $optionSelectedColor = $optionSelected.querySelector('i')
        const $optionSelectedText = $optionSelected.querySelector('span')

        $optionTextTag.style = $optionSelectedColor.style.cssText
        $optionTextName.style = $optionSelectedText.textContent
    }

    function events() {
        document.addEventListener('click', handlerClicks)
    }

    function init() {
        if ($categoriesOptions) {
            renderOptionSelected()
            events()
        }
    }

    init()
}